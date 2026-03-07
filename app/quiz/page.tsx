"use client";

import { useState } from "react";
import Link from "next/link";
import {
  loadPreferredStyle,
  loadRecommendation,
  savePreferredStyle,
  saveRecommendation
} from "@/lib/quizStorage";

const quizOptions = [
  "استكشاف عالم مفتوح",
  "ألغاز وأسرار",
  "مواجهات ملحمية"
] as const;

const recommendationMap: Record<(typeof quizOptions)[number], string> = {
  "استكشاف عالم مفتوح": "The Legend of Zelda: Breath of the Wild",
  "ألغاز وأسرار": "The Legend of Zelda: Link's Awakening",
  "مواجهات ملحمية": "The Legend of Zelda: Twilight Princess"
};

export default function QuizPage() {
  const [selected, setSelected] = useState<string>(() => loadPreferredStyle());
  const [savedRecommendation, setSavedRecommendation] = useState<string>(() => loadRecommendation());

  const recommendation = selected
    ? recommendationMap[selected as keyof typeof recommendationMap]
    : savedRecommendation;

  const handleSelect = (value: string) => {
    const nextRecommendation = recommendationMap[value as keyof typeof recommendationMap];
    setSelected(value);
    savePreferredStyle(value);
    setSavedRecommendation(nextRecommendation);
    saveRecommendation(nextRecommendation);
  };

  return (
    <main className="section">
      <article className="panel" style={{ width: "min(780px, 100%)" }}>
        <p className="kicker">اختبار البداية</p>
        <h1 className="title">حدد جوّك ونرشّح لك أول لعبة</h1>
        <p className="body">
          النسخة الحالية بدون تسجيل دخول. تفضيلك ينحفظ محلياً في متصفحك عشان ترجع له لاحقاً بسرعة.
        </p>

        <div style={{ display: "grid", gap: "0.8rem", marginTop: "1.5rem" }}>
          {quizOptions.map((option) => (
            <button
              key={option}
              type="button"
              className="cta"
              style={{
                width: "100%",
                textAlign: "right",
                borderColor: option === selected ? "rgba(46, 163, 154, 0.88)" : undefined
              }}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {recommendation ? (
          <p className="body" style={{ marginTop: "1.4rem" }}>
            ترشيحك الحالي: <strong>{recommendation}</strong>
          </p>
        ) : null}

        <Link className="cta" href="/" style={{ marginTop: "2rem", display: "inline-flex" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
