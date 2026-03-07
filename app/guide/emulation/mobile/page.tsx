import Link from "next/link";

export default function EmulationMobilePage() {
  return (
    <main className="section">
      <article className="panel" style={{ width: "min(900px, 100%)" }}>
        <p className="kicker">نسخة الجوال</p>
        <h1 className="title">محاكي نينتيندو للجوال</h1>
        <p className="body">
          هذه البوابة مخصصة لتجربة زيلدا على الهواتف. ستُضاف لها لاحقاً إعدادات كل جهاز، وضبط الأداء والحرارة،
          وطريقة الوصول لتجربة مستقرة بدون تقطيع.
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
