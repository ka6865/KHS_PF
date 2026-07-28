"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientGridBackground() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursor = () => {
      frameId = 0;
      cursorRef.current?.style.setProperty("transform", `translate3d(${cursorX}px, ${cursorY}px, 0)`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      cursorX = event.clientX + window.scrollX;
      cursorY = event.clientY + window.scrollY;
      setIsVisible(true);
      if (frameId === 0) frameId = window.requestAnimationFrame(updateCursor);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.body.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="ambient-background-shell" aria-hidden="true">
      <div className="grid-pattern-overlay" />
      <div
        ref={cursorRef}
        className={`grid-cursor-marker ${isVisible ? "is-visible" : ""}`}
      />
    </div>
  );
}
