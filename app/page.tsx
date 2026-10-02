import { AmbientGridBackground } from "./components/AmbientGridBackground";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram";
import { BgmsFeatureSlider } from "./components/BgmsFeatureSlider";
import { CopyEmailButton } from "./components/CopyEmailButton";
import { HeroBusinessCard } from "./components/HeroBusinessCard";
import { MagneticButton } from "./components/MagneticButton";
import { PortfolioNav } from "./components/PortfolioNav";
import { ScrollReveal } from "./components/ScrollReveal";
import { SectionLink } from "./components/SectionLink";
import { TeamProjectShowcase } from "./components/TeamProjectShowcase";
import { TechIcon } from "./components/TechIcon";
import { TiltCard } from "./components/TiltCard";

const heroProofs = [
  "BGMS.kr 운영 서비스",
  "PUBG API + Telemetry",
  "AI 코칭 + Replay",
  "Security + Operations",
  "2026.09 서비스 업데이트",
];

const portfolioMetrics = [
  { label: "프로젝트 시작", value: "2025.12" },
  { label: "가입 회원", value: "460명", note: "관리자 계정 제외 · 2026.09.29 기준" },
  { label: "최근 30일 세션", value: "2,954", note: "내부 트래픽 제외 · 2026.08.31~09.29 집계" },
  { label: "AI 분석 요청", value: "1,677회", note: "AI 요청 로그 기준 · 2026.08.31~09.29 집계" },
  { label: "서비스 업데이트", value: "2026.09", note: "지도·AI·랭킹·커뮤니티 운영 중" },
];

const aboutHighlights = [
  {
    iconKey: "about-product",
    title: "화면 흐름 설계",
    body: "맵, 전적, 랭킹, 커뮤니티처럼 목적이 다른 화면을 사용자가 길을 잃지 않는 순서로 배치합니다.",
  },
  {
    iconKey: "about-ai",
    title: "분석 결과 제품화",
    body: "외부 데이터와 텔레메트리 분석 결과를 AI 코칭, 비교, 리플레이처럼 사용자가 확인할 수 있는 화면으로 연결합니다.",
  },
  {
    iconKey: "about-stability",
    title: "인증과 권한 분리",
    body: "Supabase Auth와 RLS를 기준으로 일반 사용자 기능과 관리자 기능의 접근 범위를 나눕니다.",
  },
  {
    iconKey: "about-code",
    title: "외부 API 예외 처리",
    body: "PUBG API, AI 요청, 사용자 작성 데이터가 서로 다른 방식으로 실패한다는 전제로 요청·저장·화면의 경계를 나눕니다.",
  },
];

const aboutCoreValues = [
  {
    num: "01",
    iconKey: "about-flow",
    title: "Flow First",
    subtitle: "기능을 나열하기보다 사용자 흐름을 우선합니다",
    body: "기능을 나열하기보다 사용자가 처음 들어와 목적을 달성하는 순서에 맞춰 화면과 이동 경로를 정리합니다.",
  },
  {
    num: "02",
    iconKey: "about-context",
    title: "Contextual AI",
    subtitle: "근거가 보이는 AI 결과",
    body: "AI 결과는 단순 문장으로 끝내지 않고, 사용자가 함께 확인할 수 있는 데이터와 화면 맥락 안에 배치합니다.",
  },
  {
    num: "03",
    iconKey: "about-architecture",
    title: "Stable Boundaries",
    subtitle: "데이터와 권한 경계 분리",
    body: "PUBG API 조회는 응답 상태 기준으로, Supabase 인증/RLS는 권한 기준으로, 사용자 작성 데이터는 검증과 제한 기준으로 나눠 한 기능의 실패가 전체 화면 장애로 번지지 않게 설계했습니다.",
  },
];

const bgmsFeatureSlides = [
  {
    title: "AI 전적 검색",
    label: "AI Search",
    body: "닉네임 검색만으로 최근 전적과 개별 경기 텔레메트리를 불러오고, AI가 교전 패턴과 플레이 흐름을 분석하도록 구성했습니다.",
    tags: ["Recent Matches", "Gemini AI", "Telemetry"],
    image: "portfolio-assets/bgms-feature-search.png",
    imageAlt: "BGMS 닉네임 기반 AI 전적 분석 화면",
    url: "https://bgms.kr/stats",
    caseStudy: {
      problemLead: "시즌 요약과 개별 경기 흐름의 분리",
      problem: "닉네임 검색만으로는 시즌 요약과 특정 경기에서 나온 플레이를 같은 맥락에서 확인할 수 없었습니다.",
      solutionLead: "검색부터 경기 분석까지 한 흐름으로 연결",
      solution: "검색 결과에서 시즌 요약, 최근 매치, 개별 경기 분석으로 이어지는 전적 탐색 경로를 하나로 묶었습니다.",
      operationLead: "API 오류 기록과 429 응답 완화",
      operation: "PUBG API 실패를 route·status·원인 문맥별로 기록하고, 429 응답은 캐시와 조회 흐름 보완으로 대응했습니다.",
    },
  },
  {
    title: "AI 개별 전적 분석",
    label: "Tactical Report",
    body: "최근 경기 목록과 경기별 상세 데이터를 바탕으로 AI가 강점, 약점, 교전 습관, 생존 흐름을 사용자별 리포트로 정리합니다.",
    tags: ["Player Report", "Match Detail", "AI Insight"],
    image: "portfolio-assets/bgms-feature-report.png",
    imageAlt: "BGMS 플레이어별 AI 전적 분석 기능 화면",
    url: "https://bgms.kr/stats",
    caseStudy: {
      problemLead: "AI 조언의 근거를 바로 확인하기 어려움",
      problem: "AI 조언을 전적 화면 밖에서 제공하면, 어떤 경기 데이터에서 나온 분석인지 즉시 확인할 수 없었습니다.",
      solutionLead: "매치 데이터와 AI 코칭을 같은 화면에 배치",
      solution: "최근 전적과 개별 경기 텔레메트리 맥락 안에 AI 코칭과 상세 지표를 배치해 분석 근거를 함께 확인하게 했습니다.",
      operationLead: "분석 요청의 비용과 실패 조건 관리",
      operation: "로그인 기반 요청, 모델 폴백, 스트리밍 응답, 결과 캐시와 사용량 추적으로 분석 요청의 비용과 실패를 관리했습니다.",
    },
  },
  {
    title: "맵 정보 레이어 탐색",
    label: "Map System",
    body: "미라마, 에란겔, 태이고 등 맵별 비밀의 방 위치, 고정 보트, 글라이더, 차량 스폰 데이터를 인터랙티브 레이어로 탐색합니다.",
    tags: ["Interactive Map", "Secret Room", "Vehicle Spawns"],
    image: "portfolio-assets/bgms-feature-map.webp",
    imageAlt: "BGMS 미라마 비밀의 방 맵 레이어 탐색 화면",
    url: "https://bgms.kr/maps/miramar",
    caseStudy: {
      problemLead: "맵 안의 선택지를 빠르게 비교하기 어려움",
      problem: "맵별 비밀의 방, 차량, 글라이더 위치를 개별 항목으로 보면 한 지역의 선택지를 한 번에 비교할 수 없었습니다.",
      solutionLead: "레이어와 필터로 필요한 위치만 탐색",
      solution: "맵별 데이터를 인터랙티브 레이어와 필터로 구성해, 필요한 위치 정보만 골라 탐색하도록 만들었습니다.",
      operationLead: "지도 실패를 화면 전체 실패와 분리",
      operation: "지도 타일 로드 실패가 화면 전체를 멈추지 않도록 분리하고, 모바일에서는 하단 시트와 지도 도구의 동작을 조정했습니다.",
    },
  },
  {
    title: "실시간 전술 랭킹",
    label: "Ranking",
    body: "누적 수치만 나열하지 않고 최근 전적 기반 지표를 비교해 플레이어의 현재 경기력과 전술 성향을 랭킹 흐름으로 확인합니다.",
    tags: ["Performance", "Ranking", "Mode Filter"],
    image: "portfolio-assets/bgms-feature-rank.png",
    imageAlt: "BGMS 최근 전적 기반 플레이어 랭킹 화면",
    url: "https://bgms.kr/rankings",
    caseStudy: {
      problemLead: "주간 전술 지표를 한 번에 비교하기 어려움",
      problem: "주간 딜량, 킬, 티어 데이터가 분리되면 이번 주 기준의 플레이 흐름을 한 화면에서 비교하기 어려웠습니다.",
      solutionLead: "최근 전적과 모드 기준으로 현재 흐름을 비교",
      solution: "최근 전적 기반 지표와 모드 필터를 조합해, 현재 경기 흐름과 전술 성향을 비교하는 랭킹으로 정리했습니다.",
      operationLead: "오래된 검색 결과와 재호출을 줄임",
      operation: "빠르게 바뀌는 자동완성 요청은 이전 요청을 취소하고 검색 키를 캐싱해, 오래된 결과와 불필요한 재호출을 줄였습니다.",
    },
  },
  {
    title: "커뮤니티 & 파티 모집",
    label: "Community",
    body: "공지사항, 패치노트, 듀오/스쿼드 팀원 모집, 미라마 비밀의 방 열쇠 제보를 지원하는 실시간 커뮤니티 공간입니다.",
    tags: ["Community", "Patch Notes", "Squad Recruit"],
    image: "portfolio-assets/bgms-feature-community.png",
    imageAlt: "BGMS 패치노트 및 자유 게시판 커뮤니티 화면",
    url: "https://bgms.kr/board",
    caseStudy: {
      problemLead: "작성 기능과 악성 요청을 함께 통제해야 함",
      problem: "게시글과 댓글을 받는 서비스에는 비회원 작성, 과도한 요청, 이미지 업로드를 함께 통제하는 기준이 필요했습니다.",
      solutionLead: "커뮤니티 활동을 하나의 게시판 흐름으로 연결",
      solution: "공지·패치노트·파티 모집·제보를 게시판 흐름으로 연결해, 필요한 사용자 활동을 서비스 안에서 이어지게 했습니다.",
      operationLead: "비회원 검증과 이미지 소유권을 관리",
      operation: "비회원 요청은 Turnstile 서버 검증과 요청 제한을 거치게 하고, 업로드 이미지는 소유권 확인과 정리 수명주기로 관리했습니다.",
    },
  },
  {
    title: "AI 스쿼드 분석 & 전적 비교",
    label: "Squad Insight",
    body: "개인 전적을 넘어 팀 조합과 협동 지표를 분석하고, 저장한 플레이어 간 1:1 전적 비교까지 연결합니다.",
    tags: ["Squad Synergy", "1:1 Compare", "Telemetry"],
    image: "portfolio-assets/bgms-feature-report.png",
    imageAlt: "BGMS AI 스쿼드 분석 및 전적 비교 기능 화면",
    url: "https://bgms.kr/stats",
    caseStudy: {
      problemLead: "개인 지표만으로 팀 플레이를 설명하기 어려움",
      problem: "개별 플레이어의 전적만 보면 팀 조합과 협동 과정에서 생기는 강점과 병목을 파악하기 어려웠습니다.",
      solutionLead: "스쿼드 지표와 비교 흐름을 전적 화면에 통합",
      solution: "스쿼드 시너지와 협동 지표를 개인 전적·AI 분석과 함께 배치하고, 저장한 플레이어의 1:1 비교로 확장했습니다.",
      operationLead: "분석 범위와 요청 비용을 함께 제어",
      operation: "분석 대상과 매치 범위를 제한하고 캐시된 결과를 재사용해, 팀 단위 분석에서도 불필요한 AI 재호출을 줄였습니다.",
    },
  },
];

const bgmsEngineeringCases = [
  {
    title: "생성 중인 캐시와 캐시 미스를 구분",
    decision: "DB 생성 권한 선점 · 만료 시간 · 소유 토큰",
    problem: "완성 파일의 유무만으로 캐시를 판단하면, 생성 중인 대상에도 후속 요청이 수집·분석 작업을 시작할 수 있었습니다.",
    solution: "경기·플랫폼·플레이어·모드·버전별 생성 권한을 DB에서 원자적으로 선점합니다. 만료 시간으로 실패한 작업의 점유를 풀고, 소유 토큰으로 이전 작업이 새 작업의 권한을 해제하지 못하게 합니다.",
    validation: "캐시 회귀 테스트 26개 통과. 경합을 모의한 검사에서 후속 요청의 완성 캐시 반환과 권한 해제 후 재획득을 확인했습니다.",
    commit: "3a7ad6c4",
    evidencePath: "tests/telemetry-map-cache.test.ts",
    evidenceLabel: "회귀 테스트",
  },
  {
    title: "미관측 값이 기존 전적을 덮어쓰지 않도록 저장",
    decision: "관측된 0과 누락 구분 · 필드 조합별 upsert",
    problem: "기절 수·생존 시간을 얻지 못한 행이 기존 값을 NULL로 덮어쓸 수 있었습니다. JSON에서 키를 생략해도 SDK의 bulk 요청은 행들의 필드 합집합을 갱신 대상으로 보냈습니다.",
    solution: "실제 관측값만 포함하고, 같은 필드 조합의 행끼리 묶어 저장합니다. 기존 값을 먼저 읽어 합치는 추가 조회 없이 누락 필드는 보존하고 관측된 0은 갱신합니다.",
    validation: "실제 SDK가 만든 columns·JSON과 모의 저장 결과를 검사했습니다. 혼합 5행은 4회, 완전한 batch는 1회 요청하며 기존 값 보존과 관측된 0의 갱신을 확인했습니다.",
    commit: "2fb4af0b",
    evidencePath: "tests/player-match-write-preservation.test.ts",
    evidenceLabel: "SDK 요청 회귀 테스트",
  },
  {
    title: "스트림 조각 처리와 모바일 로딩 종료 보완",
    decision: "누적 버퍼 · 스트림 디코딩 · reader 직접 취소",
    problem: "네트워크 조각이 JSON 한 줄이나 문자 경계와 일치하지 않아 파싱이 실패할 수 있었습니다. 모바일 AI 분석에는 로딩이 끝나지 않는 문제도 기록되어 있었습니다.",
    solution: "관리자 채팅은 완성된 줄만 파싱하고 미완성 조각은 버퍼에 보관합니다. TextDecoder의 stream 모드로 문자 상태를 유지하고, 모바일 분석은 timeout·unmount에서 reader를 직접 취소하며 상태를 정리했습니다.",
    validation: "모바일 취소 경로의 변경 이력과 현재 관리자 채팅의 누적 버퍼 구현을 확인했습니다. HTTP 응답 스트림을 처리한 사례입니다.",
    commit: "b0d90c9b",
    evidencePath: "components/admin/AdminAgentChat.tsx",
    evidenceLabel: "스트림 처리 코드",
  },
  {
    title: "AI 후처리가 정상 부정문을 훼손하는 문제 수정",
    decision: "문장 맥락 보존 · 생성 결과와 캐시에 같은 규칙 적용",
    problem: "근거 없는 권고를 제한하는 후처리가 ‘교전 빈도를 높여야 하는 것은 아닙니다’처럼 권고를 부정하는 정상 문장까지 바꿀 수 있었습니다.",
    solution: "매칭한 표현 뒤의 부정 어미를 확인하고, 문제가 있는 문장만 제한·대체합니다. 주변의 정상 설명은 보존하며, 저장 전 결과와 캐시 재처리에 같은 정규화 규칙을 적용했습니다.",
    validation: "회귀 테스트에서 확인된 권고·부정문 패턴을 구분하고, 정상 부정문 뒤에 등장하는 별도 권고도 검사했습니다.",
    commit: "b61e46dc",
    evidencePath: "tests/ai-summary-advice.test.ts",
    evidenceLabel: "AI 문장 회귀 테스트",
  },
];

const projects = [
  {
    title: "AI Trading Assistant",
    type: "AI / Finance",
    category: "Team Project",
    role: "담당: 프로젝트 총괄, ML/LangChain AI 파이프라인, 조건/자동매매 엔진, AWS EC2 배포 경험",
    description: "주식/가상자산 실시간 상세 대시보드, ML/LangChain AI 챗봇, AI 자동매매펀드 및 조건 매매를 포함한 풀스택 AI 금융 플랫폼입니다.",
    stack: ["React", "Flask", "LangChain", "Supabase", "LightGBM", "Docker", "AWS EC2"],
    visual: "portfolio-assets/ai-trading.png",
    problem: "프로젝트 전체 리딩과 함께 LangChain 챗봇 연동, 조건/자동매매 엔진 구축, 거래소 API Key 보안, Docker 기반 AWS EC2 배포 경험을 하나의 서비스 흐름으로 정리해야 했습니다.",
    solution: "LangChain 기반 맥락 챗봇과 ML 신호 엔진을 구축하고, API Key 암호화 등록/자산 이동 로직 구현 후 Docker Compose 기반 실행 환경을 AWS EC2에서 구동해 본 경험을 정리했습니다.",
    result: "총괄 리더로서 AI 자동 펀드 매매/조건 매매 흐름과 주요 UI를 구현하고, Docker Compose 기반 EC2 배포 경험을 프로젝트 기록으로 정리했습니다.",
    link: "https://github.com/Grand-slam-project/Trading",
    liveLinks: [{ href: "https://trading-lake-ten.vercel.app/", label: "서비스 보기" }],
  },
  {
    title: "Subway 1_8",
    type: "Data Dashboard",
    category: "Team Project",
    role: "담당: 데이터 전처리 파이프라인 & XGBoost 혼잡도 예측 모델링",
    description: "서울 지하철 1-8호선 400만 행 탑승 데이터 기반의 시간대별 및 역별 실시간 혼잡도 예측 대시보드입니다.",
    stack: ["Streamlit", "Plotly", "XGBoost", "Pandas", "Scikit-learn"],
    visual: "portfolio-assets/subway-dashboard-cropped.png",
    problem: "서울 지하철 1-8호선 400만 행 데이터 전처리 파이프라인 구축 및 XGBoost 모델 기반 실시간 혼잡도 예측 연산 최적화가 필요했습니다.",
    solution: "대용량 400만 행 탑승 데이터셋 정제/전처리 파이프라인을 구축하고, XGBoost 혼잡도 예측 연산 흐름을 대시보드 시각화와 결합했습니다.",
    result: "XGBoost 기반 서울 지하철 1-8호선 실시간 24시간 혼잡도 예측 모델링 및 데이터 전처리를 성공적으로 완수했습니다.",
    link: "https://github.com/ka6865/subway-line2",
    liveLinks: [
      { href: "https://huggingface.co/spaces/heesung00/Decafe_line1_8", label: "1-8호선 보기" },
      { href: "https://huggingface.co/spaces/heesung00/decaf_line2", label: "2호선 보기" },
    ],
  },
  {
    title: "KBO Ticket Platform",
    type: "Payment / Backend",
    category: "Team Project",
    role: "담당: Toss Payments 결제 & DB Lock",
    description: "KBO 티켓 P2P 거래를 위한 결제와 거래 상태 관리 플랫폼입니다.",
    stack: ["Flask", "SQLAlchemy", "Toss Payments", "APScheduler", "OAuth"],
    visual: "portfolio-assets/kbo-ticket.png",
    problem: "결제 성공 이후 좌석 거래 상태가 어긋나면 중복 결제와 거래 상태 불일치가 발생할 수 있었습니다.",
    solution: "Toss Payments 승인/취소 흐름과 DB Lock을 함께 설계해 거래 상태 불일치 방지를 우선했습니다.",
    result: "Toss Payments 승인/취소, 중복 결제 방어, 자동 구매 확정 스케줄러를 구현했습니다.",
    link: "https://github.com/Grand-slam-project/Grand-slam",
  },
];

const techGroups = [
  {
    title: "Frontend",
    categoryKey: "cat-frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streamlit", "Responsive UI"],
    evidence: "BGMS 1인 운영 서비스 및 AI Trading 대시보드, Subway 400만 행 데이터 시각화에 적용",
  },
  {
    title: "Backend",
    categoryKey: "cat-backend",
    items: ["Supabase", "Flask (Python)", "PostgreSQL", "SQLAlchemy", "Auth/RLS", "Toss Payments"],
    evidence: "BGMS 권한 통제/세션 관리 및 KBO 티켓 P2P 결제 승인·중복 방지 DB Lock 구현",
  },
  {
    title: "AI / Data",
    categoryKey: "cat-ai",
    items: ["Gemini AI", "LangChain", "XGBoost", "Pandas", "Scikit-learn", "Telemetry"],
    evidence: "BGMS AI 텔레메트리 매치 코칭, AI Trading 맥락 챗봇, Subway 24시간 혼잡도 예측 모델링",
  },
  {
    title: "DevOps & Infra",
    categoryKey: "cat-operation",
    items: ["AWS EC2", "Docker", "Docker Compose", "Vercel", "Cloudflare R2", "GitHub Actions"],
    evidence: "BGMS R2 텔레메트리 저장소/Cron 정기 운영 및 AI Trading Docker Compose 기반 EC2 배포 경험",
  },
  {
    title: "Operations & Quality",
    categoryKey: "cat-operation",
    items: ["GitHub Actions", "Turnstile", "Cache", "Quality Gates", "Observability", "Data Audit"],
    evidence: "일일 텔레메트리·AI 캐시 정리, 데이터 품질 감사, 패치 노트 동기화와 사용자 생성 콘텐츠 보호를 운영 자동화",
  },
];

export default function Home() {
  const visibleMetrics = portfolioMetrics.filter((m) => Boolean(m.value));

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#181818] relative overflow-hidden">
      <AmbientGridBackground />
      <ScrollReveal />
      <section id="top" className="hero-shell">
        <PortfolioNav />

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Full-stack Developer Journey</p>
            <h1>
              <span>운영 서비스 BGMS를 개발·개선하는 풀스택 개발자</span>
            </h1>
            <p className="hero-description">
              PUBG API와 텔레메트리 데이터를 전적·AI 분석 화면으로 연결하고,
              인증·오류 대응·운영 경계까지 직접 구현합니다.
            </p>
            <div className="hero-actions">
              <MagneticButton
                className="primary-link"
                href="https://bgms.kr"
                target="_blank"
                rel="noreferrer"
              >
                <TechIcon name="globe" className="btn-icon" />
                <span>BGMS.kr 운영 서비스</span>
              </MagneticButton>
              <SectionLink className="secondary-link" sectionId="projects">
                <span>프로젝트 보기</span>
              </SectionLink>
            </div>
            <div className="hero-quick-links" aria-label="주요 외부 링크">
              <a href="https://github.com/ka6865" target="_blank" rel="noreferrer">
                <TechIcon name="github" className="btn-icon-sm" />
                <span>GitHub 보기</span>
              </a>
              <a href="mailto:ka6865@gmail.com">
                <TechIcon name="mail" className="btn-icon-sm" />
                <span>Email 보내기</span>
              </a>
            </div>
            {visibleMetrics.length > 0 ? (
              <dl className="hero-metrics" aria-label="운영 지표">
                {visibleMetrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.label}</dt>
                    <dd>{metric.value}</dd>
                    {metric.note ? <small>{metric.note}</small> : null}
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <HeroBusinessCard />
        </div>

        <div className="marquee" aria-label="핵심 기술 흐름">
          <div className="marquee-track">
            {[...heroProofs, ...heroProofs].map((proof, index) => (
              <span key={`${proof}-${index}`}>{proof}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section" data-reveal>
        <div className="section-heading">
          <span className="section-index">01</span>
          <p className="eyebrow">About Me</p>
          <h2>BGMS에서 보여준 구현 범위</h2>
          <p>
            1인 풀스택 개발자로 사용자 흐름, 프론트엔드 화면, 외부 데이터 연결,
            인증·권한, AI 분석과 운영 자동화를 하나의 서비스 경험으로 연결했습니다.
          </p>
        </div>

        <div className="about-highlight-block">
          <div>
            <p className="eyebrow">What I Build</p>
            <h3>실제 운영 서비스에서 검증된 핵심 구현 역량</h3>
          </div>
          <div className="about-highlight-grid">
            {aboutHighlights.map((item) => (
              <TiltCard key={item.title}>
                <article className="about-highlight-card">
                  <div className="about-highlight-header">
                    <TechIcon name={item.iconKey} className="about-highlight-icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="about-core-values-block">
          <div className="section-heading compact">
            <p className="eyebrow">Engineering Mindset</p>
            <h2>제품을 지탱하는 3가지 개발 기준</h2>
          </div>
          <div className="about-values-grid">
            {aboutCoreValues.map((val) => (
              <TiltCard key={val.title}>
                <article className="value-card">
                  <div className="value-card-top">
                    <span className="value-num">{val.num}</span>
                    <TechIcon name={val.iconKey} className="value-icon" />
                  </div>
                  <h3>{val.title}</h3>
                  <p className="value-subtitle">{val.subtitle}</p>
                  <p className="value-body">{val.body}</p>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="section featured-section" data-reveal>
        <div className="section-heading">
          <span className="section-index">02</span>
          <p className="eyebrow">Featured Project</p>
          <h2>BattleGrounds Management System</h2>
          <p>
            BGMS는 배틀그라운드 팬을 위한 비공식 서비스입니다. 지도 탐색에서
            시작해 전적, 텔레메트리 기반 분석, AI 코칭, 커뮤니티로 기능을
            확장했고 운영 과정에서 드러난 실패 조건도 함께 보완했습니다.
          </p>
        </div>

        <div className="featured-card">
          <BgmsFeatureSlider slides={bgmsFeatureSlides} />

          <ArchitectureDiagram />

          <section className="bgms-engineering" aria-labelledby="bgms-engineering-title">
            <div className="architecture-header">
              <p className="eyebrow">Engineering Cases</p>
              <h3 id="bgms-engineering-title">운영 중 발견한 문제와 설계 선택</h3>
              <p className="bgms-engineering-intro">
                운영 중 발견한 문제의 원인, 설계 선택과 확인한 결과를
                코드·변경 이력·회귀 테스트와 함께 정리했습니다.
              </p>
            </div>
            {bgmsEngineeringCases.map((caseStudy, index) => (
              <details key={caseStudy.title} className="bgms-engineering-case" open={index === 0}>
                <summary>
                  <strong>{caseStudy.title}</strong>
                  <span>{caseStudy.decision}</span>
                </summary>
                <div className="feature-case-study">
                  <article>
                    <span>문제와 원인</span>
                    <p>{caseStudy.problem}</p>
                  </article>
                  <article>
                    <span>설계 선택</span>
                    <p>{caseStudy.solution}</p>
                  </article>
                  <article>
                    <span>확인한 결과</span>
                    <p>{caseStudy.validation}</p>
                  </article>
                </div>
                <div className="featured-links">
                  <a className="inline-link" href={`https://github.com/ka6865/BGMS/commit/${caseStudy.commit}`} target="_blank" rel="noreferrer">
                    <span>수정 커밋 {caseStudy.commit}</span>
                  </a>
                  <a className="inline-link" href={`https://github.com/ka6865/BGMS/blob/984f3054/${caseStudy.evidencePath}`} target="_blank" rel="noreferrer">
                    <span>{caseStudy.evidenceLabel}</span>
                  </a>
                </div>
              </details>
            ))}
          </section>

          <div className="featured-content">
            <div className="featured-links">
              <a className="inline-link" href="https://bgms.kr" target="_blank" rel="noreferrer">
                <TechIcon name="globe" className="btn-icon" />
                <span>서비스 보기</span>
              </a>
              <a className="inline-link" href="https://github.com/ka6865/pubg-map-app" target="_blank" rel="noreferrer">
                <TechIcon name="github" className="btn-icon" />
                <span>GitHub 저장소</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section" data-reveal>
        <div className="section-heading compact">
          <span className="section-index">03</span>
          <p className="eyebrow">Team Projects Archive</p>
          <h2>팀 협업에서 담당한 핵심 엔지니어링 구현 사례</h2>
        </div>

        <TeamProjectShowcase projects={projects} />
      </section>

      <section id="tech" className="section tech-section" data-reveal>
        <div className="section-heading compact">
          <span className="section-index">04</span>
          <p className="eyebrow">Tech Stack</p>
          <h2>프로젝트 전반에서 사용한 기술 스택 및 운영 역량</h2>
        </div>
        <div className="tech-grid">
          {techGroups.map((group) => (
            <TiltCard key={group.title}>
              <article className="tech-card">
                <div className="tech-card-header">
                  <TechIcon name={group.categoryKey} className="tech-group-icon" />
                  <h3>{group.title}</h3>
                </div>
                <p className="tech-evidence">{group.evidence}</p>
                <div className="tech-badge-container">
                  {group.items.map((item) => (
                    <span key={item} className="tech-badge">
                      <TechIcon name={item} className="tech-item-icon" />
                      <span className="tech-badge-text">{item}</span>
                    </span>
                  ))}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section" data-reveal>
        <div className="contact-copy">
          <span className="section-index">05</span>
          <p className="eyebrow">Contact</p>
          <h2>같이 일할 준비가 된 개발자, 강희성입니다.</h2>
          <p>
            운영 서비스에서 쌓은 구현·개선 경험과 팀 프로젝트 경험을 바탕으로,
            맡은 범위를 화면과 코드로 설명할 수 있게 준비했습니다.
          </p>
        </div>
        <div className="footer-contact-panel">
          <div className="footer-links">
            <a href="https://github.com/ka6865" target="_blank" rel="noreferrer">
              <TechIcon name="github" className="btn-icon" />
              <span>GitHub</span>
            </a>
            <CopyEmailButton email="ka6865@gmail.com" />
            <a href="https://bgms.kr" target="_blank" rel="noreferrer">
              <TechIcon name="globe" className="btn-icon" />
              <span>BGMS</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
