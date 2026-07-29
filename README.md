# Kang Hee Sung Portfolio

강희성 취업용 풀스택 포트폴리오입니다. 대표 프로젝트인 BGMS를 중심으로 Next.js, React, Supabase, 외부 API, AI 분석 기능을 실제 화면과 코드 기준으로 정리했습니다.

## 핵심 내용

- 대표 프로젝트: [BGMS.kr](https://bgms.kr)
- 포지션: Full-stack Developer
- 주요 기술: Next.js, React, TypeScript, Supabase, Gemini AI, Cloudflare, Docker
- 보조 프로젝트: AI Trading Assistant, Subway 1_8, KBO Ticket Platform

## 프로젝트 구조

```txt
app/                    포트폴리오 화면과 컴포넌트
app/components/         BGMS 슬라이더, 팀 프로젝트 쇼케이스, 기술 아이콘
public/portfolio-assets 포트폴리오 이미지
worker/                 vinext/Cloudflare Worker 엔트리
build/                  로컬 Sites/Vite 보조 플러그인
scripts/                GitHub Pages 정적 export 스크립트
tests/                  렌더링 검증 스크립트
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run typecheck
npm run build
```
