# BGMS Growth Story Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 사실 기반 구현 이력으로 BGMS Featured Project를 문제 해결과 성장 과정 중심의 채용 포트폴리오 사례로 재구성한다.

**Architecture:** `app/page.tsx`의 정적 콘텐츠 모델을 재편해 Hero, About, Featured, Tech Stack의 역할을 분리한다. Featured는 문제-성장-핵심 구현-운영 보완 순서로 실제 이미지와 코드 근거를 결합하며, CSS는 기존 디자인 토큰을 유지한 채 이 정보 구조를 지원한다.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vinext, GitHub Pages

## Global Constraints

- BGMS 소스와 Git 이력으로 확인한 사실만 사용한다.
- AWS EC2는 배포 경험으로만 표현하고 자동화 성과로 표현하지 않는다.
- Discord는 PUBG API 오류 임계치 초과 경고 알림 구현으로만 표현한다.
- UI·문구 작업에는 별도 단위 테스트를 추가하지 않고 lint, typecheck, Pages build와 렌더링 확인으로 검증한다.
- 기존 사용자 변경과 무관한 리팩터링은 하지 않는다.

---

### Task 1: BGMS 포트폴리오 콘텐츠 모델 정리

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: BGMS Git 이력에서 검증한 지도, 전적, 텔레메트리, AI, R2, Supabase, GitHub Actions 구현 사실
- Produces: Hero proof, Featured 성장 단계, 운영 보완, 기술 적용 근거용 정적 데이터

- [x] **Step 1: 현재 중복 문구 확인**

`aboutHighlights`, `aboutCoreValues`, `bgmsScope`, `bgmsDecisions`, `bgmsOperations`, `growthItems`의 주제와 문장을 대조한다.

- [x] **Step 2: 문구 데이터 재구성**

Featured 콘텐츠를 아래 네 단계로 바꾼다.

```ts
const bgmsGrowthStages = [
  { step: "01", title: "문제", body: "지도, 전적, 분석, 커뮤니티가 분리된 탐색 흐름을 하나의 서비스로 연결했습니다." },
  { step: "02", title: "확장", body: "지도 도구에서 시작해 인증, 커뮤니티, 전적 검색, 텔레메트리 분석으로 범위를 넓혔습니다." },
  { step: "03", title: "구현", body: "외부 API와 텔레메트리를 바탕으로 AI 코칭과 2D/3D 리플레이를 연결했습니다." },
  { step: "04", title: "운영 보완", body: "캐시, 권한, 요청 제한, 장애 관측을 기능과 분리해 운영 흐름을 보완했습니다." },
];
```

- [x] **Step 3: 섹션별 표현 범위 분리**

About은 개발 역량의 요약으로 유지하고, Growth 섹션의 BGMS 반복 문구는 Featured의 성장 단계와 통합한다. Tech Stack에는 기술별 BGMS 적용 근거를 추가한다.

- [x] **Step 4: TypeScript 검사**

Run: `npm run typecheck`

Expected: exit code `0`

### Task 2: Featured와 Tech Stack 정보 구조 구현

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: Task 1의 `bgmsGrowthStages`와 기술 적용 근거 데이터
- Produces: 성장 단계 시각화, 운영 보완 카드, 근거형 Tech Stack 화면

- [x] **Step 1: Featured 마크업 교체**

기존 `case-summary-grid`와 `decision-panel`을 성장 단계 영역으로 통합한다. 서비스 스크린샷 슬라이더 바로 아래에 문제-확장-구현-운영 보완을 배치한다.

- [x] **Step 2: 운영 보완 카드의 사실 문구 적용**

운영 카드에는 API 오류 관측·Discord 임계치 경고, R2/Supabase 캐시 수명주기, 인증·Turnstile·요청 제한을 각각 배치한다.

- [x] **Step 3: Tech Stack에 적용 근거 추가**

각 기술 그룹에 BGMS에서의 사용 위치를 짧게 표시한다. 예: `Gemini AI / 매치 코칭 스트리밍·결과 캐시`, `Cloudflare R2 / 텔레메트리 원본 분리·서명 URL 제공`.

- [x] **Step 4: 스타일 추가**

기존 색상 토큰과 사각형 위주의 UI를 유지하고, 성장 단계의 순서와 운영 카드의 구분이 스캔 가능하도록 그리드, 숫자 레이블, 반응형 레이아웃을 구현한다.

- [x] **Step 5: 정적 검사**

Run: `npm run lint && npm run typecheck`

Expected: exit code `0`

### Task 3: 중복·사실성·배포 렌더링 검토

**Files:**
- Modify: `app/page.tsx` (검토에서 발견된 문구만)

**Interfaces:**
- Consumes: Task 1-2 변경본
- Produces: 중복 없는 최종 포트폴리오 페이지

- [x] **Step 1: 중복 검사**

`rg`로 `AI 분석`, `운영`, `텔레메트리`, `RLS`, `Discord` 표현을 검색하고, 같은 주장을 두 섹션 이상에서 반복하면 한 곳으로 통합한다.

- [x] **Step 2: 사실성 검사**

BGMS 코드와 이력에 없는 자동화 성과, 사용자 수, 성능 수치, Discord 일일 리포트 발송 표현이 없는지 확인한다.

- [x] **Step 3: Pages 산출물 검증**

Run: `npm run build:pages`

Expected: exit code `0`, `dist/client/index.html` 생성

- [x] **Step 4: 렌더링 확인**

Run: `npm test`

Expected: exit code `0`

- [ ] **Step 5: 커밋 및 배포**

```bash
git add app/page.tsx app/globals.css docs/superpowers/plans/2026-07-28-bgms-growth-story.md
git commit -m "BGMS 성장 사례 중심 포트폴리오 개선"
git push origin main
```

### Task 4: BGMS 화면별 사례 슬라이더 통합

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/components/BgmsFeatureSlider.tsx`
- Modify: `app/globals.css`
- Modify: `tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: `BgmsFeatureSlide`의 이미지, 제목, URL, 기술 태그
- Produces: `caseStudy`의 `problem`, `solution`, `operation` 텍스트를 포함하는 BGMS 화면별 사례 슬라이더

- [ ] **Step 1: 사례 데이터와 렌더링 계약 확장**

```ts
export interface BgmsFeatureSlide {
  title: string;
  label: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
  url?: string;
  caseStudy: {
    problem: string;
    solution: string;
    operation: string;
  };
}
```

- [ ] **Step 2: 슬라이드 아래 사례 패널 구현**

활성 슬라이드 이미지 아래에 `핵심 문제`, `해결 방식`, `운영 보완` 3개 영역을 표시한다. 슬라이드 이동과 함께 해당 사례가 전환되도록 `activeSlide.caseStudy`만 사용한다.

- [ ] **Step 3: Featured의 중복 카드 제거**

기존 성장 단계와 운영 카드를 제거하고, Featured의 설명과 구현 판단은 하나의 짧은 소개로 축소한다. 정보 반복 없이 각 화면이 증거와 사례를 함께 갖게 한다.

- [ ] **Step 4: 회귀 검증 갱신 및 실행**

Run: `npm run lint && npm run typecheck && npm test && npm run build:pages`

Expected: exit code `0`, 사례 패널의 새 문구가 정적 HTML에 포함됨

- [ ] **Step 5: 브라우저 확인**

데스크톱과 390px 모바일에서 슬라이드 전환 시 사례 패널이 함께 바뀌는지 확인한다. 배포와 푸시는 사용자 요청 전까지 수행하지 않는다.
