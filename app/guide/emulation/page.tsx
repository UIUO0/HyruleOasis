import Link from "next/link";

export default function EmulationGuidePage() {
  return (
    <main className="section">
      <article className="panel" style={{ width: "min(860px, 100%)" }}>
        <p className="kicker">الدليل الشامل</p>
        <h1 className="title">تشغيل ألعاب زيلدا على PC والجوال</h1>
        <p className="body">
          هذه صفحة تمهيدية للدليل. في المرحلة الحالية تم تجهيز المسار والتصميم الأساسي، وسيتم إضافة خطوات
          الإعداد التفصيلية تدريجياً.
        </p>
        <Link className="cta" href="/" style={{ marginTop: "1.6rem", display: "inline-flex" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </article>
    </main>
  );
}
