import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  switch (norm) {
    // Frontend
    case "next.js":
    case "nextjs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#000000" />
          <path d="M17.2 17.8L9.3 7.5H7.5V16.5H9.1V9.7L15.8 18.2C16.3 18.1 16.8 17.9 17.2 17.8Z" fill="#FFFFFF" />
          <path d="M14.8 7.5H16.5V14.5H14.8V7.5Z" fill="#FFFFFF" />
        </svg>
      );

    case "react":
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case "typescript":
    case "ts":
      return (
        <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M68.75 75.95c1.88 1.15 4.54 2.12 7.73 2.12 4.05 0 6.33-1.88 6.33-4.54 0-2.66-2.18-4.11-7.26-5.93-7.5-2.66-12.46-6.41-12.46-13.67 0-8.23 6.9-14.28 17.66-14.28 4.72 0 8.71 1.03 11.56 2.42l-2.42 8.71c-2.06-.97-4.96-1.94-8.59-1.94-4.23 0-6.17 1.81-6.17 4.05 0 2.66 2.3 3.99 7.62 5.93 7.86 2.84 12.22 6.53 12.22 13.91 0 8.71-6.9 14.88-18.75 14.88-5.32 0-10.4-1.33-13.06-2.78l2.6-8.88zm-37.45-35h33.87v9.07H52.56V96H40.71V50.02H31.3V40.95z" fill="#FFFFFF" />
        </svg>
      );

    case "tailwind css":
    case "tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#06B6D4" />
        </svg>
      );

    case "responsive ui":
    case "responsive":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );

    // Backend
    case "supabase":
      return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56.37 94.61C53.79 97.94 48.47 96.02 48.61 91.82L51.34 11.23C51.48 7.02 56.81 5.1 59.39 8.43L97.23 57.29C99.81 60.62 97.35 65.48 93.15 65.48H60.9L56.37 94.61Z" fill="#3ECF8E" />
          <path d="M43.63 5.39C46.21 2.06 51.53 3.98 51.39 8.18L48.66 88.77C48.52 92.98 43.19 94.9 40.61 91.57L2.77 42.71C0.19 39.38 2.65 34.52 6.85 34.52H39.1L43.63 5.39Z" fill="#3ECF8E" fillOpacity="0.6" />
        </svg>
      );

    case "postgresql":
    case "postgres":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#336791" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
          <path d="M12 8v8" />
        </svg>
      );

    case "auth":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );

    case "rls":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "api contract":
    case "api":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18l6-6-6-6" />
          <path d="M8 6l-6 6 6 6" />
        </svg>
      );

    // AI / Data
    case "gemini ai":
    case "gemini":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" fill="url(#gemini-gradient)" />
          <defs>
            <linearGradient id="gemini-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A73E8" />
              <stop offset="0.5" stopColor="#A142F4" />
              <stop offset="1" stopColor="#E37400" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "telemetry":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );

    case "rag":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      );

    case "ml signal":
    case "ml":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );

    case "data visualization":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );

    // Operation
    case "vercel":
      return (
        <svg className={className} viewBox="0 0 116 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" fill="#000000" />
        </svg>
      );

    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "build test":
    case "test":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );

    case "eslint":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#4B32C3" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 6L6 9.5V14.5L12 18L18 14.5V9.5L12 6Z" fill="#4B32C3" />
        </svg>
      );

    case "external api":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );

    case "aws ec2":
    case "aws":
    case "ec2":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );

    case "docker":
    case "docker compose":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2496ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );

    // Group Header Category Icons
    case "cat-frontend":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );

    case "cat-backend":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );

    case "cat-ai / data":
    case "cat-ai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case "cat-operation":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );

    // Project Archive specific stack icons
    case "flask":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v5.5L4.5 17A2.5 2.5 0 0 0 6.7 21h10.6a2.5 2.5 0 0 0 2.2-4L14 7.5V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      );

    case "streamlit":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2z" fill="#FF4B4B" />
        </svg>
      );

    case "plotly":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3F4F75" strokeWidth="2.2" strokeLinecap="round">
          <line x1="4" y1="20" x2="4" y2="14" />
          <line x1="9" y1="20" x2="9" y2="8" />
          <line x1="14" y1="20" x2="14" y2="11" />
          <line x1="19" y1="20" x2="19" y2="5" />
        </svg>
      );

    case "pandas":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#150458" strokeWidth="2" strokeLinecap="round">
          <path d="M6 3v18" />
          <path d="M12 7v10" />
          <path d="M18 11v6" />
        </svg>
      );

    case "xgboost":
    case "lightgbm":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );

    case "lstm":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      );

    case "sqlalchemy":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#D71A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );

    case "toss payments":
    case "toss":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" stroke="#0064FF" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    case "apscheduler":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );

    case "oauth":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="12" r="4" />
          <path d="M12 12h8v3h-3v3h-3" />
        </svg>
      );

    // About Me Icons
    case "about-product":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );

    case "about-ai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 12L2.1 10.5" />
          <path d="M12 12V22" />
        </svg>
      );

    case "about-stability":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );

    case "about-code":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );

    case "about-flow":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    case "about-context":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );

    case "about-architecture":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );

    // Classification Icons
    case "solo-dev":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );

    case "ai-agent":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case "team-project":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      );
  }
}
