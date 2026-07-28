"use client";

import { useState } from "react";

export interface BgmsFeatureSlide {
  title: string;
  label: string;
  body: string;
  tags: string[];
  image: string;
  imageAlt: string;
  url?: string;
}

interface BgmsFeatureSliderProps {
  slides: BgmsFeatureSlide[];
}

export function BgmsFeatureSlider({ slides }: BgmsFeatureSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const moveSlide = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <div className="feature-slider" aria-label="BGMS 기능 쇼케이스">
      <figure className="featured-media feature-slider-media">
        <div className="browser-header">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
          <span className="browser-url">{activeSlide.url || `https://bgms.kr/features/${activeSlide.label.toLowerCase()}`}</span>
        </div>
        <div className="featured-shot-wrapper feature-slide-stage">
          <img
            className="featured-shot"
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            width={1920}
            height={1080}
            loading={activeIndex === 0 ? "eager" : "lazy"}
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
          />
        </div>
        <figcaption>{activeSlide.imageAlt}</figcaption>
      </figure>

      <div className="feature-info-bar">
        <div className="feature-info-copy">
          <div className="feature-info-meta">
            <span className="feature-num">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="feature-slide-tags">
              {activeSlide.tags.map((tag) => (
                <strong key={tag}>{tag}</strong>
              ))}
            </div>
          </div>
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.body}</p>
        </div>

        <div className="feature-slider-controls" aria-label="BGMS 기능 슬라이드 조작">
          <button type="button" onClick={() => moveSlide(-1)} aria-label="이전 기능 보기">
            이전 기능
          </button>
          <div className="feature-slide-dots" aria-label="현재 기능 위치">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.title}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`${slide.title} 보기`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => moveSlide(1)} aria-label="다음 기능 보기">
            다음 기능
          </button>
        </div>
      </div>

      <div className="feature-slide-thumbs">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.title}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`${slide.title} 기능 자세히 보기`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <span>{slide.label}</span>
            <strong>{slide.title}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
