"use client";

import type { MouseEvent, ReactNode } from "react";

interface SectionLinkProps {
  className?: string;
  children: ReactNode;
  sectionId: string;
  ariaLabel?: string;
}

export function SectionLink({
  className,
  children,
  sectionId,
  ariaLabel,
}: SectionLinkProps) {
  const href = `#${sectionId}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <a
      className={className}
      href={href}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
