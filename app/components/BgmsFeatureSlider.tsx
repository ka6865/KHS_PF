"use client";

import { useRef, useState, type PointerEvent, type WheelEvent } from "react";

export interface BgmsFeatureSlide {
  title: string;
  label: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
  url?: string;
  caseStudy: {
    problemLead: string;
    problem: string;
    solutionLead: string;
    solution: string;
    operationLead: string;
    operation: string;
  };
}

interface BgmsFeatureSliderProps {
  slides: BgmsFeatureSlide[];
}

export function BgmsFeatureSlider({ slides }: BgmsFeatureSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const wheelLockRef = useRef(false);
  const activeSlide = slides[activeIndex];

  const moveSlide = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < 12 || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    if (wheelLockRef.current) return;

    wheelLockRef.current = true;
    moveSlide(event.deltaX > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 350);
  };

  const startPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    dragStartXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const finishPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const startX = dragStartXRef.current;
    dragStartXRef.current = null;
    if (startX === null) return;

    const distance = event.clientX - startX;
    if (Math.abs(distance) < 48) return;

    moveSlide(distance > 0 ? -1 : 1);
  };

  return (
    <div className="feature-slider" aria-label="BGMS 기능 쇼케이스" onWheel={handleWheel}>
      <div className="project-showcase-toolbar feature-showcase-toolbar">
        <div>
          <span>BGMS 기능 쇼케이스</span>
          <strong>
            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </strong>
        </div>
      </div>

      <div className="feature-slide-thumbs" aria-label="BGMS 기능 선택">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.title}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`${slide.title} 기능 자세히 보기`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")} · {slide.label}</span>
            <strong>{slide.title}</strong>
          </button>
        ))}
      </div>

      <div className="feature-showcase-frame">
        <figure className="featured-media feature-slider-media">
          <div className="browser-header">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="browser-url">{activeSlide.url || `https://bgms.kr/features/${activeSlide.label.toLowerCase()}`}</span>
          </div>
          <div
            className="featured-shot-wrapper feature-slide-stage"
            onPointerDown={startPointerDrag}
            onPointerUp={finishPointerDrag}
            onPointerCancel={() => {
              dragStartXRef.current = null;
            }}
          >
            <img
              className="featured-shot"
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              width={1920}
              height={1080}
              loading={activeIndex === 0 ? "eager" : "lazy"}
              fetchPriority={activeIndex === 0 ? "high" : "auto"}
              draggable={false}
            />
          </div>
          <figcaption>{activeSlide.imageAlt}</figcaption>
        </figure>

        <div className="feature-info-bar">
          <div className="feature-info-copy">
            <div className="feature-slide-tags">
              {activeSlide.tags.map((tag) => (
                <strong key={tag}>{tag}</strong>
              ))}
            </div>
            <h3>{activeSlide.title}</h3>
            <p>{activeSlide.body}</p>
          </div>

          <div className="feature-case-study" aria-label={`${activeSlide.title} 사례 설명`}>
            <article>
              <span>핵심 문제</span>
              <strong className="feature-case-study-lead">{activeSlide.caseStudy.problemLead}</strong>
              <p>{activeSlide.caseStudy.problem}</p>
            </article>
            <article>
              <span>해결 방식</span>
              <strong className="feature-case-study-lead">{activeSlide.caseStudy.solutionLead}</strong>
              <p>{activeSlide.caseStudy.solution}</p>
            </article>
            <article>
              <span>운영 보완</span>
              <strong className="feature-case-study-lead">{activeSlide.caseStudy.operationLead}</strong>
              <p>{activeSlide.caseStudy.operation}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
