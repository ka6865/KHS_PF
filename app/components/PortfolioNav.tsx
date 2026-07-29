"use client";

import { useEffect, useState } from "react";
import { SectionLink } from "./SectionLink";

const navigationItems = [
  { id: "about", label: "About" },
  { id: "featured", label: "BGMS" },
  { id: "projects", label: "Projects" },
  { id: "tech", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

const sectionIds = ["top", ...navigationItems.map((item) => item.id)];

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 28;
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const marker = window.innerHeight * 0.38;
      let nextSection = "top";

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top <= marker) {
          nextSection = sectionId;
        }
      }

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    const onScroll = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <nav className="top-nav" aria-label="주요 섹션">
      <SectionLink
        className={`brand${activeSection === "top" ? " is-active" : ""}`}
        sectionId="top"
        ariaLabel="포트폴리오 맨 위로"
      >
        KHS
      </SectionLink>
      <div className="nav-links">
        {navigationItems.map((item) => (
          <SectionLink
            key={item.id}
            className={activeSection === item.id ? "is-active" : ""}
            sectionId={item.id}
          >
            {item.label}
          </SectionLink>
        ))}
      </div>
      <div className="scroll-progress-line" aria-hidden="true" />
    </nav>
  );
}
