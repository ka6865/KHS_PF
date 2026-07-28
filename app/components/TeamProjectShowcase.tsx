"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent, type WheelEvent } from "react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true, watchDrag: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dragStartXRef = useRef<number | null>(null);
  const wheelLockRef = useRef(false);

  const updateSelectedProject = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const setupCarousel = useCallback(() => {
    if (!emblaApi) return;
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

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < 12 || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;

    event.preventDefault();
    if (wheelLockRef.current) return;

    wheelLockRef.current = true;
    if (event.deltaX > 0) {
      scrollNext();
    } else {
      scrollPrev();
    }

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

    if (distance > 0) {
      scrollPrev();
    } else {
      scrollNext();
    }
  };

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
      </div>

      <div className="project-showcase-tabs" aria-label="팀프로젝트 선택">
        {projects.map((project, index) => {
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

      <div className="project-showcase-viewport" ref={emblaRef} onWheel={handleWheel}>
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
                <div
                  className="project-showcase-img-stage"
                  onPointerDown={startPointerDrag}
                  onPointerUp={finishPointerDrag}
                  onPointerCancel={() => {
                    dragStartXRef.current = null;
                  }}
                >
                  <img
                    src={project.visual}
                    alt={`${project.title} 프로젝트 화면`}
                    width={1920}
                    height={1080}
                    draggable={false}
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
                    <TechIcon name="github" className="btn-icon" />
                    <span>저장소 보기</span>
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
                    <span>01 / 핵심 문제</span>
                    <p>{project.problem}</p>
                  </div>
                  <div className="project-proof">
                    <span>02 / 구현 방식</span>
                    <p>{project.solution}</p>
                  </div>
                  <div className="project-proof">
                    <span>03 / 결과</span>
                    <p>{project.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
