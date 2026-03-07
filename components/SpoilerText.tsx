"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type SpoilerTextProps = {
  children: ReactNode;
};

export function SpoilerText({ children }: SpoilerTextProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      className="spoiler-text"
      data-revealed={revealed}
      onClick={() => setRevealed((prev: boolean) => !prev)}
      aria-label={revealed ? "إخفاء المحتوى القصصي" : "إظهار المحتوى القصصي"}
      aria-pressed={revealed}
    >
      {children}
    </button>
  );
}
