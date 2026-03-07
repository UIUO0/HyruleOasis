import Link from "next/link";

export default function EmulationPcPage() {
  return (
    <main className="section">
      <article className="panel" style={{ width: "min(900px, 100%)" }}>
        <p className="kicker">نسخة PC</p>
        <h1 className="title">محاكي نينتيندو للبيسي</h1>
        <p className="body">
          هذه البوابة مخصصة لتجهيز تجربة زيلدا على الكمبيوتر. ستجد فيها لاحقاً الأدوات الموصى بها، إعدادات
          الأداء، وأفضل الضبطيات للوصول لصورة مستقرة وسلسة.
        </p>
        <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <Link className="cta" href="/guide/emulation">
            الدليل العام
          </Link>
          <Link className="cta" href="/">
            الصفحة الرئيسية
          </Link>
        </div>
      </article>
    </main>
  );
}
