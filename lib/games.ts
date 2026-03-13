export type Game = {
  slug: string;
  displayTitle: string;
  subtitleAr: string;
  synopsisAr: string;
  releaseDate: string;
  platformsAr: string[];
  downloadUrl?: string;
  downloadUnavailable?: boolean;
  downloadNote?: string;
  popularity: number;
  storyOrder: number;
  assetExt: "webp" | "png" | "jpg" | "jpeg" | "svg";
  shotExt?: "webp" | "png" | "jpg" | "jpeg" | "svg";
};

const gamesList: Game[] = [
  {
    slug: "the-legend-of-zelda",
    displayTitle: "The Legend of Zelda",
    subtitleAr: "بداية الملحمة التي وضعت أساس هايرول.",
    synopsisAr: "رحلة كلاسيكية لاستكشاف العالم، جمع الأدوات، وإنقاذ المملكة في واحدة من أهم بدايات تاريخ الألعاب.",
    releaseDate: "1986-02-21",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-2-29057/2",
    popularity: 14,
    storyOrder: 15,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "zelda-ii-the-adventure-of-link",
    displayTitle: "Zelda II: The Adventure of Link",
    subtitleAr: "تجربة مختلفة تمزج الأكشن الجانبي بعالم زيلدا.",
    synopsisAr: "جزء جريء بطابع قتالي مباشر وتقدم يعتمد على المهارة، مع لمسة مغامرة لا تزال أيقونية لعشاق السلسلة.",
    releaseDate: "1987-01-14",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/zelda-ii-the-adventure-of-link-29175/1",
    popularity: 20,
    storyOrder: 16,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "a-link-to-the-past",
    displayTitle: "The Legend of Zelda: A Link to the Past",
    subtitleAr: "النسخة التي ثبّتت هوية زيلدا الكلاسيكية.",
    synopsisAr: "مغامرة أسطورية بين عالمين، ألغاز معابد متقنة، وتوازن رائع بين الحرية والقصة.",
    releaseDate: "1991-11-21",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://www.romsgames.net/super-nintendo-rom-legend-of-zelda-the-a-link-to-the-past/",
    popularity: 6,
    storyOrder: 11,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "links-awakening",
    displayTitle: "The Legend of Zelda: Link's Awakening DX",
    subtitleAr: "حكاية جزيرة غامضة بنكهة زيلدا الصافية.",
    synopsisAr: "مغامرة كلاسيكية تبدأ بعاصفة بحرية تقذف بطلنا إلى جزيرة غامضة تُدعى 'كوهولينت'. للهروب من هذه الجزيرة والمضي في طريقك، يجب عليك استكشاف زنزانات (Dungeons) معقدة، حل ألغاز ذكية، والبحث عن آلات موسيقية أسطورية لإيقاظ كائن غامض. تجربة مليئة بالسحر والغموض بأسلوب زيلدا الكلاسيكي الأصيل.",
    releaseDate: "1998-12-12",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch أو mGBA على البيسي", "Lemuroid أو RetroArch على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/legend-of-zelda-the-links-awakening-dx-20412/7",
    popularity: 11,
    storyOrder: 14,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "ocarina-of-time",
    displayTitle: "The Legend of Zelda: Ocarina of Time",
    subtitleAr: "التحفة التي أعادت تعريف المغامرات ثلاثية الأبعاد.",
    synopsisAr: "رحلة زمنية ملحمية تجمع بين استكشاف هايرول، المعابد الأيقونية، والموسيقى التي لا تُنسى.",
    releaseDate: "1998-11-21",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Folium على الايفون"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-ocarina-of-time-9581/2",
    popularity: 3,
    storyOrder: 4,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "majoras-mask",
    displayTitle: "The Legend of Zelda: Majora's Mask 3D",
    subtitleAr: "سباق مع الزمن في أكثر أجزاء السلسلة غرابة وعمقاً.",
    synopsisAr: "تجربة نفسية مميزة تعتمد على دورة زمنية، ومهام جانبية غنية تجعل كل لحظة مؤثرة.",
    releaseDate: "2015-02-13",
    platformsAr: ["جهاز نينتيندو الرسمي", "Lime3DS على البيسي", "Lime3DS على الأندرويد"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-majoras-mask-3d-42754/5",
    popularity: 5,
    storyOrder: 5,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "oracle-of-seasons",
    displayTitle: "The Legend of Zelda: Oracle of Seasons",
    subtitleAr: "مغامرة تركّز على الأكشن والتحدي الذكي.",
    synopsisAr: "جزء بنظام مواسم متغير يفتح طرقاً جديدة ويكافئ الاستكشاف الدقيق لعالمه.",
    releaseDate: "2001-02-27",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/legend-of-zelda-the-oracle-of-seasons-20344/1",
    popularity: 15,
    storyOrder: 12,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "oracle-of-ages",
    displayTitle: "The Legend of Zelda: Oracle of Ages",
    subtitleAr: "مغامرة ألغاز وزمن بعمق كلاسيكي ساحر.",
    synopsisAr: "جزء يركز على الألغاز والتنقل الزمني، ويقدم تجربة مكملة فريدة لعشاق سلسلة الأوركل.",
    releaseDate: "2001-02-27",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/legend-of-zelda-the-oracle-of-ages-20365/1",
    popularity: 16,
    storyOrder: 13,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "four-swords",
    displayTitle: "The Legend of Zelda: Four Swords",
    subtitleAr: "تجربة تعاونية سريعة بروح زيلدا الكلاسيكية.",
    synopsisAr: "جزء متعدد اللاعبين يضيف أسلوب تعاون ومنافسة خفيف داخل مراحل قصيرة ممتعة.",
    releaseDate: "2002-12-02",
    platformsAr: ["جهاز نينتيندو الرسمي", "melonDS أو RetroArch على البيسي", "Lemuroid أو melonDS على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://archive.org/download/zelda-four-swords-anniversary-edition-rom-eur",
    downloadNote: "🏆 هذا الملف نادر جداً وما يلقاه أي أحد بسهولة — شرايكم فيني وأنا أجيبه لكم؟ 😂",
    popularity: 22,
    storyOrder: 3,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "wind-waker",
    displayTitle: "The Legend of Zelda: The Wind Waker HD",
    subtitleAr: "إبحار أسطوري بعالم فني خالد.",
    synopsisAr: "رحلة بحرية واسعة تجمع الاستكشاف والتقدم القصصي بسحر بصري مميز لا يتكرر.",
    releaseDate: "2013-09-20",
    platformsAr: ["جهاز نينتيندو الرسمي", "Cemu على البيسي"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-the-wind-waker-hd-2-39148/1",
    popularity: 7,
    storyOrder: 8,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "four-swords-adventures",
    displayTitle: "The Legend of Zelda: Four Swords Adventures",
    subtitleAr: "نسخة موسعة من متعة اللعب الجماعي.",
    synopsisAr: "مستويات تعاونية ممتعة مع تركيز أكبر على التنسيق بين اللاعبين وحل التحديات.",
    releaseDate: "2004-03-18",
    platformsAr: ["جهاز نينتيندو الرسمي", "Dolphin على البيسي", "Dolphin على الأندرويد"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-four-swords-adventures-27697/1",
    popularity: 19,
    storyOrder: 7,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "the-minish-cap",
    displayTitle: "The Legend of Zelda: The Minish Cap",
    subtitleAr: "مغامرة صغيرة بحجمها، عظيمة بتفاصيلها.",
    synopsisAr: "جزء مبدع بفكرة تغيير الحجم، يقدّم عالماً مليئاً بالأسرار والتفاصيل الذكية.",
    releaseDate: "2004-11-04",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-the-minish-cap-2656/1",
    popularity: 13,
    storyOrder: 2,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "twilight-princess",
    displayTitle: "The Legend of Zelda: Twilight Princess",
    subtitleAr: "حقبة مظلمة بطابع ملحمي جاد.",
    synopsisAr: "عالم أعمق ونبرة أكثر جدية، مع دنجنز قوية ومعارك زعماء من الأفضل في تاريخ السلسلة.",
    releaseDate: "2006-11-19",
    platformsAr: ["جهاز نينتيندو الرسمي", "Dolphin على البيسي", "Dolphin على الأندرويد"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-twilight-princess-27492/2",
    popularity: 4,
    storyOrder: 6,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "phantom-hourglass",
    displayTitle: "The Legend of Zelda: Phantom Hourglass",
    subtitleAr: "مغامرة بحرية محمولة بروح ويند ويكر.",
    synopsisAr: "تجربة سريعة ومرنة مع تصميم يناسب اللعب المحمول، وتقدم قصصي ممتع وخفيف.",
    releaseDate: "2007-06-23",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-phantom-hourglass-1857/2",
    popularity: 17,
    storyOrder: 9,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "spirit-tracks",
    displayTitle: "The Legend of Zelda: Spirit Tracks",
    subtitleAr: "رحلة جديدة على سكك هايرول.",
    synopsisAr: "جزء يقدم فكرة القطار والتنقل المرح مع ألغاز ممتعة وهوية قصصية خاصة به.",
    releaseDate: "2009-12-07",
    platformsAr: ["جهاز نينتيندو الرسمي", "RetroArch على البيسي", "Lemuroid على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-spirit-tracks-2037/2",
    popularity: 18,
    storyOrder: 10,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "skyward-sword",
    displayTitle: "The Legend of Zelda: Skyward Sword HD",
    subtitleAr: "البداية الأسطورية لأسطورة السيف والسماء.",
    synopsisAr: "مغامرة تبدأ فوق الغيوم وتنزل إلى السطح. تركّز على الألغاز، الدنجنز المصممة بعناية، وتطور الرابط بين البطل ومصيره.",
    releaseDate: "2021-07-16",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi / Suyu عالجوال الاندرويد"],
    downloadUrl: "https://nswpedia.com/download/the-legend-of-zelda-skyward-sword-hd-nsp-23-12819",
    popularity: 8,
    storyOrder: 1,
    assetExt: "webp",
    shotExt: "svg"
  },
  {
    slug: "a-link-between-worlds",
    displayTitle: "The Legend of Zelda: A Link Between Worlds",
    subtitleAr: "رسالة حب حديثة للكلاسيكيات.",
    synopsisAr: "جزء عبقري يدمج روح الأجزاء القديمة مع أفكار لعب جديدة وسلسة.",
    releaseDate: "2013-11-22",
    platformsAr: ["جهاز نينتيندو الرسمي", "Lime3DS على البيسي", "Lime3DS على الأندرويد"],
    downloadUrl: "https://romspure.cc/download/the-legend-of-zelda-a-link-between-worlds-33839/1",
    popularity: 12,
    storyOrder: 17,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "tri-force-heroes",
    displayTitle: "The Legend of Zelda: Tri Force Heroes",
    subtitleAr: "تعاون جماعي بطابع مرح ومباشر.",
    synopsisAr: "جزء تعاوني يعتمد على التنسيق بين الأصدقاء وتخطي المراحل بأساليب مبتكرة.",
    releaseDate: "2015-10-22",
    platformsAr: ["جهاز نينتيندو الرسمي", "Lime3DS على البيسي", "Lime3DS على الأندرويد"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-triforce-heroes-42862/1",
    popularity: 21,
    storyOrder: 18,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "breath-of-the-wild",
    displayTitle: "The Legend of Zelda: Breath of the Wild",
    subtitleAr: "ثورة العالم المفتوح في تاريخ زيلدا.",
    synopsisAr: "حرية مطلقة في الاستكشاف، فيزياء ذكية، وعالم حي يجعل كل مغامرة مختلفة عن الأخرى.",
    releaseDate: "2017-03-03",
    platformsAr: ["جهاز نينتيندو الرسمي", "Cemu على البيسي", "Ryujinx على البيسي", "Sudachi / Suyu عالجوال الاندرويد"],
    downloadUrl: "https://nswpedia.com/download/the-legend-of-zelda-breath-of-the-wild-75-12805",
    popularity: 1,
    storyOrder: 19,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "links-awakening-hd",
    displayTitle: "The Legend of Zelda: Link's Awakening (2019)",
    subtitleAr: "عودة كلاسيكية بإخراج بصري حديث.",
    synopsisAr: "إعادة إحياء ساحرة لواحدة من أعظم مغامرات السلسلة. بعد تحطم قاربه، يستيقظ بطلنا على شواطئ جزيرة غريبة تعج بالأسرار. استكشف عالماً يبدو وكأنه صُنع من مجسمات وألعاب مصغرة (Diorama)، واغص في دنجنز مليئة بالتحديات لجمع الآلات الموسيقية وكشف سر الجزيرة.. كل هذا برسومات حديثة وتجربة بصرية تأسر القلب.",
    releaseDate: "2019-09-20",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi أو Suyu على الأندرويد"],
    downloadUrl: "https://www.mediafire.com/file/xfqvntj4ms8s2hs/Legend_of_Zelda%252C_The_-_Link%2527s_Awakening_%25281.0.1%2529.nsp/file",
    popularity: 9,
    storyOrder: 21,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "tears-of-the-kingdom",
    displayTitle: "The Legend of Zelda: Tears of the Kingdom",
    subtitleAr: "ملحمة البناء والإبداع في سماء هايرول.",
    synopsisAr: "توسيع ضخم لعالم BOTW مع أدوات بناء مذهلة واستكشاف عمودي أكثر عمقاً.",
    releaseDate: "2023-05-12",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi / Suyu عالجوال الاندرويد"],
    downloadUrl: "https://nswpedia.com/download/the-legend-of-zelda-tears-of-the-kingdom-nsp-85-12824",
    popularity: 2,
    storyOrder: 20,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "echoes-of-wisdom",
    displayTitle: "The Legend of Zelda: Echoes of Wisdom",
    subtitleAr: "فصل جديد ببطولة زيلدا نفسها.",
    synopsisAr: "جزء حديث يقدم أسلوب لعب إبداعي ويعيد صياغة طرق حل الألغاز والمواجهات.",
    releaseDate: "2024-09-26",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi / Suyu عالجوال الاندرويد"],
    downloadUnavailable: true,
    popularity: 10,
    storyOrder: 22,
    assetExt: "webp",
    shotExt: "webp"
  },
  // --- 1. سلسلة Hyrule Warriors والألعاب الفرعية ---
  {
    slug: "hyrule-warriors",
    displayTitle: "Hyrule Warriors: Definitive Edition",
    subtitleAr: "معارك طاحنة تجمع أبطال السلسلة في ميدان واحد.",
    synopsisAr: "مزيج متفجر بين عالم زيلدا وأسلوب ألعاب Warriors العنيف، حيث تقاتل جحافل من الأعداء بشخصياتك المفضلة.",
    releaseDate: "2018-05-18",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi على الأندرويد", "Folium على الايفون"],
    downloadUrl: "https://romslab.com/hyrule-warriors-definitive-edition-switch-nsp-free-download-2/",
    popularity: 23,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "age-of-calamity",
    displayTitle: "Hyrule Warriors: Age of Calamity",
    subtitleAr: "القصة التي سبقت دمار هايرول في نفس عالم نفس البرية.",
    synopsisAr: "قاتل مع الأبطال في معركتهم اليائسة ضد غانون الكارثة قبل مائة عام من أحداث جزء 'Breath of the Wild'.",
    releaseDate: "2020-11-20",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi على الأندرويد", "Folium على الايفون"],
    downloadUrl: "https://nswpedia.com/download/hyrule-warriors-age-of-calamity-5814",
    popularity: 24,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "cadence-of-hyrule",
    displayTitle: "Cadence of Hyrule",
    subtitleAr: "مغامرة موسيقية تعتمد على الإيقاع.",
    synopsisAr: "تزاوج رائع بين عالم زيلدا ولعبة إيقاعية، تحرك وقاتل على وقع ألحان السلسلة الأيقونية الموزعة بطريقة حديثة.",
    releaseDate: "2019-06-13",
    platformsAr: ["جهاز نينتيندو الرسمي", "Ryujinx على البيسي", "Sudachi على الأندرويد", "Folium على الايفون"],
    downloadUrl: "https://nswpedia.com/download/cadence-of-hyrule-crypt-of-the-necrodancer-featuring-the-legend-of-zelda-2399",
    popularity: 25,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "links-crossbow-training",
    displayTitle: "Link's Crossbow Training",
    subtitleAr: "تدريب على الرماية في أرجاء مملكة توايلايت.",
    synopsisAr: "لعبة إطلاق نار فرعية تعتمد على التصويب الدقيق والسرعة في عالم لعبة توايلايت برينسيس.",
    releaseDate: "2007-11-19",
    platformsAr: ["جهاز نينتيندو الرسمي", "Dolphin على البيسي", "Dolphin على الأندرويد", "DolphiniOS على الايفون"],
    downloadUrl: "https://romsfun.com/download/links-crossbow-training-13287/2",
    popularity: 26,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "picross-twilight-princess",
    displayTitle: "My Nintendo Picross: Twilight Princess",
    subtitleAr: "ألغاز بيكروس بتصميم زيلدا.",
    synopsisAr: "تحدَّ عقلك في حل ألغاز أرقام وتظليل المربعات لاكتشاف صور مستوحاة من جزء توايلايت برينسيس.",
    releaseDate: "2016-03-17",
    platformsAr: ["جهاز نينتيندو الرسمي", "Lime3DS على البيسي", "Lime3DS على الأندرويد", "Folium على الايفون"],
    downloadUrl: "https://romsfun.com/download/my-nintendo-picross-the-legend-of-zelda-twilight-princess-233173/1",
    popularity: 27,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  // --- 2. إصدارات Master Quest ---
  {
    slug: "ocarina-of-time-master-quest",
    displayTitle: "The Legend of Zelda: Ocarina of Time Master Quest",
    subtitleAr: "التحدي المطلق لمعابد الزمن.",
    synopsisAr: "نسخة معدلة وصعبة من أكرينة الزمن، حيث تم إعادة تصميم جميع المعابد والمتاهات بألغاز أكثر تعقيداً وأعداء أقوى.",
    releaseDate: "2011-06-17",
    platformsAr: ["جهاز نينتيندو الرسمي", "Lime3DS على البيسي", "Lime3DS على الأندرويد", "Folium على الايفون"],
    downloadUrl: "https://romsfun.com/download/the-legend-of-zelda-ocarina-of-time-master-quest-2-128751/3",
    popularity: 28,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  // --- 3. سلسلة ألعاب Tingle الفرعية ---
  {
    slug: "tingles-rosy-rupeeland",
    displayTitle: "Freshly-Picked Tingle's Rosy Rupeeland",
    subtitleAr: "مغامرة غريبة تتمحور حول جمع الروبيز.",
    synopsisAr: "لعب دور (تنجل) المهووس بالمال في رحلة لجمع مليارات قطع الروبيز ليتمكن من الوصول لبرج السعادة الزهري.",
    releaseDate: "2006-09-02",
    platformsAr: ["جهاز نينتيندو الرسمي", "MelonDS على البيسي", "DraStic على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/freshly-picked-tingles-rosy-rupeeland-33783/1",
    popularity: 29,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "tingles-balloon-fight-ds",
    displayTitle: "Tingle's Balloon Fight DS",
    subtitleAr: "إعادة إحياء لعبة بالون فايت بألوان تنجل.",
    synopsisAr: "طوِّف بالبالونات واكسر بالونات الأعداء في نسخة حصرية ومعدلة من اللعبة الكلاسيكية الشهيرة.",
    releaseDate: "2007-04-12",
    platformsAr: ["جهاز نينتيندو الرسمي", "MelonDS على البيسي", "DraStic على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/tingles-balloon-fight-ds-120462/1",
    popularity: 30,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "tingles-balloon-trip-of-love",
    displayTitle: "Ripened Tingle's Balloon Trip of Love",
    subtitleAr: "رحلة رومانسية كوميدية في عالم الكتب المصورة.",
    synopsisAr: "الجزء الثاني من سلسلة تنجل، حيث يُسحب لبطلنا إلى كتاب قصص خيالية مغمور وعليه الخروج منه عبر الرومانسية والألغاز.",
    releaseDate: "2009-08-06",
    platformsAr: ["جهاز نينتيندو الرسمي", "MelonDS على البيسي", "DraStic على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/ripened-tingles-balloon-trip-of-love-119300/1",
    popularity: 31,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  // --- 4. ألعاب جهاز Philips CD-i ---
  {
    slug: "link-the-faces-of-evil",
    displayTitle: "Link: The Faces of Evil",
    subtitleAr: "أسطورة منسية على جهاز الـ CD-i.",
    synopsisAr: "لعبة كلاسيكية غير مألوفة، تركز على القفز والتصويب باستخدام تحريك حُر (Side-scrolling)، مشهورة بمشاهدها الكرتونية الغريبة.",
    releaseDate: "1993-10-10",
    platformsAr: ["جهاز فليبس الرسمي", "CDiEmu على البيسي", "RetroArch على الأندرويد", "لا يوجد على الايفون"],
    downloadUrl: "https://romsfun.com/download/link-the-faces-of-evil-122444/6",
    popularity: 32,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "zelda-the-wand-of-gamelon",
    displayTitle: "Zelda: The Wand of Gamelon",
    subtitleAr: "عندما تقوم زيلدا بمهمة الإنقاذ.",
    synopsisAr: "مغامرة جهاز الـ CD-i الأخرى التي تلعب فيها بدور الأميرة للبحث عن لينك وملك هايرول المفقودين.",
    releaseDate: "1993-10-10",
    platformsAr: ["جهاز فليبس الرسمي", "CDiEmu على البيسي", "RetroArch على الأندرويد", "لا يوجد على الايفون"],
    downloadUrl: "https://romsfun.com/download/zelda-the-wand-of-gamelon-122675/6",
    popularity: 33,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "zeldas-adventure",
    displayTitle: "Zelda's Adventure",
    subtitleAr: "مغامرة برسومات واقعية على الـ CD-i.",
    synopsisAr: "جزء مختلف تماماً بمنظور علوي وتصميم رسومي يعتمد على مقاطع حية ومناظر مصورة مسبقاً، حيث تسعى زيلدا لإيقاف الجانون.",
    releaseDate: "1994-06-05",
    platformsAr: ["جهاز فليبس الرسمي", "CDiEmu على البيسي", "RetroArch على الأندرويد", "لا يوجد على الايفون"],
    downloadUrl: "https://john-lay.itch.io/zeldas-adventure",
    downloadNote: "هذه نسخة لعب مباشر على المتصفح صممها أحد المُعجبين.",
    popularity: 34,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  // --- 5. ألعاب جهاز Satellaview ---
  {
    slug: "bs-zelda-no-densetsu",
    displayTitle: "BS Zelda no Densetsu",
    subtitleAr: "إعادة تصور للعبة الأولى بنظام البث الفضائي.",
    synopsisAr: "نسخة نادرة جداً ومحسنة للعبة زيلدا الأولى تم بثها في اليابان على جهاز Satellaview حصرياً، بنظام لعب محكوم بالوقت ومقاطع صوتية حية.",
    releaseDate: "1995-08-06",
    platformsAr: ["Satellaview الأصلي", "Snes9x على البيسي", "Snes9x EX+ على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://romsfun.com/download/bs-zelda-no-densetsu-153973/1",
    popularity: 35,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "bs-zelda-inishie-no-sekiban",
    displayTitle: "BS Zelda no Densetsu: Inishie no Sekiban",
    subtitleAr: "الألواح الحجرية القديمة في عالم A Link to the Past.",
    synopsisAr: "مغامرة فريدة بنظام الحلقات تم بثها فضائياً، تعتبر أحداثها مكملة أو فرعية تقع بعد جزء A Link to the Past.",
    releaseDate: "1997-03-30",
    platformsAr: ["Satellaview الأصلي", "Snes9x على البيسي", "Snes9x EX+ على الأندرويد", "Delta على الايفون"],
    downloadUrl: "https://www.romhacking.net/translations/2349/",
    popularity: 36,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  // --- 6. ألعاب الأجهزة المصغرة الكلاسيكية ---
  {
    slug: "zelda-game-watch-1989",
    displayTitle: "The Legend of Zelda Game Watch (1989)",
    subtitleAr: "لعبة زيلدا في شكل ساعة رقمية.",
    synopsisAr: "واحدة من الإصدارات الكلاسيكية النادرة التي قدمت تجربة زيلدا مصغرة تعتمد على شاشة LCD مبسطة.",
    releaseDate: "1989-08-01",
    platformsAr: ["ساعة يد مخصصة", "MAME على البيسي", "لا يوجد على الأندرويد", "لا يوجد على الايفون"],
    downloadUrl: "https://itizso.itch.io/nintendo-zelda",
    downloadNote: "لإصدار الساعة هذه اللسخة اللعب المباشر على المتصفح أسهل بكثير من تحميل وتجهيز محاكي.",
    popularity: 38,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  },
  {
    slug: "barcode-battler-ii-zelda",
    displayTitle: "Barcode Battler II: The Legend of Zelda",
    subtitleAr: "بطاقات الباركود في خدمة القتال.",
    synopsisAr: "لعبة غريبة تعتمد بالكامل على مسح بطاقات الباركود التي تصاحب جهاز Barcode Battler II لخوض معارك في عالم زيلدا.",
    releaseDate: "1992-12-01",
    platformsAr: ["جهاز Barcode Battler II", "MAME على البيسي", "لا يوجد على الأندرويد", "لا يوجد على الايفون"],
    downloadUnavailable: true,
    popularity: 39,
    storyOrder: 99,
    assetExt: "webp",
    shotExt: "webp"
  }
];

export const games: Record<string, Game> = Object.fromEntries(gamesList.map((game) => [game.slug, game]));

export function getAllGames() {
  return [...gamesList];
}

export function getGamesSortedByRelease() {
  return [...gamesList].sort(
    (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );
}

export function getGame(slug: string) {
  return games[slug] ?? null;
}
