"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TechIcon } from "./TechIcon";

export interface TeamProject {
  title: string;
  type: string;
  category: string;
  role: string;
  description: string;
  stack: string[];
  visual: string;
  problem: string;
  solution: string;
  result: string;
  link: string;
}

interface TeamProjectShowcaseProps {
  projects: TeamProject[];
}

function formatProjectUrl(url: string) {
  try {
    const projectUrl = new URL(url);
    return `${projectUrl.hostname}${projectUrl.pathname.replace(/\/$/, "")}`;
  } catch {
    return "Repository";
  }
}

export function TeamProjectShowcase({ projects }: TeamProjectShowcaseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const updateSelectedProject = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const setupCarousel = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    updateSelectedProject();
  }, [emblaApi, updateSelectedProject]);

  useEffect(() => {
    if (!emblaApi) return;

    const setupFrame = window.requestAnimationFrame(setupCarousel);
    emblaApi.on("select", updateSelectedProject);
    emblaApi.on("reInit", setupCarousel);

    return () => {
      window.cancelAnimationFrame(setupFrame);
      emblaApi.off("select", updateSelectedProject);
      emblaApi.off("reInit", setupCarousel);
    };
  }, [emblaApi, setupCarousel, updateSelectedProject]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="project-showcase" aria-label="프로젝트 쇼케이스">
      <div className="project-showcase-toolbar">
        <div>
          <span>프로젝트 쇼케이스</span>
          <strong>
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </strong>
        </div>
        <div className="project-showcase-controls">
          <button type="button" onClick={scrollPrev} aria-label="이전 프로젝트 보기">
            이전 프로젝트
          </button>
          <button type="button" onClick={scrollNext} aria-label="다음 프로젝트 보기">
            다음 프로젝트
          </button>
        </div>
      </div>

      <div className="project-showcase-viewport" ref={emblaRef}>
        <div className="project-showcase-container">
          {projects.map((project) => (
            <article className="project-showcase-slide" key={project.title}>
              <div className="project-showcase-media">
                <div className="browser-header">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                  <span className="browser-url">{formatProjectUrl(project.link)}</span>
                </div>
                <div className="project-showcase-img-stage">
                  <img
                    src={project.visual}
                    alt={`${project.title} 프로젝트 화면`}
                    width={1920}
                    height={1080}
                  />
                  <div className="project-showcase-media-label">
                    <span>{project.category}</span>
                    <strong>{project.type}</strong>
                  </div>
                </div>
              </div>

              <div className="project-showcase-content">
                <div className="project-showcase-header-row">
                  <div className="project-showcase-title">
                    <span className="team-badge">
                      <TechIcon name="team-project" className="tech-item-icon" />
                      <span>{project.category}</span>
                    </span>
                    <h3>{project.title}</h3>
                    <p className="project-role-tag">{project.role}</p>
                    <p>{project.description}</p>
                  </div>
                  <a className="inline-link" href={project.link} target="_blank" rel="noreferrer">
                    저장소 보기
                  </a>
                </div>

                <div className="stack-list">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge compact">
                      <TechIcon name={tech} className="tech-item-icon" />
                      <span className="tech-badge-text">{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="project-proof-grid">
                  <div className="project-proof">
                    <span>핵심 문제</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-proof">
                    <span>해결 방식</span>
                    <p>{project.solution}</p>
                  </div>
                  <div className="project-proof">
                    <span>결과</span>
                    <p>{project.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="project-showcase-tabs" aria-label="팀프로젝트 선택">
        {scrollSnaps.map((_, index) => {
          const project = projects[index];
          return (
            <button
              type="button"
              key={project.title}
              className={index === selectedIndex ? "is-active" : ""}
              onClick={() => scrollTo(index)}
              aria-label={`${project.title} 보기`}
              aria-current={index === selectedIndex ? "true" : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.title}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}
