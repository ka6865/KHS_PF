"use client";

import { useState } from "react";
import { TechIcon } from "./TechIcon";

interface SystemNode {
  id: string;
  name: string;
  sub: string;
  protocol: string;
  step: string;
  icon: string;
  desc: string;
  detail: string;
}

const architectureNodes: SystemNode[] = [
  {
    id: "pubg",
    name: "PUBG Official API",
    sub: "Error Observability & 429 Isolation",
    protocol: "HTTPS / REST API",
    step: "01 Ingest",
    icon: "globe",
    desc: "공식 텔레메트리 JSON 및 전적 데이터 수집 파이프라인",
    detail: "API 요청 실패 단계, 429 한도 초과, 응답 지연 시간을 실시간 추적해 외부 API 장애가 서비스 전체 화면 중단으로 번지지 않도록 격리 및 관측",
  },
  {
    id: "r2",
    name: "Cloudflare R2 & Cache Lock",
    sub: "Large File Store & Thundering Herd Resilience",
    protocol: "S3 API / PL/pgSQL Lock",
    step: "02 Storage",
    icon: "cat-operation",
    desc: "고용량 경기 텔레메트리 파일 객체 저장소",
    detail: "고용량 텔레메트리 본문은 R2 객체 저장소로 분리 저장하고, DB에는 메타데이터 및 분산 캐시 락(Cache Lock)을 적용해 동시 재요청 스탬피드 방지",
  },
  {
    id: "supabase",
    name: "Supabase DB & RLS Security",
    sub: "Server-side Access & Bot Defense",
    protocol: "Service Role / Turnstile RPC",
    step: "03 Security",
    icon: "supabase",
    desc: "인증 세션, Row Level Security, 게시물/댓글 권한 통제",
    detail: "캐시 및 분석 데이터의 브라우저 직접 접근을 차단하여 Server-side 권한만 허용하고, Turnstile 봇 검증과 연동된 작성 래이트 리밋으로 보안 경계 강화",
  },
  {
    id: "gemini",
    name: "Gemini AI & Coaching Engine",
    sub: "Streaming Response & Cache Versioning",
    protocol: "SSE Streaming / AI Cache",
    step: "04 AI Engine",
    icon: "gemini ai",
    desc: "텔레메트리 기반 교전/생존 플레이어 AI 리포트",
    detail: "플레이어 코칭 리포트 스트리밍 연동과 프롬프트/응답 구조 변경 시 이전 오염 캐시를 안전하게 자동 동기화·무효화하는 버저닝 알고리즘 운용",
  },
  {
    id: "actions",
    name: "GitHub Actions Daily Maintenance",
    sub: "Scheduled Cleanup & Operations Snapshot",
    protocol: "CRON / Bearer Auth",
    step: "05 Maintenance",
    icon: "cat-operation",
    desc: "일일 데이터 수집·캐시 정리·운영 상태 기록 작업",
    detail: "GitHub Actions 예약 작업으로 텔레메트리 저장소와 AI 캐시를 정리하고, 상위 플레이어 데이터 수집·블루존 통계 추출·패치노트 동기화·관리 모니터 스냅샷을 수행합니다.",
  },
];

export function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<SystemNode>(architectureNodes[0]);

  return (
    <div className="architecture-diagram-container">
      <div className="architecture-header">
        <p className="eyebrow">System Architecture Fact Sheet</p>
        <h3>BGMS 1인 운영 아키텍처 데이터 파이프라인</h3>
      </div>

      <div className="architecture-grid">
        {/* 아키텍처 노드 맵 */}
        <div className="architecture-nodes">
          {architectureNodes.map((node) => {
            const isSelected = node.id === selectedNode.id;
            return (
              <button
                key={node.id}
                type="button"
                className={`arch-node-btn ${isSelected ? "is-selected" : ""}`}
                onClick={() => setSelectedNode(node)}
              >
                <div className="arch-node-icon-box">
                  <TechIcon name={node.icon} className="arch-node-icon" />
                </div>
                <div className="arch-node-info">
                  <div className="arch-node-tags">
                    <span className="arch-step-tag">{node.step}</span>
                    <span className="arch-proto-tag">{node.protocol}</span>
                  </div>
                  <strong>{node.name}</strong>
                  <span>{node.sub}</span>
                </div>
                <div className="arch-node-arrow">→</div>
              </button>
            );
          })}
        </div>

        {/* 선택된 노드 구현 사실 상세 카드 */}
        <div className="architecture-detail-card">
          <div className="detail-card-badge">
            <TechIcon name={selectedNode.icon} className="detail-badge-icon" />
            <span>{selectedNode.step} • {selectedNode.protocol}</span>
          </div>
          <h4>{selectedNode.name}</h4>
          <p className="detail-desc">{selectedNode.desc}</p>
          <div className="detail-fact-box">
            <strong>실제 엔지니어링 구현 및 예외 처리:</strong>
            <p>{selectedNode.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
