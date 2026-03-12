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

const MAINLINE_SLUGS = new Set([
  "the-legend-of-zelda",
  "zelda-ii-the-adventure-of-link",
  "a-link-to-the-past",
  "links-awakening",
  "ocarina-of-time",
  "majoras-mask",
  "oracle-of-ages",
  "oracle-of-seasons",
  "four-swords",
  "wind-waker",
  "four-swords-adventures",
  "the-minish-cap",
  "twilight-princess",
  "phantom-hourglass",
  "spirit-tracks",
  "skyward-sword",
  "a-link-between-worlds",
  "tri-force-heroes",
  "breath-of-the-wild",
  "links-awakening-hd",
  "tears-of-the-kingdom",
  "echoes-of-wisdom",
]);

const SPINOFFS_SLUGS = new Set([
  "links-crossbow-training",
  "ocarina-of-time-master-quest",
  "hyrule-warriors",
  "picross-twilight-princess",
  "cadence-of-hyrule",
  "age-of-calamity",
]);

type TabKey = "mainline" | "spinoffs" | "archives" | "all";

const TABS: { id: TabKey; label: string; desc: string }[] = [
  { id: "mainline", label: "الأسطورة الأساسية", desc: "الأجزاء الرئيسية المكونة للقصة" },
  { id: "spinoffs", label: "عوالم فرعية", desc: "تجارب جانبية ونسخ معدلة" },
  { id: "archives", label: "الأرشيف", desc: "الإصدارات الكلاسيكية والنوادر" },
  { id: "all", label: "الكل", desc: "مكتبة واحة هايرول بالكامل" },
];

export default function GamesIndexPage() {
  const shellRef = useRef<HTMLElement | null>(null);
  const allGames = getAllGames();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("newest");
  const [activeTab, setActiveTab] = useState<TabKey>("mainline");

  const handleTabChange = (tabId: TabKey) => {
    setActiveTab(tabId);
    setSearchQuery(""); // Clear search on tab switch
  };

  const filteredList = useMemo(() => {
    // 1. Filter by Tab Category
    let result = allGames.filter((g) => {
      if (activeTab === "all") return true;
      if (activeTab === "mainline") return MAINLINE_SLUGS.has(g.slug);
      if (activeTab === "spinoffs") return SPINOFFS_SLUGS.has(g.slug);
      // For "archives", it's everything that is NOT in mainline or spinoffs
      if (activeTab === "archives") return !MAINLINE_SLUGS.has(g.slug) && !SPINOFFS_SLUGS.has(g.slug);
      return true;
    });

    // 2. Filter by Search Query
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(
        (g) =>
          g.displayTitle.toLowerCase().includes(q) ||
          g.subtitleAr.includes(q) ||
          g.slug.includes(q)
      );
    }
    
    // 3. Apply Sorting
    return sortGames(result, sortBy);
  }, [searchQuery, sortBy, activeTab, allGames]);

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
      
      <style dangerouslySetInnerHTML={{__html: `
        .games-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          background: rgba(20, 25, 30, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 0.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .games-tab-btn {
          flex: 1;
          min-width: 120px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.9rem 1.2rem;
          font-family: inherit;
          font-size: 1.35rem;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: color 0.3s ease;
          z-index: 1;
        }
        .games-tab-btn:hover {
          color: #fff;
        }
        .games-tab-btn[data-active="true"] {
          color: #111;
          font-weight: 700;
        }
        .games-tab-desc {
          font-size: 0.9rem;
          font-weight: 400;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .games-tab-btn[data-active="true"] .games-tab-desc {
          opacity: 0.9;
        }
        .games-tab-indicator {
          position: absolute;
          inset: 0;
          background: #e3c878;
          border-radius: 8px;
          z-index: -1;
          box-shadow: 0 4px 12px rgba(227, 200, 120, 0.3);
        }
        @media (max-width: 600px) {
          .games-tab-btn {
            min-width: calc(50% - 0.25rem);
            padding: 0.7rem;
            font-size: 1.05rem;
          }
          .games-tab-desc {
            font-size: 0.75rem;
          }
        }
      `}} />

      <article className="panel" style={{ width: "min(980px, 100%)" }}>
        <p className="kicker">المرجع الشامل</p>
        <h1 className="title">مكتبة ألعاب زيلدا</h1>
        <p className="body" style={{ marginBottom: "2rem" }}>
          قائمة متكاملة لإصدارات السلسلة عبر مختلف الأجهزة. اختار لعبتك وبعلمك كل شيء تحتاجه من الصفر لين تبدأ تلعبها.
        </p>

        {/* Tabs UI */}
        <div className="games-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className="games-tab-btn"
              data-active={activeTab === tab.id}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="games-tab-indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span>{tab.label}</span>
              <span className="games-tab-desc">{tab.desc}</span>
            </button>
          ))}
        </div>

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
            <p>🔎 ما لقيت شي بهذا الاسم.. جرب تبحث باسم ثاني!</p>
          </div>
        )}

        <Link className="cta" href="/" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
