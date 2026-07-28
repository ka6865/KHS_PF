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
  assert.match(html, /<title>Kang Hee Sung Portfolio<\/title>/i);
  assert.match(html, /강희성/);
  assert.match(html, /Full-stack Developer Journey/);
  assert.match(html, /운영 중인 PUBG 데이터 서비스 BGMS를 만든 풀스택 개발자/);
  assert.match(html, /Full-stack \/ AI Developer/);
  assert.match(html, /BGMS.kr 운영 서비스/);
  assert.match(html, /프로젝트 보기/);
  assert.match(html, /GitHub 보기/);
  assert.match(html, /Email 보내기/);
  assert.match(html, /Main Project/);
  assert.match(html, /Focus/);
  assert.match(html, /Contact/);
  assert.doesNotMatch(html, /Command Center|Production on Vercel|대표 프로젝트/);
  assert.match(html, /About Me/);
  assert.match(html, /BGMS에서 보여준 구현 범위/);
  assert.match(html, /화면 흐름 설계/);
  assert.match(html, /AI 결과 화면화/);
  assert.match(html, /인증과 권한 분리/);
  assert.match(html, /외부 API 예외 처리/);
  assert.doesNotMatch(html, /Site Map|읽는 사람이 자연스럽게 따라오도록|어떤 개발자인지 먼저 읽을 수 있도록/);
  assert.match(html, /BattleGrounds Management System/);
  assert.match(html, /https:\/\/bgms\.kr/);
  assert.match(html, /BGMS 기능 쇼케이스/);
  assert.match(html, /AI 전적 검색/);
  assert.match(html, /AI 개별 전적 분석/);
  assert.match(html, /맵 정보 레이어 탐색/);
  assert.match(html, /실시간 전술 랭킹/);
  assert.match(html, /커뮤니티/);
  assert.match(html, /portfolio-assets\/bgms-feature-search\.png/);
  assert.match(html, /운영 관리를 고려한 관리자 시스템/);
  assert.match(html, /관리자 권한과 승인 게이트/);
  assert.match(html, /운영 모니터링/);
  assert.match(html, /커뮤니티 보호 흐름/);
  assert.match(html, /RLS/);
  assert.match(html, /신고 흐름/);
  assert.doesNotMatch(html, /GitHub Actions/);
  assert.match(html, /이전 기능/);
  assert.match(html, /다음 기능/);
  assert.match(html, /담당 범위/);
  assert.doesNotMatch(html, /검증 가능한 링크/);
  assert.match(html, /문제 해결 중심 케이스/);
  assert.match(html, /case-summary-number/);
  assert.match(html, /case-summary-content/);
  assert.match(html, /각각 다른 도구에서 확인해야 하는 흐름/);
  assert.match(html, /1인 풀스택 개발자로 UX 구조, 프론트엔드 화면, 데이터 흐름, 인증\/권한, AI 분석 기능을 직접 연결/);
  assert.match(html, /핵심 구현 판단/);
  assert.match(html, /탐색에서 분석까지 이어지는 흐름/);
  assert.match(html, /외부 API와 서비스 데이터를 분리/);
  assert.doesNotMatch(html, /Problem|Approach|Result|Detailed Breakdown|Next Iteration|Quality Proof/);
  assert.match(html, /AI Trading Assistant/);
  assert.match(html, /portfolio-assets\/ai-trading\.png/);
  assert.match(html, /portfolio-assets\/subway-dashboard\.png/);
  assert.match(html, /portfolio-assets\/kbo-ticket\.png/);
  assert.match(html, /Projects Archive/);
  assert.match(html, /프로젝트 쇼케이스/);
  assert.match(html, /이전 프로젝트/);
  assert.match(html, /다음 프로젝트/);
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
  assert.match(html, /Experience \/ Growth/);
  assert.match(html, /같이 일할 준비가 된 개발자/);
  assert.match(html, /화면과 코드로 설명할 수 있게 준비했습니다/);
  assert.doesNotMatch(html, /Technical Depth|How I Work|Development Record|최근 프로젝트 흐름/);
  assert.match(html, /https:\/\/github\.com\/ka6865\/pubg-map-app/);
  assert.match(html, /ka6865\.gmail\.com|ka6865@gmail\.com/);
  assert.doesNotMatch(html, /_vinext\/image|next\/image/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("keeps starter and rejected 3D experiment code out of the portfolio", async () => {
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
  assert.match(page, /heroProfileItems/);
  assert.match(page, /bgmsScope/);
  assert.match(page, /bgmsDecisions/);
  assert.match(page, /bgmsFeatureSlides/);
  assert.match(page, /bgmsOperations/);
  assert.match(page, /BgmsFeatureSlider/);
  assert.match(slider, /slides\.length/);
  assert.doesNotMatch(slider, /\/ 06/);
  assert.match(slider, /loading=\{activeIndex === 0 \? "eager" : "lazy"\}/);
  assert.match(slider, /fetchPriority=\{activeIndex === 0 \? "high" : "auto"\}/);
  assert.match(slider, /aria-label=\{`\$\{slide\.title\} 기능 자세히 보기`\}/);
  assert.match(page, /techGroups/);
  assert.match(page, /growthItems/);
  assert.match(page, /portfolio-assets\/ai-trading\.png/);
  assert.match(page, /portfolio-assets\/subway-dashboard\.png/);
  assert.match(page, /portfolio-assets\/kbo-ticket\.png/);
  assert.match(page, /TeamProjectShowcase/);
  assert.match(page, /problem:/);
  assert.match(page, /solution:/);
  assert.doesNotMatch(page, /project-grid|projects\.map\(\(project, index\)/);
  assert.match(projectShowcase, /useEmblaCarousel/);
  assert.match(projectShowcase, /project-showcase/);
  assert.match(projectShowcase, /project-showcase-media/);
  assert.match(projectShowcase, /project\.problem/);
  assert.match(projectShowcase, /project\.solution/);
  assert.match(projectShowcase, /이전 프로젝트/);
  assert.match(projectShowcase, /다음 프로젝트/);
  assert.doesNotMatch(page, /project-rail/);
  assert.match(styles, /hero-layout/);
  assert.match(styles, /hero-panel/);
  assert.match(styles, /hero-quick-links/);
  assert.match(styles, /hero-profile-list/);
  assert.match(styles, /marquee-track/);
  assert.match(styles, /about-highlight-grid/);
  assert.match(styles, /case-flow/);
  assert.match(styles, /feature-slider/);
  assert.match(styles, /feature-slide-thumbs/);
  assert.match(styles, /object-fit: contain/);
  assert.match(styles, /grid-template-columns: repeat\(auto-fit, minmax\(150px, 1fr\)\)/);
  assert.match(styles, /operations-grid/);
  assert.match(styles, /operation-card/);
  assert.match(styles, /case-summary-grid/);
  assert.match(styles, /project-proof/);
  assert.match(styles, /project-showcase/);
  assert.match(styles, /project-showcase-media/);
  assert.doesNotMatch(styles, /\.project-grid/);
  assert.doesNotMatch(styles, /\.project-card|project-card-top|project-visual/);
  assert.match(styles, /tech-grid/);
  assert.match(styles, /growth-list/);
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
  assert.doesNotMatch(packageJson, /react-loading-skeleton|three|playwright/);

  await assert.rejects(access(new URL("app/_sites-preview/SkeletonPreview.tsx", root)));
  await assert.rejects(access(new URL("app/_sites-preview/preview.css", root)));
  await assert.rejects(access(new URL("app/components/TacticalHeroCompare.tsx", root)));
});
