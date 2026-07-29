"use client";

import { useEffect, useRef } from "react";

export function AmbientGridBackground() {
  const cursorRef = useRef<HTMLDivElement>(null);

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
      if (frameId === 0) frameId = window.requestAnimationFrame(updateCursor);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="ambient-background-shell" aria-hidden="true">
      <div className="grid-pattern-overlay" />
      <div ref={cursorRef} className="grid-cursor-marker" />
    </div>
  );
}
