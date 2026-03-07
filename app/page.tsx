"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import GradualBlur from "@/components/GradualBlur";
import { SpoilerText } from "@/components/SpoilerText";
import { gameAssetPath } from "@/lib/gameAssets";
import { galleryImages } from "@/lib/gallery";
import { getGame } from "@/lib/games";

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.21, 1, 0.23, 1] as const }
  }
};

const fallbackGallery = [
  "/images/zelda-sky.svg",
  "/images/zelda-forest.svg",
  "/images/zelda-castle.svg",
  "/images/zelda-shrine.svg",
  "/images/zelda-desert.svg",
  "/images/zelda-sea.svg"
];

export default function LandingPage() {
  const gallery = galleryImages.length ? galleryImages : fallbackGallery;
  const featuredGame = getGame("skyward-sword");
  const featuredGameImages = featuredGame
    ? [
        gameAssetPath(featuredGame.slug, "cover", undefined, featuredGame.assetExt),
        gameAssetPath(featuredGame.slug, "hero", undefined, featuredGame.assetExt),
        gameAssetPath(featuredGame.slug, "shot", 1, featuredGame.shotExt ?? featuredGame.assetExt)
      ]
    : gallery;
  const { scrollYProgress } = useScroll();
  const backgroundScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1.05, 1.12]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dimOpacity = useTransform(scrollYProgress, [0, 0.14, 0.35], [0.05, 0.35, 0.7]);

  return (
    <main className="landing-shell">
      <span className="safe-tag">وضع آمن مفعّل | منع الحرق افتراضياً</span>
      <motion.div className="hero-layer" style={{ scale: backgroundScale, backgroundPositionY: backgroundY }} />
      <motion.div className="dim-layer" style={{ opacity: dimOpacity }} />
      <div className="grain-layer" />
      <GradualBlur preset="page-footer" animated />
      <nav className="main-nav">
        <Link className="main-nav-item" href="/world">
          أكثر عن عالم زيلدا
        </Link>
        <Link className="main-nav-item" href="/characters">
          شخصيات عالم زيلدا
        </Link>
        <Link className="main-nav-item" href="/games">
          مكتبة ألعاب زيلدا
        </Link>
        <Link className="main-nav-item" href="/guide/emulation/pc">
          محاكيات البيسي
        </Link>
        <Link className="main-nav-item" href="/guide/emulation/mobile">
          محاكيات الجوال
        </Link>
      </nav>

      <section className="section hero-section">
        <div className="hero-ambient" />
        <motion.div
          className="hero-content"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.55 }}
        >
          <h1 className="hero-logo">The Legend of Zelda</h1>
          <p className="hero-sub">
            رحلتك إلى هايرول تبدأ من هنا. مرّر للأسفل لتكتشف أعظم ملحمة في تاريخ الألعاب.. بأمان تام وبدون أي حرق.
          </p>
          <div className="hero-orbits" aria-hidden>
            <span className="orbit-ring" />
            <span className="orbit-ring" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
            <span className="orbit-particle" />
          </div>
        </motion.div>
      </section>

      <section className="section story-section">
        <motion.article
          className="panel panel-scroll-enabled"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.42 }}
        >
          <p className="kicker">القسم 01</p>
          <h2 className="title">وش هي سلسلة أسطورة زيلدا؟</h2>
          <p className="body">
            ليست مجرد لعبة، بل تاريخ يمتد لآلاف السنين. صراع أزلي بين النور والظلام، وشجاعة تتوارثها الأجيال.
            تتمحور الأسطورة حول قوى المثلث الذهبي "الترايفورس" وحامليه الثلاثة:
            <Link className="char-inline" href="/characters/link">
              لينك
            </Link>
            <Link className="char-inline" href="/characters/zelda">
              زيلدا
            </Link>
            <Link className="char-inline" href="/characters/ganondorf">
              جانوندورف
            </Link>
            كل حقبة زمنية تروي فصلاً جديداً من الملحمة، لكن الجوهر يبقى واحداً: الشجاعة في مواجهة اليأس.
          </p>
          <SpoilerText>
            تلميح قصصي مخفي: يُقال أن الزمن في هايرول ليس خطاً مستقيماً، بل يتفرع لثلاثة مسارات مختلفة بعد معركة "أوكارينا الزمن".
          </SpoilerText>
          <span className="panel-scroll-arrow" aria-hidden>
            ↓
          </span>
        </motion.article>
        <motion.aside
          className="floating-strip"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {gallery.slice(0, 3).map((src) => (
            <img key={src} src={src} alt="مشهد فني من زيلدا" />
          ))}
        </motion.aside>
      </section>

      <section className="section">
        <motion.article
          className="panel panel-scroll-enabled"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.42 }}
        >
          <p className="kicker">القسم 02</p>
          <h2 className="title">هل لازم يكون عندي جهاز نينتندو عشان ألعب السلسلة؟</h2>
          <p className="body">
            اكيد لا!، فالحقيقة كثير من محبي السلسله ماقد شروا نينتيندو اصلا (ومنهم انا ههه!)، طيب كيف نلعبها؟
            باستخدام المحاكيات، كل العاب السلسله تشتغل على الكمبيوتر و كثير منها يشتغل ع الجوال متخيل؟ وطبعا
            مارح اقولك الكلام هذا وامشي وبس، انت بس روح مكتبه الالعاب واختار اللعبه الي تبيها و بعدها باخذك
            بيدك خطوه ب خطوه لين تبدا تلعب، بس توعدني تكمل اللعبه للنهايه ها؟ اتفقنا.
          </p>
          <Link className="cta" href="/games">
            مكتبة الألعاب
          </Link>
          <span className="panel-scroll-arrow" aria-hidden>
            ↓
          </span>
        </motion.article>
        <motion.div
          className="media-grid featured-game-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.34 }}
        >
          {featuredGameImages.map((src) => (
            <img key={src} src={src} alt="لقطة من لعبة Skyward Sword" />
          ))}
        </motion.div>
      </section>

      <section className="section final-section">
        <motion.article
          className="panel panel-centered"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.42 }}
        >
          <p className="kicker">القسم 03</p>
          <h2 className="title">طيب أقنعتني بالسلسلة.. بس ألعابها كثيرة، بأيهم أبدأ؟</h2>
          <p className="body">
            أكثر من 20 حقبة زمنية، وكل جزء يقدم تجربة فريدة. هل تبحث عن الحرية المطلقة؟ أم قصة كلاسيكية
            خطية؟ دعنا نساعدك في اختيار بوابتك الأولى لهذا العالم.
          </p>
          <Link className="cta massive" href="/quiz">
            اختبر مصيرك: أي بطل أنت؟
          </Link>
          <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="cta" href="/games/skyward-sword">
              ابدأ البناء: Skyward Sword
            </Link>
            <Link className="cta" href="/games">
              تصفح مكتبة الألعاب
            </Link>
          </div>
        </motion.article>
      </section>
    </main>
  );
}
