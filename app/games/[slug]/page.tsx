import Link from "next/link";
import { PlatformPickerButton } from "@/components/PlatformPickerButton";
import { NativePcPortBanner } from "@/components/NativePcPortBanner";
import { gameAssetPath } from "@/lib/gameAssets";
import { getGame } from "@/lib/games";

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    return (
      <main className="section">
        <article className="panel" style={{ width: "min(760px, 100%)" }}>
          <p className="kicker">الألعاب</p>
          <h1 className="title">اللعبة غير موجودة</h1>
          <p className="body">تأكد من الرابط أو ارجع لقائمة الألعاب.</p>
          <Link className="cta" href="/games" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
            عرض قائمة الألعاب
          </Link>
        </article>
      </main>
    );
  }

  const cover = gameAssetPath(game.slug, "cover", undefined, game.assetExt);
  const hero = gameAssetPath(game.slug, "hero", undefined, game.assetExt);
  const shot1 = gameAssetPath(game.slug, "shot", 1, game.shotExt ?? game.assetExt);

  return (
    <main className="landing-shell">
      <div className="game-hero">
        <div className="game-hero-media">
          <img className="game-hero-bg" src={hero} alt={game.displayTitle} />
          <div className="game-hero-overlay" />
        </div>

        <section className="section game-hero-section">
          <article className="panel game-hero-panel">
            <p className="kicker">سجلات الأسطورة</p>
            <h1 className="title">{game.displayTitle}</h1>
            <p className="body">{game.subtitleAr}</p>

            <div className="game-hero-row">
              <img className="game-cover" src={cover} alt={`غلاف ${game.displayTitle}`} />
              <div className="game-hero-copy">
                <p className="kicker" style={{ marginTop: 0 }}>وصف اللعبة بدون حرق</p>
                <p className="body" style={{ marginTop: 0 }}>
                  {game.synopsisAr}
                </p>
                <p className="kicker" style={{ marginTop: "1rem" }}>منصة اللعبة</p>
                <p className="body" style={{ marginTop: 0 }}>
                  {game.platformsAr.map((platform, index) => (
                    <span key={platform}>
                      {platform}
                      {index < game.platformsAr.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
                <div className="game-hero-actions">
                  <PlatformPickerButton />
                  {game.downloadUnavailable ? (
                    <span
                      className="cta"
                      style={{
                        display: "inline-flex",
                        opacity: 0.45,
                        cursor: "not-allowed",
                        userSelect: "none",
                        filter: "grayscale(1)",
                      }}
                      title="غير متوفر"
                    >
                      🔒 مو متوفر نسخة للمحاكيات للأسف، إذا عندك تواصل معي
                    </span>
                  ) : (
                    <a
                      className="cta"
                      href={game.downloadUrl ?? "#"}
                      style={{ display: "inline-flex" }}
                      target={["zelda-game-watch-1989", "zeldas-adventure"].includes(game.slug) ? "_blank" : "_self"}
                    >
                      {["zelda-game-watch-1989", "zeldas-adventure"].includes(game.slug) ? "العب الآن من المتصفح مباشرة" : "تحميل اللعبة"}
                    </a>
                  )}
                  <Link className="cta" href="/games" style={{ display: "inline-flex" }}>
                    رجوع لقائمة الألعاب
                  </Link>
                </div>
                {game.slug === "ocarina-of-time-3d" && <NativePcPortBanner />}
                {game.downloadNote && (
                  <p className="body" style={{ marginTop: "0.8rem", opacity: 0.75, fontStyle: "italic", fontSize: "0.92em" }}>
                    {game.downloadNote}
                  </p>
                )}
                <p className="body" style={{ marginTop: "1rem" }}>
                  بعد ما تثبتها بشكل قانوني، حطها في مجلد العابك الي ربطته مع المحاكي و بتظهرلك و استمتع.
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>

      <section className="section">
        <article className="panel" style={{ width: "min(980px, 100%)" }}>
          <p className="kicker">معرض الصور</p>
          <h2 className="title">مشاهد من قلب المغامرة</h2>
          <p className="body">لقطات تخلّد لحظات لا تُنسى من رحلة البطل.</p>
          <div className="media-grid" style={{ marginTop: "1.2rem" }}>
            {[cover, hero, shot1].map((src) => (
              <img key={src} src={src} alt="صورة من اللعبة" />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
