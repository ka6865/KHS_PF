import { cp, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const clientDir = new URL("../dist/client/", import.meta.url);
const clientPath = fileURLToPath(clientDir);
const serverEntry = new URL("../dist/server/index.js", import.meta.url);
const pagesBasePath = process.env.PAGES_BASE_PATH ?? "/KHS_PF";

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
]);

function withBasePath(html) {
  const normalizedBase = pagesBasePath === "/" ? "" : pagesBasePath.replace(/\/$/, "");

  if (!normalizedBase) return html;

  return html
    .replaceAll('href="/assets/', `href="${normalizedBase}/assets/`)
    .replaceAll('href="/portfolio-assets/', `href="${normalizedBase}/portfolio-assets/`)
    .replaceAll('href="/favicon.svg', `href="${normalizedBase}/favicon.svg`)
    .replaceAll('src="/assets/', `src="${normalizedBase}/assets/`)
    .replaceAll('src="/portfolio-assets/', `src="${normalizedBase}/portfolio-assets/`);
}

async function findClientEntry() {
  const assetsDir = new URL("assets/", clientDir);
  const files = await readdir(assetsDir);

  for (const file of files) {
    if (!/^index-[\w-]+\.js$/.test(file)) continue;

    const source = await readFile(new URL(file, assetsDir), "utf8");
    if (source.includes("__VINEXT_RSC_ROOT__") && source.includes("hydrateRoot")) {
      return file;
    }
  }

  throw new Error("Failed to find Vinext client entry chunk.");
}

async function patchAssetBasePath() {
  const normalizedBase = pagesBasePath === "/" ? "" : pagesBasePath.replace(/\/$/, "");
  if (!normalizedBase) return;

  const assetsDir = new URL("assets/", clientDir);
  const files = await readdir(assetsDir);

  await Promise.all(
    files
      .filter((file) => file.endsWith(".js"))
      .map(async (file) => {
        const assetUrl = new URL(file, assetsDir);
        const source = await readFile(assetUrl, "utf8");
        const patched = source.replaceAll("return`/`+e", `return\`${normalizedBase}/\`+e`);

        if (patched !== source) {
          await writeFile(assetUrl, patched);
        }
      }),
  );
}

async function withClientEntryScript(html) {
  const normalizedBase = pagesBasePath === "/" ? "" : pagesBasePath.replace(/\/$/, "");
  const clientEntry = await findClientEntry();
  const scriptTag = `<script type="module" src="${normalizedBase}/assets/${clientEntry}"></script>`;

  if (html.includes(scriptTag)) return html;

  return html.replace("</head>", `${scriptTag}</head>`);
}

async function fetchAsset(pathname) {
  const assetPath = pathname.replace(/^\//, "");
  const fileUrl = new URL(assetPath, clientDir);
  const body = await readFile(fileUrl);
  const contentType = contentTypes.get(extname(assetPath)) ?? "application/octet-stream";

  return new Response(body, {
    headers: { "content-type": contentType },
  });
}

const workerUrl = new URL(serverEntry.href);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("http://localhost/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async (request) => {
        const url = new URL(request.url);
        return fetchAsset(url.pathname);
      },
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Failed to render static HTML: ${response.status}`);
}

const html = await withClientEntryScript(withBasePath(await response.text()));
await mkdir(clientDir, { recursive: true });
await writeFile(new URL("index.html", clientDir), html);
await writeFile(new URL("404.html", clientDir), html);
await writeFile(new URL(".nojekyll", clientDir), "");
await patchAssetBasePath();

const openGraphSource = new URL("public/favicon.svg", root);
const openGraphTarget = join(clientPath, "favicon.svg");
await cp(openGraphSource, openGraphTarget);

console.log(`GitHub Pages static export written to ${clientPath}`);
