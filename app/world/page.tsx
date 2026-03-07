import Link from "next/link";

export default function WorldPage() {
  return (
    <main className="section">
      <article className="panel" style={{ width: "min(900px, 100%)" }}>
        <p className="kicker">عالم هايرول</p>
        <h1 className="title">أكثر عن عالم زيلدا</h1>
        <p className="body">
          هايرول ليست خريطة فقط، بل حضارة حية تتشكل عبر العصور. من السهول والجبال إلى المزارات والمعابد، كل
          مكان يحمل قصة، وكل أثر يربط الماضي بالحاضر.
        </p>
        <Link className="cta" href="/" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
