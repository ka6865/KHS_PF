"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    for (const target of targets) {
      if (target.getBoundingClientRect().top <= window.innerHeight * 0.92) {
        target.classList.add("is-revealed");
        continue;
      }

      target.classList.add("is-reveal-pending");
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
