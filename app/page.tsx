import { BgmsFeatureSlider } from "./components/BgmsFeatureSlider";
import { SectionLink } from "./components/SectionLink";
import { TeamProjectShowcase } from "./components/TeamProjectShowcase";
import { TechIcon } from "./components/TechIcon";

const heroProofs = [
  "Full-stack Developer",
  "Next.js + Supabase",
  "BGMS.kr 운영 경험",
  "AI 기능 제품화",
];

const heroProfileItems = [
  { label: "Main Project", value: "BGMS.kr" },
  { label: "Focus", value: "Full-stack / AI" },
  { label: "Contact", value: "ka6865@gmail.com" },
];

const aboutHighlights = [
  {
    iconKey: "about-product",
    title: "화면 흐름 설계",
    body: "맵, 전적, 랭킹, 커뮤니티처럼 목적이 다른 화면을 사용자가 길을 잃지 않는 순서로 배치합니다.",
  },
  {
    iconKey: "about-ai",
    title: "AI 결과 화면화",
    body: "AI 분석 결과를 문장으로만 보여주지 않고 전술 등급, 비교, 리플레이 같은 화면 요소로 풀어냅니다.",
  },
  {
    iconKey: "about-stability",
    title: "인증과 권한 분리",
    body: "Supabase Auth와 RLS를 기준으로 일반 사용자 기능과 관리자 기능의 접근 범위를 나눕니다.",
  },
  {
    iconKey: "about-code",
    title: "외부 API 예외 처리",
    body: "PUBG API, AI 분석 요청, 커뮤니티 데이터가 각각 실패할 수 있다는 전제로 화면과 데이터 경계를 설계합니다.",
  },
];

const aboutCoreValues = [
  {
    num: "01",
    iconKey: "about-flow",
    title: "Flow First",
    subtitle: "기능보다 사용자 흐름",
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

const bgmsScope = [
  {
    title: "문제 해결 중심 케이스",
    body: "PUBG 유저가 맵 정보, 전적, 전술 분석, 커뮤니티를 각각 다른 도구에서 확인해야 하는 흐름을 하나의 서비스 안에서 이어지도록 정리했습니다.",
  },
  {
    title: "담당 범위",
    body: "1인 풀스택 개발자로 UX 구조, 프론트엔드 화면, 데이터 흐름, 인증/권한, AI 분석 기능을 직접 연결했습니다.",
  },
];

const bgmsDecisions = [
  {
    title: "탐색에서 분석까지 이어지는 흐름",
    body: "맵 정보 확인 후 전적 검색과 AI 분석으로 자연스럽게 이동하도록 화면 우선순위를 정리했습니다.",
  },
  {
    title: "외부 API와 서비스 데이터를 분리",
    body: "PUBG 데이터 조회, AI 분석, 커뮤니티/인증 흐름의 실패 조건이 서로 섞이지 않도록 화면과 데이터 경계를 나눴습니다.",
  },
];

const bgmsFeatureSlides = [
  {
    title: "AI 전적 검색",
    label: "AI Search",
    body: "닉네임 검색만으로 최근 전적과 개별 경기 텔레메트리를 불러오고, AI가 교전 패턴과 플레이 흐름을 분석하도록 구성했습니다.",
    tags: ["Recent Matches", "Gemini AI", "Telemetry"],
    image: "/portfolio-assets/bgms-feature-search.png",
    imageAlt: "BGMS 닉네임 기반 AI 전적 분석 화면",
    url: "https://bgms.kr/stats",
  },
  {
    title: "AI 개별 전적 분석",
    label: "Tactical Report",
    body: "최근 경기 목록과 경기별 상세 데이터를 바탕으로 AI가 강점, 약점, 교전 습관, 생존 흐름을 사용자별 리포트로 정리합니다.",
    tags: ["Player Report", "Match Detail", "AI Insight"],
    image: "/portfolio-assets/bgms-feature-report.png",
    imageAlt: "BGMS 플레이어별 AI 전적 분석 기능 화면",
    url: "https://bgms.kr/stats",
  },
  {
    title: "맵 정보 레이어 탐색",
    label: "Map System",
    body: "미라마, 에란겔, 태이고 등 맵별 비밀의 방 위치, 고정 보트, 글라이더, 차량 스폰 데이터를 인터랙티브 레이어로 탐색합니다.",
    tags: ["Interactive Map", "Secret Room", "Vehicle Spawns"],
    image: "/portfolio-assets/bgms-feature-map.png",
    imageAlt: "BGMS 미라마 비밀의 방 맵 레이어 탐색 화면",
    url: "https://bgms.kr/maps/miramar",
  },
  {
    title: "실시간 전술 랭킹",
    label: "Ranking",
    body: "누적 수치만 나열하지 않고 최근 전적 기반 지표를 비교해 플레이어의 현재 경기력과 전술 성향을 랭킹 흐름으로 확인합니다.",
    tags: ["Performance", "Ranking", "Mode Filter"],
    image: "/portfolio-assets/bgms-feature-rank.png",
    imageAlt: "BGMS 최근 전적 기반 플레이어 랭킹 화면",
    url: "https://bgms.kr/rankings",
  },
  {
    title: "커뮤니티 & 파티 모집",
    label: "Community",
    body: "공지사항, 패치노트, 듀오/스쿼드 팀원 모집, 미라마 비밀의 방 열쇠 제보를 지원하는 실시간 커뮤니티 공간입니다.",
    tags: ["Community", "Patch Notes", "Squad Recruit"],
    image: "/portfolio-assets/bgms-feature-community.png",
    imageAlt: "BGMS 패치노트 및 자유 게시판 커뮤니티 화면",
    url: "https://bgms.kr/board",
  },
];

const bgmsOperations = [
  {
    title: "관리자 권한과 승인 게이트",
    body: "관리자 role 검증과 RLS 기반 접근 정책을 분리해 일반 사용자 기능과 관리 기능의 권한 경계를 명확히 했습니다.",
    tags: ["Supabase Auth", "RLS", "Approval Gate"],
  },
  {
    title: "운영 모니터링",
    body: "PUBG API 응답, AI 분석 요청, Supabase 데이터 상태를 관리자 화면에서 확인하고, Discord 금일 운영 리포트로 서비스 점검 흐름을 관리했습니다.",
    tags: ["API Quota", "AI Cost", "Discord Report"],
  },
  {
    title: "커뮤니티 보호 흐름",
    body: "비속어 필터, 글·댓글 작성 제한, 신고 흐름처럼 커뮤니티 서비스에 필요한 기본 보호 장치를 구현 범위에 포함했습니다.",
    tags: ["Profanity Filter", "Rate Limit", "Report Flow"],
  },
];

const projects = [
  {
    title: "AI Trading Assistant",
    type: "AI / Finance",
    category: "Team Project (PM & Lead)",
    role: "담당: 프로젝트 총괄, ML/LangChain AI 파이프라인, 조건/자동매매 엔진, AWS EC2 배포 경험",
    description: "주식/가상자산 실시간 상세 대시보드, ML/LangChain AI 챗봇, AI 자동매매펀드 및 조건 매매를 포함한 풀스택 AI 금융 플랫폼입니다.",
    stack: ["React", "Flask", "LangChain", "Supabase", "LightGBM", "Docker", "AWS EC2"],
    visual: "/portfolio-assets/ai-trading.png",
    problem: "프로젝트 전체 리딩과 함께 LangChain 챗봇 연동, 조건/자동매매 엔진 구축, 거래소 API Key 보안, Docker 기반 AWS EC2 배포 경험을 하나의 서비스 흐름으로 정리해야 했습니다.",
    solution: "LangChain 기반 맥락 챗봇과 ML 신호 엔진을 구축하고, API Key 암호화 등록/자산 이동 로직 구현 후 Docker Compose 기반 실행 환경을 AWS EC2에서 구동해 본 경험을 정리했습니다.",
    result: "총괄 리더로서 AI 자동 펀드 매매/조건 매매 흐름과 주요 UI를 구현하고, Docker Compose 기반 EC2 배포 경험을 프로젝트 기록으로 정리했습니다.",
    link: "https://github.com/Grand-slam-project/Trading",
  },
  {
    title: "Subway 1_8",
    type: "Data Dashboard",
    category: "Team Project",
    role: "담당: 데이터 전처리 파이프라인 & XGBoost 혼잡도 예측 모델링",
    description: "서울 지하철 1-8호선 400만 행 탑승 데이터 기반의 시간대별 및 역별 실시간 혼잡도 예측 대시보드입니다.",
    stack: ["Streamlit", "Plotly", "XGBoost", "Pandas", "Scikit-learn"],
    visual: "/portfolio-assets/subway-dashboard.png",
    problem: "서울 지하철 1-8호선 400만 행 데이터 전처리 파이프라인 구축 및 XGBoost 모델 기반 실시간 혼잡도 예측 연산 최적화가 필요했습니다.",
    solution: "대용량 400만 행 탑승 데이터셋 정제/전처리 파이프라인을 구축하고, XGBoost 혼잡도 예측 연산 흐름을 대시보드 시각화와 결합했습니다.",
    result: "XGBoost 기반 서울 지하철 1-8호선 실시간 24시간 혼잡도 예측 모델링 및 데이터 전처리를 성공적으로 완수했습니다.",
    link: "https://github.com/ka6865/subway-line2",
  },
  {
    title: "KBO Ticket Platform",
    type: "Payment / Backend",
    category: "Team Project",
    role: "담당: Toss Payments 결제 & DB Lock",
    description: "KBO 티켓 P2P 거래를 위한 결제와 거래 상태 관리 플랫폼입니다.",
    stack: ["Flask", "SQLAlchemy", "Toss Payments", "APScheduler", "OAuth"],
    visual: "/portfolio-assets/kbo-ticket.png",
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
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Backend",
    categoryKey: "cat-backend",
    items: ["Supabase", "PostgreSQL", "Auth", "RLS", "API Contract"],
  },
  {
    title: "AI / Data",
    categoryKey: "cat-ai",
    items: ["Gemini AI", "Telemetry", "RAG", "ML Signal", "Data Visualization"],
  },
  {
    title: "DevOps & Infra",
    categoryKey: "cat-operation",
    items: ["AWS EC2", "Docker", "Docker Compose", "Vercel", "Cloudflare", "GitHub", "Build Test"],
  },
];

const growthItems = [
  {
    title: "혼자 만든 서비스일수록 범위를 선명하게 자르기",
    body: "BGMS를 만들며 기능을 많이 넣는 것보다, 사용자가 자주 쓰는 흐름부터 안정적으로 완성하는 기준을 잡았습니다.",
  },
  {
    title: "AI 기능은 근거 화면과 함께 보여주기",
    body: "AI 문장을 그대로 노출하기보다 전적, 텔레메트리, 리플레이처럼 사용자가 판단할 수 있는 정보와 함께 배치했습니다.",
  },
  {
    title: "포트폴리오는 설명보다 실행 화면으로 증명하기",
    body: "면접에서 말로만 설명하지 않도록 운영 링크, 저장소, 실제 캡처 화면을 함께 정리하는 방향으로 개선하고 있습니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#181818]">
      <section id="top" className="hero-shell">
        <nav className="top-nav" aria-label="주요 섹션">
          <SectionLink
            className="brand"
            sectionId="top"
            ariaLabel="포트폴리오 맨 위로"
          >
            KHS
          </SectionLink>
          <div className="nav-links">
            <SectionLink sectionId="about">About</SectionLink>
            <SectionLink sectionId="featured">BGMS</SectionLink>
            <SectionLink sectionId="projects">Projects</SectionLink>
            <SectionLink sectionId="tech">Tech Stack</SectionLink>
            <SectionLink sectionId="contact">Contact</SectionLink>
          </div>
        </nav>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Full-stack Developer Journey</p>
            <h1>
              강희성
              <span>운영 중인 PUBG 데이터 서비스 BGMS를 만든 풀스택 개발자</span>
            </h1>
            <p className="hero-description">
              Next.js, React, Supabase, 외부 API, AI 분석 기능을 하나의
              서비스 화면으로 연결했습니다. BGMS 운영 경험을 중심으로 구현
              범위를 보여줍니다.
            </p>
            <div className="hero-actions">
              <a
                className="primary-link"
                href="https://bgms.kr"
                target="_blank"
                rel="noreferrer"
              >
                BGMS.kr 운영 서비스
              </a>
              <SectionLink className="secondary-link" sectionId="projects">
                프로젝트 보기
              </SectionLink>
            </div>
            <div className="hero-quick-links" aria-label="주요 외부 링크">
              <a href="https://github.com/ka6865" target="_blank" rel="noreferrer">
                GitHub 보기
              </a>
              <a href="mailto:ka6865@gmail.com">Email 보내기</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="포트폴리오 핵심 정보">
            <span>Available for work</span>
            <strong>Full-stack / AI Developer</strong>
            <p>
              BGMS를 대표 사례로, 실제 화면과 코드에서 확인 가능한 구현 범위를
              정리한 포트폴리오입니다.
            </p>
            <dl className="hero-profile-list">
              {heroProfileItems.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="marquee" aria-label="핵심 기술 흐름">
          <div className="marquee-track">
            {[...heroProofs, ...heroProofs].map((proof, index) => (
              <span key={`${proof}-${index}`}>{proof}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>BGMS에서 보여준 구현 범위</h2>
          <p>
            BGMS에서는 맵 정보 탐색, 전적 검색, AI 분석, 커뮤니티 기능을 하나의
            서비스 안에 묶었습니다. 이 포트폴리오는 그 과정에서 맡은 화면 설계,
            데이터 연결, 인증/권한, AI 기능 구현 범위를 보여줍니다.
          </p>
        </div>

        <div className="about-highlight-block">
          <div>
            <p className="eyebrow">What I Build</p>
            <h3>실제 운영 서비스에서 검증된 핵심 구현 역량</h3>
          </div>
          <div className="about-highlight-grid">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="about-highlight-card">
                <div className="about-highlight-header">
                  <TechIcon name={item.iconKey} className="about-highlight-icon" />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
              </article>
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
              <article key={val.title} className="value-card">
                <div className="value-card-top">
                  <span className="value-num">{val.num}</span>
                  <TechIcon name={val.iconKey} className="value-icon" />
                </div>
                <h3>{val.title}</h3>
                <p className="value-subtitle">{val.subtitle}</p>
                <p className="value-body">{val.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="section featured-section">
        <div className="section-heading">
          <p className="eyebrow">Featured Project</p>
          <h2>BattleGrounds Management System</h2>
          <p>
            BGMS는 배틀그라운드 팬을 위한 비공식 서비스입니다. 현재 서비스는
            맵별 정보 탐색, AI 전적 검색, 랭킹, 무기 도감, 시뮬레이터,
            커뮤니티로 이어지는 흐름을 제공합니다.
          </p>
        </div>

        <div className="featured-card">
          <BgmsFeatureSlider slides={bgmsFeatureSlides} />

          <div className="featured-content">
            <div className="featured-content-grid">
              <div className="featured-left-panel">
                <div className="project-meta">
                  <span className="tech-badge highlight-blue">
                    <TechIcon name="solo-dev" className="tech-item-icon" />
                    <span className="tech-badge-text">1인 풀스택 (Solo Dev)</span>
                  </span>
                  <span className="tech-badge highlight-purple">
                    <TechIcon name="ai-agent" className="tech-item-icon" />
                    <span className="tech-badge-text">AI 분석 기능 제품화</span>
                  </span>
                  <span className="tech-badge">
                    <TechIcon name="Next.js" className="tech-item-icon" />
                    <span className="tech-badge-text">Next.js</span>
                  </span>
                  <span className="tech-badge">
                    <TechIcon name="React" className="tech-item-icon" />
                    <span className="tech-badge-text">React</span>
                  </span>
                  <span className="tech-badge">
                    <TechIcon name="Supabase" className="tech-item-icon" />
                    <span className="tech-badge-text">Supabase</span>
                  </span>
                  <span className="tech-badge">
                    <TechIcon name="Gemini AI" className="tech-item-icon" />
                    <span className="tech-badge-text">Gemini AI</span>
                  </span>
                </div>
                <div className="case-summary-grid">
                  {bgmsScope.map((item, index) => (
                    <article key={item.title} className="case-flow-card">
                      <span className="case-summary-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="case-summary-content">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="featured-right-panel">
                <div className="decision-panel">
                  <h3>핵심 구현 판단</h3>
                  <ol>
                    {bgmsDecisions.map((decision) => (
                      <li key={decision.title}>
                        <strong>{decision.title}</strong>
                        <span>{decision.body}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="featured-links">
                  <a
                    className="inline-link"
                    href="https://bgms.kr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    서비스 보기
                  </a>
                  <a
                    className="inline-link"
                    href="https://github.com/ka6865/pubg-map-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub 저장소
                  </a>
                </div>
              </div>
            </div>

            <div className="operations-block">
              <div className="operations-heading">
                <p className="eyebrow">Operations</p>
                <h3>운영 관리를 고려한 관리자 시스템</h3>
                <p>
                  사용자가 보는 기능 뒤에는 관리자 권한, API 응답 상태, 커뮤니티
                  보호 기준처럼 실제 운영 중 확인해야 할 관리 흐름을 정리했습니다.
                </p>
              </div>
              <div className="operations-grid">
                {bgmsOperations.map((item) => (
                  <article key={item.title} className="operation-card">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <div className="operation-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading compact">
          <p className="eyebrow">Team Projects Archive</p>
          <h2>팀 협업에서 담당한 핵심 엔지니어링 구현 사례</h2>
        </div>

        <TeamProjectShowcase projects={projects} />
      </section>

      <section id="tech" className="section tech-section">
        <div className="section-heading compact">
          <p className="eyebrow">Tech Stack</p>
          <h2>프로젝트 전반에서 사용한 기술 스택 및 운영 역량</h2>
        </div>
        <div className="tech-grid">
          {techGroups.map((group) => (
            <article key={group.title} className="tech-card">
              <div className="tech-card-header">
                <TechIcon name={group.categoryKey} className="tech-group-icon" />
                <h3>{group.title}</h3>
              </div>
              <div className="tech-badge-container">
                {group.items.map((item) => (
                  <span key={item} className="tech-badge">
                    <TechIcon name={item} className="tech-item-icon" />
                    <span className="tech-badge-text">{item}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section growth-section">
        <div className="section-heading compact">
          <p className="eyebrow">Experience / Growth</p>
          <h2>프로젝트를 개선하며 정리한 기준</h2>
        </div>
        <div className="growth-list">
          {growthItems.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>같이 일할 준비가 된 개발자, 강희성입니다.</h2>
          <p>
            BGMS 운영 경험과 팀 프로젝트 구현 경험을 바탕으로, 맡은 범위를
            화면과 코드로 설명할 수 있게 준비했습니다.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/ka6865" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:ka6865@gmail.com">Email</a>
          <a href="https://bgms.kr" target="_blank" rel="noreferrer">
            BGMS
          </a>
        </div>
      </footer>
    </main>
  );
}
