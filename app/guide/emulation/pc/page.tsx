import Link from "next/link";

export default function EmulationPcPage() {
  return (
    <main className="section emu-page">
      <article className="panel emu-hero-panel">
        <p className="kicker">نسخة PC</p>
        <h1 className="title">دليلك الشامل: كيف تشغل أي لعبة زيلدا على الـ PC في 5 دقائق؟</h1>
        <p className="body">
          جهز كوب قهوتك، وركز معي. الموضوع أسهل مما تتخيل. اعتبر المحاكي "مشغل فيديو"، ولعبتك هي "ملف الفيديو".
          كل اللي بنسويه هو إننا نثبت المشغل، ونعطيه بعض الملفات الأساسية ليشتغل صح.. وبس!
        </p>
        <p className="body">اختر العصر الذي تريد لعبه، واتبع الخطوات:</p>

        <div className="emu-note" style={{ marginTop: "1.5rem", padding: "1rem", backgroundColor: "rgba(224, 184, 79, 0.1)", borderRadius: "8px", border: "1px solid rgba(224, 184, 79, 0.3)" }}>
          <p className="body" style={{ margin: 0, marginBottom: "0.8rem" }}>اختار المحاكي حسب الي تدعمه لعبتك، لسى ما اخترت لعبتك؟ روح هنا</p>
          <Link className="cta emu-btn emu-btn-primary" href="/games" style={{ display: "inline-block" }}>مكتبة الألعاب</Link>
        </div>
      </article>

      <section className="emu-era-grid">
        <article className="panel emu-era-panel">
          <p className="kicker">01</p>
          <h2 className="title">عصر السويتش (أحدث الألعاب)</h2>
          <p className="body">
            المحاكي المعتمد والأفضل: <strong>Ryujinx</strong> (خفيف جداً ويدعم الألعاب الحديثة فور نزولها). أشهر
            ألعابه: <strong>Tears of the Kingdom</strong>، <strong>Echoes of Wisdom</strong>.
          </p>
          <p className="kicker">الملفات المطلوبة</p>
          <div className="emu-actions">
            <a className="cta emu-btn" href="https://ryujinx.app/download" target="_blank" rel="noreferrer">
              تحميل محاكي Ryujinx
            </a>
            <a className="cta emu-btn" href="https://prodkeys.net/ryujinx-prod-keys-n28/" target="_blank" rel="noreferrer">
              تحميل ملفات المفاتيح Prod Keys
            </a>
            <a className="cta emu-btn" href="https://prodkeys.net/ryujinx-firmware-v3/" target="_blank" rel="noreferrer">
              تحميل نظام التشغيل Firmware
            </a>
          </div>
          <ol className="emu-steps">
            <li>التثبيت: فك الضغط عن ملف محاكي Ryujinx وافتحه.</li>
            <li>مهم جداً: لازم تحمل نفس نسخة الـ Firmware ونفس نسخة الـ Prod Keys عشان يشتغل المحاكي بدون مشاكل.</li>
            <li>
              إضافة المفاتيح (Keys): من الشريط العلوي اضغط على File ثم Open Ryujinx Folder. افتح مجلد system،
              وانسخ ملف الـ prod.keys الذي قمت بتحميله وألصقه هنا.
            </li>
            <li>
              تثبيت النظام (Firmware): من الشريط العلوي اضغط Tools ثم Install Firmware ثم Install a firmware from
              XCI or ZIP. اختر ملف الـ Firmware المضغوط الذي حملته، واضغط موافق (Yes).
            </li>
            <li>
              إضافة الألعاب: اضغط على Options ثم Settings. في قسم General تحت خانة Game Directories، اضغط Add
              واختر المجلد الذي وضعت فيه ألعابك. ستظهر ألعابك في القائمة الرئيسية.. استمتع!
            </li>
          </ol>
        </article>

        <article className="panel emu-era-panel">
          <p className="kicker">02</p>
          <h2 className="title">التحفة الفنية: Breath of the Wild</h2>
          <p className="body">
            المحاكي المعتمد والأفضل: <strong>Cemu</strong> (مخصص لجهاز Wii U، وهو الخيار الأسطوري والأخف لتشغيل
            هذا الجزء تحديداً).
          </p>
          <p className="kicker">الملفات المطلوبة</p>
          <div className="emu-actions">
            <a className="cta emu-btn" href="https://github.com/cemu-project/Cemu/releases/tag/v2.6" target="_blank" rel="noreferrer">
              تحميل محاكي Cemu
            </a>
          </div>
          <p className="body emu-note">
            تنبيه مهم: اختر النسخة المخصصة لنظامك. مثال: إذا جهازك ويندوز حمّل
            <strong> cemu-2.6-windows-x64.zip</strong>.
          </p>
          <ol className="emu-steps">
            <li>التثبيت: فك الضغط عن البرنامج في أي مجلد وافتحه. (لا يحتاج تثبيت معقد).</li>
            <li>
              إضافة اللعبة: عند فتحه لأول مرة ستظهر لك نافذة الإعدادات. عند خانة Game Paths اضغط Browse واختر
              المجلد الذي يحتوي على لعبتك.
            </li>
            <li>
              السحر الحقيقي (رفع الجرافيكس لـ 4K و 60 إطار): من الشاشة الرئيسية، اضغط Options ثم Graphic Packs.
              في أسفل النافذة اضغط Download latest community graphic packs. ثم افتح قائمة لعبتك وضع "علامة صح" على
              إضافات (Enhancements) و (Graphics) لضبط الدقة والإطارات كما يناسب جهازك.
            </li>
          </ol>
        </article>

        <article className="panel emu-era-panel">
          <p className="kicker">03</p>
          <h2 className="title">عصر الكلاسيكيات الثلاثية (GameCube &amp; Wii)</h2>
          <p className="body">
            المحاكي المعتمد والأفضل: <strong>Dolphin</strong> (الأسطورة الذي لا ينافسه أحد). أشهر ألعابه: النسخ
            الأصلية من <strong>Wind Waker</strong>، <strong>Twilight Princess</strong>، و
            <strong>Skyward Sword</strong>.
          </p>
          <p className="kicker">الملفات المطلوبة</p>
          <div className="emu-actions">
            <a className="cta emu-btn" href="https://dolphin-emu.org/download/" target="_blank" rel="noreferrer">
              تحميل محاكي Dolphin
            </a>
          </div>
          <p className="body emu-note">
            تنبيه مهم: اختر النسخة المناسبة لجهازك ونظامك (مثلاً Windows x64 لو جهازك ويندوز 64 بت).
          </p>
          <ol className="emu-steps">
            <li>التثبيت: فك الضغط وافتح البرنامج Dolphin.exe.</li>
            <li>
              إضافة الألعاب: اضغط مرتين على المساحة البيضاء الكبيرة في منتصف البرنامج (أو اضغط زر Config ثم Paths
              ثم Add). حدد المجلد الذي توجد فيه ألعابك.
            </li>
            <li>
              ضبط التحكم: اضغط على زر Controllers في الأعلى. للعب أجزاء الـ GameCube تأكد أن المنفذ الأول مضبوط
              على Standard Controller واضغط Configure لبرمجة أزرار يد التحكم الخاصة بك.
            </li>
          </ol>
        </article>

        <article className="panel emu-era-panel">
          <p className="kicker">04</p>
          <h2 className="title">عصر الشاشتين المحمول (Nintendo 3DS)</h2>
          <p className="body">
            المحاكي المعتمد والأفضل: <strong>Lime3DS</strong> (أفضل وأسرع محاكي حديث لألعاب الـ 3DS). أشهر ألعابه:
            <strong>A Link Between Worlds</strong>، والنسخ المحسنة من <strong>Ocarina of Time</strong> و
            <strong>Majora&apos;s Mask</strong>.
          </p>
          <p className="kicker">الملفات المطلوبة</p>
          <div className="emu-actions">
            <a className="cta emu-btn" href="https://lime3ds.net/download/" target="_blank" rel="noreferrer">
              تحميل محاكي Lime3DS
            </a>
          </div>
          <p className="body emu-note">تنبيه مهم: اختر النسخة المناسبة لجهازك ونظامك (Windows / Linux / MacOS).</p>
          <ol className="emu-steps">
            <li>التثبيت: فك الضغط وافتح المحاكي.</li>
            <li>إضافة الألعاب: اضغط مرتين في منتصف الشاشة (أو على علامة المجلد)، واختر مجلد ألعابك.</li>
            <li>
              نصيحة ذهبية: تأكد دائماً أن الألعاب التي تحملها مكتوب بجانبها كلمة (Decrypted) لتتعرف عليها المنصة
              فوراً.
            </li>
          </ol>
        </article>

        <article className="panel emu-era-panel">
          <p className="kicker">05</p>
          <h2 className="title">آلة الزمن للأجزاء القديمة جداً (1D &amp; 2D)</h2>
          <p className="body">
            المحاكي المعتمد والأفضل: <strong>RetroArch</strong> (واجهة واحدة تشغل كل الأجهزة القديمة مثل NES,
            SNES, N64, GameBoy). أشهر ألعابه: <strong>A Link to the Past</strong>، <strong>The Minish Cap</strong>.
          </p>
          <p className="kicker">الملفات المطلوبة</p>
          <div className="emu-actions">
            <a className="cta emu-btn" href="https://www.retroarch.com/?page=platforms" target="_blank" rel="noreferrer">
              تحميل برنامج RetroArch
            </a>
          </div>
          <p className="body emu-note">تنبيه: RetroArch متوفر أيضاً على Steam لو كنت تستخدم ويندوز.</p>
          <ol className="emu-steps">
            <li>التثبيت: حمل البرنامج وثبته بشكل طبيعي.</li>
            <li>تحميل النواة (Core): من القائمة الرئيسية اذهب إلى Online Updater ثم Core Downloader.</li>
            <li>لألعاب العائلة (NES): حمل Nintendo - NES / Famicom (FCEUmm).</li>
            <li>لألعاب السوبر نينتندو: حمل Nintendo - SNES / SFC (Snes9x).</li>
            <li>لألعاب النينتندو 64: حمل Nintendo - Nintendo 64 (Mupen64Plus-Next).</li>
            <li>
              التشغيل: ارجع للقائمة الرئيسية، اختر Load Content، اختر ملف اللعبة، ثم اختر النواة التي حملناها
              للتو، واستمتع بالعودة للزمن الجميل!
            </li>
          </ol>
        </article>
      </section>

      <article className="panel emu-footer-panel">
        <div className="emu-footer-actions">
          <Link className="cta" href="/guide/emulation/mobile">
            نسخة الجوال
          </Link>
          <Link className="cta" href="/">
            الصفحة الرئيسية
          </Link>
        </div>
      </article>
    </main>
  );
}
