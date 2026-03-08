"use client";

import Link from "next/link";
import { useState } from "react";

export default function EmulationMobilePage() {
  const [activeTab, setActiveTab] = useState<"ios" | "android">("ios");

  return (
    <main className="section emu-page">
      <article className="panel emu-hero-panel">
        <p className="kicker">نسخة الجوال</p>
        <h1 className="title">دليلك المتكامل لتشغيل زيلدا على الجوال</h1>
        <p className="body">اختر منصتك، وافتح البطاقة المناسبة، واتبع الخطوات بسرعة ووضوح.</p>
        <div className="emu-footer-actions" style={{ marginTop: "1rem" }}>
          <Link className="cta" href="/guide/emulation/pc">
            نسخة البيسي
          </Link>
          <Link className="cta" href="/">
            الصفحة الرئيسية
          </Link>
        </div>
      </article>

      <div className="mobile-emu-tabs" role="tablist" aria-label="اختيار منصة الجوال">
        <button
          type="button"
          className={`mobile-emu-tab ${activeTab === "ios" ? "is-active" : ""}`}
          onClick={() => setActiveTab("ios")}
        >
          iOS
        </button>
        <button
          type="button"
          className={`mobile-emu-tab ${activeTab === "android" ? "is-active" : ""}`}
          onClick={() => setActiveTab("android")}
        >
          Android
        </button>
      </div>

      <section className="mobile-emu-split">
        <article className={`panel mobile-emu-column android ${activeTab === "android" ? "is-active" : ""}`}>
          <p className="kicker">قسم الأندرويد (Android)</p>
          <h2 className="title">أصحاب الأندرويد - الحرية الكاملة!</h2>
          <p className="body">جهازك الأندرويد هو حرفياً "جهاز نينتندو متنقل". المحاكيات هنا قوية جداً وتدعم كل شيء.</p>

          <details className="mobile-emu-card">
            <summary>عصر السويتش (Sudachi Android)</summary>
            <p className="body">أشهر ألعابه: Tears of the Kingdom, Echoes of Wisdom.</p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل محاكي Sudachi بصيغة APK</button>
              <button type="button" className="cta emu-btn emu-btn-outline">تحميل ملفات المفاتيح Prod Keys</button>
              <button type="button" className="cta emu-btn emu-btn-outline">تحميل نظام التشغيل Firmware</button>
            </div>
            <ol className="emu-steps">
              <li>ثبت التطبيق وافتحه.</li>
              <li>اضغط على Install Firmware واختر ملف النظام المضغوط.</li>
              <li>اضغط على Install Keys واختر ملف الـ prod.keys.</li>
              <li>أخيراً، اضغط Add Games وحدد مجلد الألعاب في جوالك.</li>
            </ol>
          </details>

          <details className="mobile-emu-card">
            <summary>عصر الكلاسيكيات 3D (Dolphin Official)</summary>
            <p className="body">أشهر ألعابه: Wind Waker, Twilight Princess.</p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل محاكي Dolphin من Play Store</button>
            </div>
            <ol className="emu-steps">
              <li>حمل التطبيق وافتحه.</li>
              <li>اضغط على علامة (+) الكبيرة أسفل الشاشة.</li>
              <li>حدد المجلد الذي توجد فيه ألعاب الـ GameCube أو الـ Wii، وستضاف تلقائياً للمكتبة.</li>
            </ol>
          </details>

          <details className="mobile-emu-card">
            <summary>عصر الـ 3DS المحمول (Lime3DS)</summary>
            <p className="body">أشهر ألعابه: A Link Between Worlds.</p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل محاكي Lime3DS بصيغة APK</button>
            </div>
            <ol className="emu-steps">
              <li>ثبت التطبيق وافتحه.</li>
              <li>سيطلب منك تحديد مسار الألعاب (Select Games Directory).</li>
              <li>اختر المجلد (وتذكر: يجب أن تكون الألعاب بصيغة Decrypted).</li>
            </ol>
          </details>

          <details className="mobile-emu-card">
            <summary>آلة الزمن للأجزاء القديمة (Lemuroid)</summary>
            <p className="body">أشهر ألعابه: كل الأجزاء المؤسسة للسلسلة (NES, SNES, N64, GameBoy).</p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل Lemuroid من Play Store</button>
            </div>
            <ol className="emu-steps">
              <li>هذا أسهل تطبيق أندرويد! لا يحتاج "أنوية" ولا تعقيد.</li>
              <li>افتحه، سيطلب منك تحديد ROMs Directory.</li>
              <li>
                اختر المجلد الذي يحتوي على كل ألعابك القديمة، وسيقوم التطبيق بفحصها وترتيبها تلقائياً حسب الجهاز مع تحميل الأغلفة.
              </li>
            </ol>
          </details>
        </article>

        <article className={`panel mobile-emu-column ios ${activeTab === "ios" ? "is-active" : ""}`}>
          <p className="kicker">قسم الآيفون (iOS)</p>
          <h2 className="title">أصحاب التفاحة (iOS) - اللعب صار رسمي!</h2>
          <p className="body">
            نظام أبل انفتح أخيراً، وصار يمديك تلعب أغلب أجزاء زيلدا بدون "جيلبريك" وبشكل رسمي من المتجر.
          </p>

          <details className="mobile-emu-card">
            <summary>آلة الزمن (Delta)</summary>
            <p className="body">
              أشهر ألعابه: الأجزاء الكلاسيكية (Ocarina of Time, Minish Cap, A Link to the Past, Phantom Hourglass).
            </p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل Delta من App Store</button>
            </div>
            <ol className="emu-steps">
              <li>حمل التطبيق وافتحه.</li>
              <li>اضغط على علامة (+) في الزاوية العلوية.</li>
              <li>اختر Files وحدد مجلد ألعابك الذي حفظته في تطبيق "الملفات" بالآيفون.</li>
              <li>ستظهر ألعابك بأغلفتها الأنيقة، اضغط والعب فوراً!</li>
            </ol>
          </details>

          <details className="mobile-emu-card">
            <summary>عصر الـ 3DS المحمول (Folium)</summary>
            <p className="body">أشهر ألعابه: A Link Between Worlds والنسخ المحسنة للـ 64.</p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل Folium من App Store</button>
            </div>
            <ol className="emu-steps">
              <li>حمل التطبيق من المتجر (ملاحظة: يحتاج آيفون حديث بمعالج قوي).</li>
              <li>تأكد أن ألعابك بصيغة .3ds ومكتوب بجانبها (Decrypted).</li>
              <li>من داخل التطبيق، اضغط على زر الإضافة واختر اللعبة لتبدأ المغامرة.</li>
            </ol>
          </details>

          <details className="mobile-emu-card">
            <summary>عصر السويتش (Sudachi iOS)</summary>
            <p className="body">أشهر ألعابه: Breath of the Wild, Tears of the Kingdom.</p>
            <div className="emu-actions">
              <button type="button" className="cta emu-btn emu-btn-primary">تحميل Sudachi بصيغة IPA</button>
              <button type="button" className="cta emu-btn emu-btn-outline">تحميل ملفات المفاتيح Prod Keys</button>
            </div>
            <p className="kicker" style={{ marginTop: "0.7rem" }}>خطوات التشغيل (للمحترفين)</p>
            <ol className="emu-steps">
              <li>هذا التطبيق غير موجود بالمتجر، تحتاج تثبيته عبر متاجر بديلة مثل (AltStore أو Scarlet).</li>
              <li>
                بعد التثبيت، افتح التطبيق، سيطلب منك ملف prod.keys، اضغط عليه واختر الملف الذي حملته.
              </li>
              <li>
                اختر Add Game Folder وحدد مجلد ألعابك للبدء (ينصح بأجهزة آيفون 15 برو أو آيباد بمعالجات M).
              </li>
            </ol>
          </details>
        </article>
      </section>
    </main>
  );
}
