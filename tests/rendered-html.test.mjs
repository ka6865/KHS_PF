import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>Kang Hee Sung Portfolio/i);
  assert.match(html, /강희성/);
  assert.match(html, /Full-stack Developer Journey/);
  assert.match(html, /운영 서비스 BGMS를 개발·개선하는 풀스택 개발자/);
  assert.match(html, /Full-stack Developer/);
  assert.doesNotMatch(html, /Full-stack \/ AI Developer/);
  assert.match(html, /BGMS.kr 운영 서비스/);
  assert.match(html, /BGMS 대표 제품 화면/);
  assert.match(html, /LIVE SERVICE/);
  assert.match(html, /프로젝트 보기/);
  assert.match(html, /GitHub 보기/);
  assert.match(html, /Email 보내기/);
  assert.match(html, /Started/);
  assert.match(html, /Scope/);
  assert.match(html, /Operations/);
  assert.doesNotMatch(html, /Command Center|Production on Vercel|대표 프로젝트/);
  assert.match(html, /About Me/);
  assert.match(html, /BGMS에서 보여준 구현 범위/);
  assert.match(html, /화면 흐름 설계/);
  assert.match(html, /분석 결과 제품화/);
  assert.match(html, /인증과 권한 분리/);
  assert.match(html, /외부 API 예외 처리/);
  assert.doesNotMatch(html, /Site Map|읽는 사람이 자연스럽게 따라오도록|어떤 개발자인지 먼저 읽을 수 있도록/);
  assert.match(html, /BattleGrounds Management System/);
  assert.match(html, /https:\/\/bgms\.kr/);
  assert.match(html, /BGMS 기능 쇼케이스/);
  assert.match(html, /AI 전적 검색/);
  assert.match(html, /AI 개별 전적 분석/);
  assert.match(html, /핵심 문제/);
  assert.match(html, /해결 방식/);
  assert.match(html, /운영 보완/);
  assert.match(html, /맵 정보 레이어 탐색/);
  assert.match(html, /실시간 전술 랭킹/);
  assert.match(html, /커뮤니티/);
  assert.match(html, /portfolio-assets\/bgms-feature-search\.png/);
  assert.match(html, /PUBG API 실패를 route·status·원인 문맥별로 기록/);
  assert.match(html, /모델 폴백, 스트리밍 응답, 결과 캐시와 사용량 추적/);
  assert.match(html, /Turnstile 서버 검증과 요청 제한을 거치게/);
  assert.match(html, /Turnstile/);
  assert.doesNotMatch(html, /Discord 금일 운영 리포트/);
  assert.doesNotMatch(html, />이전 기능</);
  assert.doesNotMatch(html, />다음 기능</);
  assert.doesNotMatch(html, /현재 기능 위치/);
  assert.doesNotMatch(html, /검증 가능한 링크/);
  assert.doesNotMatch(html, /From Map Tool to Operating Service/);
  assert.doesNotMatch(html, /Problem|Approach|Result|Detailed Breakdown|Next Iteration|Quality Proof/);
  assert.match(html, /AI Trading Assistant/);
  assert.match(html, /portfolio-assets\/ai-trading\.png/);
  assert.match(html, /portfolio-assets\/subway-dashboard\.png/);
  assert.match(html, /portfolio-assets\/kbo-ticket\.png/);
  assert.match(html, /Projects Archive/);
  assert.match(html, /프로젝트 쇼케이스/);
  assert.doesNotMatch(html, />이전 프로젝트</);
  assert.doesNotMatch(html, />다음 프로젝트</);
  assert.match(html, /핵심 문제/);
  assert.match(html, /해결 방식/);
  assert.match(html, /결과/);
  assert.match(html, /Docker/);
  assert.match(html, /AWS EC2 배포 경험/);
  assert.match(html, /XGBoost/);
  assert.match(html, /거래 상태 불일치 방지/);
  assert.match(html, /Subway 1_8/);
  assert.match(html, /KBO Ticket Platform/);
  assert.match(html, /Tech Stack/);
  assert.match(html, /프로젝트 전반에서 사용한 기술 스택 및 운영 역량/);
  assert.match(html, /Frontend/);
  assert.match(html, /Backend/);
  assert.match(html, /AI \/ Data/);
  assert.doesNotMatch(html, /Experience \/ Growth/);
  assert.match(html, /같이 일할 준비가 된 개발자/);
  assert.match(html, /화면과 코드로 설명할 수 있게 준비했습니다/);
  assert.doesNotMatch(html, /Technical Depth|How I Work|Development Record|최근 프로젝트 흐름/);
  assert.match(html, /https:\/\/github\.com\/ka6865\/pubg-map-app/);
  assert.match(html, /ka6865\.gmail\.com|ka6865@gmail\.com/);
  assert.doesNotMatch(html, /_vinext\/image|next\/image/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("keeps the portfolio structure and product interactions in sync", async () => {
  const [page, slider, projectShowcase, styles, layout, packageJson, readme] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/BgmsFeatureSlider.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/TeamProjectShowcase.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../README.md", import.meta.url), "utf8"),
  ]);

  assert.match(page, /heroProofs/);
  assert.match(page, /aboutHighlights/);
  assert.doesNotMatch(page, /siteMapItems|Site Map|읽는 사람이 자연스럽게 따라오도록/);
  assert.match(page, /PortfolioNav/);
  assert.match(page, /HeroBusinessCard/);
  assert.match(page, /ArchitectureDiagram/);
  assert.doesNotMatch(page, /heroMockupSlides/);
  assert.match(page, /bgmsFeatureSlides/);
  assert.match(page, /caseStudy:/);
  assert.match(page, /BgmsFeatureSlider/);
  assert.match(slider, /slides\.length/);
  assert.match(slider, /activeSlide\.caseStudy/);
  assert.match(slider, /feature-case-study-lead/);
  assert.ok(slider.indexOf("feature-slide-thumbs") < slider.indexOf("featured-media"));
  assert.match(slider, /onWheel=\{handleWheel\}/);
  assert.match(slider, /onPointerDown=\{startPointerDrag\}/);
  assert.doesNotMatch(slider, /\/ 06/);
  assert.match(slider, /loading=\{activeIndex === 0 \? "eager" : "lazy"\}/);
  assert.match(slider, /fetchPriority=\{activeIndex === 0 \? "high" : "auto"\}/);
  assert.match(slider, /aria-label=\{`\$\{slide\.title\} 기능 자세히 보기`\}/);
  assert.match(page, /techGroups/);
  assert.doesNotMatch(page, /growthItems/);
  assert.match(page, /portfolio-assets\/ai-trading\.png/);
  assert.match(page, /portfolio-assets\/subway-dashboard\.png/);
  assert.match(page, /portfolio-assets\/kbo-ticket\.png/);
  assert.match(page, /TeamProjectShowcase/);
  assert.match(page, /problem:/);
  assert.match(page, /solution:/);
  assert.doesNotMatch(page, /project-grid|projects\.map\(\(project, index\)/);
  assert.match(projectShowcase, /useEmblaCarousel/);
  assert.match(projectShowcase, /watchDrag: false/);
  assert.match(projectShowcase, /onWheel=\{handleWheel\}/);
  assert.match(projectShowcase, /onPointerDown=\{startPointerDrag\}/);
  assert.match(projectShowcase, /project-showcase/);
  assert.match(projectShowcase, /project-showcase-media/);
  assert.match(projectShowcase, /project\.problem/);
  assert.match(projectShowcase, /project\.solution/);
  assert.match(projectShowcase, /finishPointerDrag/);
  assert.doesNotMatch(projectShowcase, /project-showcase-controls/);
  assert.ok(projectShowcase.indexOf("project-showcase-tabs") < projectShowcase.indexOf("project-showcase-viewport"));
  assert.doesNotMatch(page, /project-rail/);
  assert.match(styles, /hero-layout/);
  assert.match(styles, /hero-panel/);
  assert.match(styles, /hero-product-stage/);
  assert.match(styles, /hero-product-meta/);
  assert.match(styles, /\.top-nav \.nav-links a\.is-active/);
  assert.match(styles, /hero-quick-links/);
  assert.match(styles, /hero-profile-list/);
  assert.match(styles, /marquee-track/);
  assert.match(styles, /about-highlight-grid/);
  assert.match(styles, /feature-case-study/);
  assert.match(styles, /feature-slider/);
  assert.match(styles, /feature-slide-thumbs/);
  assert.match(styles, /object-fit: contain/);
  assert.match(styles, /grid-template-columns: repeat\(auto-fit, minmax\(150px, 1fr\)\)/);
  assert.doesNotMatch(styles, /operations-grid/);
  assert.doesNotMatch(styles, /operation-card/);
  assert.doesNotMatch(styles, /case-summary-grid/);
  assert.match(styles, /project-proof/);
  assert.match(styles, /project-showcase/);
  assert.match(styles, /project-showcase-media/);
  assert.doesNotMatch(styles, /\.project-grid/);
  assert.doesNotMatch(styles, /\.project-card|project-card-top|project-visual/);
  assert.match(styles, /tech-grid/);
  assert.doesNotMatch(styles, /growth-list/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media \(hover: hover\)/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(styles, /\.primary-link:hover/);
  assert.match(layout, /lang="ko"/);
  assert.match(packageJson, /"name": "kang-heesung-portfolio"/);
  assert.match(packageJson, /"embla-carousel-react"/);
  assert.match(packageJson, /"typecheck": "tsc --noEmit"/);
  assert.match(readme, /취업용 풀스택 포트폴리오/);
  assert.match(readme, /프로젝트 구조/);
  assert.match(readme, /npm run dev/);
  assert.doesNotMatch(readme, /현재 로컬 폴더는 Git 저장소가 아닙니다/);
  assert.doesNotMatch(page, /from "next\/image"/);
  assert.doesNotMatch(page, /AI 에이전트 생산성 파이프라인|프로덕션 수준|완품|AWS EC2 배포를 자동화|배포를 자동화했습니다|커뮤니티 보호 자동화/);
  assert.doesNotMatch(page, /TacticalHeroCompare|three-mount|3D Hero|THREE/);
  assert.doesNotMatch(page, /Command Center|profileStats|timeline|workflow|technicalDepth|capabilities/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  await access(new URL("../app/components/PortfolioNav.tsx", import.meta.url));
  assert.doesNotMatch(packageJson, /react-loading-skeleton|three|playwright/);

  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", root)));
  await assert.rejects(access(new URL("app/components/TacticalHeroCompare.tsx", root)));
});
