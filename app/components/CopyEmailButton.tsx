"use client";

import { useState } from "react";
import { TechIcon } from "./TechIcon";

interface CopyEmailButtonProps {
  email: string;
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="copy-email-container">
      <button
        type="button"
        onClick={handleCopy}
        className="footer-link-btn"
        aria-label="이메일 주소 복사하기"
      >
        <TechIcon name="mail" className="btn-icon" />
        <span>Email</span>
      </button>

      {copied && (
        <div className="copy-toast-badge" role="status">
          <span>Email 주소를 복사했습니다.</span>
        </div>
      )}
    </div>
  );
}
