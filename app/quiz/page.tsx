"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  getAllGamesForCheckbox,
  recommend,
  type StoryInterest,
  type Platform,
} from "@/lib/quizEngine";
import { gameAssetPath } from "@/lib/gameAssets";
import { loadQuizState, saveQuizState, clearQuizState, EMPTY_STATE, type QuizState } from "@/lib/quizStorage";
import { getGame } from "@/lib/games";

/* ─── Animation variants ─── */
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 260 : -260, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -260 : 260, opacity: 0 }),
};

const springTransition = { type: "spring", stiffness: 320, damping: 32 } as const;

/* ─── Constants ─── */
const STORY_OPTIONS: { value: StoryInterest; label: string; desc: string }[] = [
  {
    value: "deep_lore",
    label: "مهتم بالتفاصيل الكاملة (حوالي 21 لعبة)",
    desc: "أبغى أفهم كل شيء — هذا المسار يمشيك على ألعاب أسطورة زيلدا المهمة قصصياً كاملة.",
  },
  {
    value: "core_narrative",
    label: "الأساسيات بس (حوالي 16 لعبة)",
    desc: "أبغى أمشي على ألعاب الخريطة الزمنية فقط بدون كل الإصدارات الجانبية.",
  },
  {
    value: "modern_peak",
    label: "ابغى ذروة السلسلة تقنياً فقط (بلعب من 2 إلى 3 فقط)",
    desc: "أبغى الألعاب الثقيلة الحديثة فقط بأعلى قفزة تقنية وتجربة بصرية.",
  },
];

const PLATFORM_OPTIONS: { value: Platform; label: string; icon: string }[] = [
  { value: "pc", label: "كمبيوتر", icon: "🖥️" },
  { value: "android", label: "أندرويد", icon: "📱" },
  { value: "ios", label: "آيفون", icon: "🍎" },
  { value: "switch", label: "نينتندو سويتش", icon: "🎮" },
];

/* ─── Main component ─── */
export default function QuizPage() {
  const allGames = useMemo(() => getAllGamesForCheckbox(), []);

  const [state, setState] = useState<QuizState>(() => loadQuizState());
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  /* ─── helpers ─── */
  const persist = useCallback((next: QuizState) => {
    setState(next);
    saveQuizState(next);
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setStep((s) => s + 1);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const restart = useCallback(() => {
    clearQuizState();
    setState({ ...EMPTY_STATE });
    setDirection(-1);
    setStep(0);
  }, []);

  /* ─── Q1: toggle played game ─── */
  const togglePlayed = useCallback(
    (slug: string) => {
      const next = { ...state };
      const idx = next.playedSlugs.indexOf(slug);
      if (idx >= 0) {
        next.playedSlugs = next.playedSlugs.filter((s) => s !== slug);
      } else {
        next.playedSlugs = [...next.playedSlugs, slug];
      }
      persist(next);
    },
    [state, persist]
  );

  /* ─── Q2: story interest ─── */
  const pickStory = useCallback(
    (v: StoryInterest) => {
      persist({ ...state, storyInterest: v });
    },
    [state, persist]
  );

  /* ─── Q3: toggle platform ─── */
  const togglePlatform = useCallback(
    (p: Platform) => {
      const next = { ...state };
      const idx = next.platforms.indexOf(p);
      if (idx >= 0) {
        next.platforms = next.platforms.filter((x) => x !== p);
      } else {
        next.platforms = [...next.platforms, p];
      }
      persist(next);
    },
    [state, persist]
  );

  /* ─── Advance from Q3: compute result ─── */
  const advanceFromQ3 = useCallback(() => {
    const result = recommend({
      playedSlugs: state.playedSlugs,
      storyInterest: state.storyInterest as StoryInterest,
      platforms: state.platforms,
    });
    persist({ ...state, resultSlug: result?.slug ?? null });
    setDirection(1);
    setStep(3);
  }, [state, persist]);

  const totalSteps = 4;

  /* ─── Can advance? ─── */
  const canNext =
    step === 0 ? true : // Q1 can be skipped
      step === 1 ? !!state.storyInterest :
        step === 2 ? state.platforms.length > 0 :
          false;

  /* ─── Result game ─── */
  const resultGame = step === 3 && state.resultSlug ? getGame(state.resultSlug) : null;

  return (
    <main className="section quiz-shell">
      {/* ─── Progress dots ─── */}
      <div className="quiz-progress">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span
            key={i}
            className={`quiz-dot${i === step || (step === 3 && i === totalSteps - 1) ? " is-active" : ""}${i < step ? " is-done" : ""}`}
          />
        ))}
      </div>

      {/* ─── Steps ─── */}
      <AnimatePresence mode="wait" custom={direction}>
        {step === 0 && (
          <motion.article
            key="q1"
            className="panel quiz-step"
            style={{ width: "min(1060px, 100%)" }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
          >
            <p className="kicker">السؤال 1 من {totalSteps - 1}</p>
            <h2 className="title">هل قد لعبت لعبة من السلسلة من قبل؟</h2>
            <p className="body">
              عدد ألعاب زيلدا يتجاوز 40+، لكن هنا نركز على 21 لعبة مهمة قصصياً فقط.
              إذا لعبت لعبة مو موجودة بالقائمة لا تشيل هم، غالباً مو مؤثرة على مسار القصة الرئيسي.
            </p>

            <div className="quiz-checkbox-grid">
              {allGames.map((g) => (
                <button
                  key={g.slug}
                  type="button"
                  className={`quiz-checkbox-card${state.playedSlugs.includes(g.slug) ? " is-checked" : ""}`}
                  onClick={() => togglePlayed(g.slug)}
                >
                  <img
                    src={gameAssetPath(g.slug, "cover", undefined, g.assetExt)}
                    alt={g.displayTitle}
                  />
                  <span className="quiz-checkbox-label">{g.displayTitle}</span>
                  <span className="quiz-checkbox-mark" aria-hidden>
                    {state.playedSlugs.includes(g.slug) ? "✓" : ""}
                  </span>
                </button>
              ))}
            </div>

            <div className="quiz-nav">
              <span />
              <button className="cta" type="button" onClick={goNext}>
                التالي ←
              </button>
            </div>
          </motion.article>
        )}

        {step === 1 && (
          <motion.article
            key="q2"
            className="panel quiz-step"
            style={{ width: "min(820px, 100%)" }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
          >
            <p className="kicker">السؤال 2 من {totalSteps - 1}</p>
            <h2 className="title">وش نوع اهتمامك بقصة السلسلة؟</h2>
            <p className="body">السلسلة لها خط زمني ضخم وتاريخ عميق. اختر النهج اللي يناسبك.</p>

            <div className="quiz-radio-group">
              {STORY_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`quiz-radio-card${state.storyInterest === opt.value ? " is-selected" : ""}`}
                  onClick={() => pickStory(opt.value)}
                >
                  <strong>{opt.label}</strong>
                  <span>{opt.desc}</span>
                </button>
              ))}
            </div>

            <div className="quiz-nav">
              <button className="cta" type="button" onClick={goPrev}>
                → السابق
              </button>
              <button className="cta" type="button" onClick={goNext} disabled={!canNext}>
                التالي ←
              </button>
            </div>
          </motion.article>
        )}

        {step === 2 && (
          <motion.article
            key="q3"
            className="panel quiz-step"
            style={{ width: "min(820px, 100%)" }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
          >
            <p className="kicker">السؤال 3 من {totalSteps - 1}</p>
            <h2 className="title">وش الأجهزة المتوفرة عندك؟</h2>
            <p className="body">اختر كل الأجهزة اللي تقدر تلعب عليها حالياً.</p>

            <div className="quiz-pill-group">
              {PLATFORM_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  className={`quiz-pill${state.platforms.includes(opt.value) ? " is-active" : ""}`}
                  onClick={() => togglePlatform(opt.value)}
                >
                  <span className="quiz-pill-icon">{opt.icon}</span>
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="quiz-nav">
              <button className="cta" type="button" onClick={goPrev}>
                → السابق
              </button>
              <button
                className="cta"
                type="button"
                onClick={advanceFromQ3}
                disabled={!canNext}
              >
                التالي ←
              </button>
            </div>
          </motion.article>
        )}

        {step === 3 && (
          <motion.article
            key="result"
            className="panel quiz-step"
            style={{ width: "min(820px, 100%)" }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={springTransition}
          >
            {resultGame ? (
              <>
                <p className="kicker">🎯 ترشيحك</p>
                <h2 className="title">لعبتك القادمة</h2>

                <div className="quiz-result-card">
                  <img
                    className="quiz-result-cover"
                    src={gameAssetPath(resultGame.slug, "cover", undefined, resultGame.assetExt)}
                    alt={resultGame.displayTitle}
                  />
                  <div className="quiz-result-info">
                    <h3 className="quiz-result-title">{resultGame.displayTitle}</h3>
                    <p className="quiz-result-subtitle">{resultGame.subtitleAr}</p>
                    <p className="quiz-result-synopsis">{resultGame.synopsisAr}</p>
                    <Link className="cta" href={`/games/${resultGame.slug}`}>
                      شوف تفاصيل اللعبة
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="quiz-empty-state">
                <span className="quiz-empty-emoji">🏆</span>
                <h2 className="title">يا سلام! لعبتها كلها!</h2>
                <p className="body">
                  ما قدرت ألقى لك لعبة جديدة بناءً على اختياراتك. جرّب تعدّل
                  الأجهزة أو الألعاب اللي لعبتها.
                </p>
              </div>
            )}

            <div className="quiz-nav">
              <button className="cta" type="button" onClick={restart}>
                أعد الاختبار من البداية
              </button>
              <Link className="cta" href="/">
                الصفحة الرئيسية
              </Link>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  );
}
