"use client";

import { useRef, useState, type PointerEvent } from "react";
import { TechIcon } from "./TechIcon";

export function HeroBusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
    cardRef.current.style.setProperty("--hero-card-rotate-x", `${(-offsetY * 14).toFixed(2)}deg`);
    cardRef.current.style.setProperty("--hero-card-rotate-y", `${(offsetX * 18).toFixed(2)}deg`);
  };

  const resetPerspective = () => {
    cardRef.current?.style.setProperty("--hero-card-rotate-x", "0deg");
    cardRef.current?.style.setProperty("--hero-card-rotate-y", "0deg");
  };

  const handleCardClick = () => {
    // 텍스트가 선택(드래그)된 경우 뒤집히지 않도록 방지
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <aside
      ref={cardRef}
      className="hero-card-container"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPerspective}
    >
      <div
        className={`hero-card-flipper ${isFlipped ? "is-flipped" : ""}`}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        aria-label="명함 뒤집기 (클릭)"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
      >
        {/* 앞면: BGMS.kr 대표 제품 화면 (브라우저 Mock-up) */}
        <div className="hero-card-face hero-card-front">
          <div className="hero-product-meta">
            <span>BGMS.kr</span>
            <strong className="live-status-badge">
              <span className="live-ping-dot" aria-hidden="true" />
              LIVE SERVICE
            </strong>
            <div className="hero-flip-hint">
              <span>CARD FLIP</span>
              <svg className="flip-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 1l4 4-4 4" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <path d="M7 23l-4-4 4-4" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            </div>
          </div>
          <div className="hero-product-stage">
            <div className="hero-product-browser" aria-hidden="true">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span>bgms.kr/stats</span>
            </div>
            <img
              src="portfolio-assets/bgms-feature-search.png"
              alt="BGMS 대표 제품 화면"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
            />
            <div className="hero-product-caption">
              <span>MAP · STATS · AI · COMMUNITY</span>
            </div>
          </div>
          <dl className="hero-profile-list">
            <div>
              <dt>Started</dt>
              <dd>2025.12</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>Map / Stats / AI / Community</dd>
            </div>
            <div>
              <dt>Operations</dt>
              <dd>API Monitor / Cache Maintenance</dd>
            </div>
          </dl>
        </div>

        {/* 뒷면: 개발자 명함 (Business Card) */}
        <div className="hero-card-face hero-card-back">
          <div className="card-back-header">
            <span className="card-brand-badge">KHS.DEV</span>
            <span className="card-role-title">FULL-STACK DEVELOPER</span>
          </div>

          <div className="card-back-body">
            <h2 className="card-name">강 희 성</h2>
            <p className="card-tagline">
              운영 서비스 BGMS를 개발·개선하는 1인 풀스택 엔지니어
            </p>

            <div className="card-details">
              <div className="card-detail-item">
                <TechIcon name="mail" className="card-icon" />
                <span>ka6865@gmail.com</span>
              </div>
              <div className="card-detail-item">
                <TechIcon name="github" className="card-icon" />
                <span>github.com/ka6865</span>
              </div>
              <div className="card-detail-item">
                <TechIcon name="globe" className="card-icon" />
                <span>bgms.kr</span>
              </div>
            </div>

            <div className="card-skills-tags">
              <span>Next.js 16</span>
              <span>React 19</span>
              <span>TypeScript</span>
              <span>Supabase</span>
            </div>
          </div>

          <div className="card-back-footer">
            <span className="click-to-flip-text">Click card to view app preview ↺</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
