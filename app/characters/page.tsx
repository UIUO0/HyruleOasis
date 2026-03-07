import Link from "next/link";

const entries = [
  { slug: "link", name: "لينك" },
  { slug: "zelda", name: "زيلدا" },
  { slug: "ganondorf", name: "جانوندورف" }
];

export default function CharactersIndexPage() {
  return (
    <main className="section">
      <article className="panel" style={{ width: "min(920px, 100%)" }}>
        <p className="kicker">الأبطال والخصوم</p>
        <h1 className="title">شخصيات عالم زيلدا</h1>
        <p className="body">تعرّف على أعمدة الملحمة الثلاثة، وكيف يصنع كل منهم قدر هايرول في كل حقبة.</p>
        <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "1rem" }}>
          {entries.map((entry) => (
            <Link key={entry.slug} className="cta" href={`/characters/${entry.slug}`}>
              {entry.name}
            </Link>
          ))}
        </div>
      </article>
    </main>
  );
}
