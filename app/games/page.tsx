"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import { gameAssetPath } from "@/lib/gameAssets";
import { getAllGames } from "@/lib/games";
import type { Game } from "@/lib/games";

// Image is rendered at 130% of container height (30% extra = scroll budget).
// PARALLAX_SPEED controls how much of that budget we use:
//   1.0 → image travels its full extra height (fast exact sync at bottom)
//   0.35 → gentle slow drift (image moves at 35% of the available budget)
//
// Travel % = -((extra / totalImgHeight) * 100) * PARALLAX_SPEED
//           = -((0.3 / 1.3) * 100) * 0.35  ≈  -8.08%
const IMG_FACTOR = 1.3;
const PARALLAX_SPEED = 0.35;
const MAX_TRAVEL = -((IMG_FACTOR - 1) / IMG_FACTOR) * 100; // ≈ -23.08%
const TRAVEL = MAX_TRAVEL * PARALLAX_SPEED;             // ≈  -8.08%

type SortKey = "oldest" | "newest" | "popular" | "story";

function sortGames(games: Game[], key: SortKey): Game[] {
  switch (key) {
    case "oldest":
      return [...games].sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    case "newest":
      return [...games].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    case "popular":
      return [...games].sort((a, b) => a.popularity - b.popularity);
    case "story":
      return [...games].sort((a, b) => a.storyOrder - b.storyOrder);
    default:
      return games;
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.35, ease: [0.21, 1, 0.23, 1] as const }
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.18 } }
};

export default function GamesIndexPage() {
  const shellRef = useRef<HTMLElement | null>(null);
  const allGames = getAllGames();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("oldest");

  const filteredList = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let result = allGames;
    if (q) {
      result = result.filter(
        (g) =>
          g.displayTitle.toLowerCase().includes(q) ||
          g.subtitleAr.includes(q) ||
          g.slug.includes(q)
      );
    }
    return sortGames(result, sortBy);
  }, [searchQuery, sortBy, allGames]);

  const { scrollYProgress } = useScroll({
    target: shellRef,
    offset: ["start start", "end end"],
  });

  // Image slides UP (negative Y) as user scrolls DOWN — slow, gentle drift
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", `${TRAVEL}%`]);

  return (
    <main className="section games-library-shell" ref={shellRef}>
      <div className="games-library-bg" aria-hidden>
        <motion.img
          className="games-library-bg-image"
          src="/images/games-library-bg.webp"
          alt=""
          style={{ y: bgY }}
        />
      </div>
      <div className="games-library-dim" aria-hidden />
      <article className="panel" style={{ width: "min(980px, 100%)" }}>
        <p className="kicker">المرجع الشامل</p>
        <h1 className="title">مكتبة ألعاب زيلدا</h1>
        <p className="body">
          قائمة متكاملة لإصدارات السلسلة عبر مختلف الأجهزة. اختار لعبتك وبعلمك كل شيء تحتاجه من الصفر لين تبدأ تلعبها.
        </p>

        <div className="games-toolbar">
          <input
            id="games-search"
            className="games-search-input"
            type="text"
            placeholder="🔍 ابحث عن لعبة..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            id="games-sort"
            className="games-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
          >
            <option value="oldest">الأقدم</option>
            <option value="newest">الأحدث</option>
            <option value="popular">الأشهر</option>
            <option value="story">الترتيب الزمني للقصة</option>
          </select>
        </div>

        <div className="games-grid">
          <AnimatePresence mode="popLayout">
            {filteredList.map((game, i) => (
              <motion.div
                key={game.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <Link className="game-card" href={`/games/${game.slug}`}>
                  <img src={gameAssetPath(game.slug, "cover", undefined, game.assetExt)} alt={game.displayTitle} />
                  <div className="game-card-body">
                    <p className="game-card-title">{game.displayTitle}</p>
                    <p className="game-card-sub">{game.subtitleAr}</p>
                    <p className="game-card-sub">{game.releaseDate}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredList.length === 0 && (
          <div className="games-no-results">
            <p>🔎 ما لقينا شي بهذا الاسم.. جرب تبحث باسم ثاني!</p>
          </div>
        )}

        <Link className="cta" href="/" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
