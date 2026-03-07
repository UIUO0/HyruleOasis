import Link from "next/link";
import { gameAssetPath } from "@/lib/gameAssets";
import { games } from "@/lib/games";

export default function GamesIndexPage() {
  const list = Object.values(games);

  return (
    <main className="section">
      <article className="panel" style={{ width: "min(980px, 100%)" }}>
        <p className="kicker">سجلات الأسطورة</p>
        <h1 className="title">تاريخ مملكة هايرول</h1>
        <p className="body">
          كل لعبة تمثل حقبة زمنية مختلفة في الملحمة. استكشف الفصول التاريخية مرتبة حسب الإصدار، وابدأ رحلتك
          عبر الزمن.
        </p>

        <div className="games-grid">
          {list.map((game) => (
            <Link key={game.slug} className="game-card" href={`/games/${game.slug}`}>
              <img src={gameAssetPath(game.slug, "cover", undefined, game.assetExt)} alt={game.displayTitle} />
              <div className="game-card-body">
                <p className="game-card-title">{game.displayTitle}</p>
                <p className="game-card-sub">{game.subtitleAr}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link className="cta" href="/" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
