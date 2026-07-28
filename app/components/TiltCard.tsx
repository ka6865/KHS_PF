"use client";

import React, { useRef, type MouseEvent } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = "", maxTilt = 6 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    // 모바일/터치 디바이스에서는 틸트 효과를 끄고 스크롤 감도를 최우선 보호
    if (window.innerWidth <= 768 || "ontouchstart" in window) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = ((mouseY / height) - 0.5) * -2 * maxTilt;
    const rotateY = ((mouseX / width) - 0.5) * 2 * maxTilt;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`;
    cardRef.current.style.transition = "transform 80ms ease-out";
    spotlightRef.current?.style.setProperty("background", `radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(245, 169, 0, 0.14), transparent 80%)`);
    spotlightRef.current?.classList.add("is-visible");
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    cardRef.current.style.transition = "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)";
    spotlightRef.current?.classList.remove("is-visible");
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={spotlightRef} className="spotlight-overlay" aria-hidden="true" />
      {children}
    </div>
  );
}
