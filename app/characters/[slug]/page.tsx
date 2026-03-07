import Link from "next/link";
import { SpoilerText } from "@/components/SpoilerText";

const labels: Record<string, string> = {
  link: "لينك",
  zelda: "زيلدا",
  ganondorf: "جانوندورف"
};

export default async function CharacterPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = labels[slug] ?? "شخصية من عالم زيلدا";

  return (
    <main className="section">
      <article className="panel" style={{ width: "min(760px, 100%)" }}>
        <p className="kicker">ملف شخصية</p>
        <h1 className="title">{label}</h1>
        <p className="body">
          هذه الصفحة مصممة بوضع آمن. أي معلومة قصصية حساسة تبقى مخفية افتراضياً حتى يختار القارئ كشفها.
        </p>
        <SpoilerText>معلومة قصصية محجوبة. اضغط إذا رغبت بالكشف.</SpoilerText>
        <Link className="cta" href="/" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
          العودة للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
