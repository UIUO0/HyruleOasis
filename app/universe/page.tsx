"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GradualBlur from "@/components/GradualBlur";
import "../universe.css";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function UniversePage() {
    return (
        <main className="universe-page">
            {/* Video Background (Update src to your video path when ready) */}
            <video
                className="universe-bg-video"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/universe-bg.mp4"
            />
            {/* Blur overlay to blend the video with the glassmorphism aesthetic */}
            <div className="video-overlay" />

            <div className="grain-layer" style={{ opacity: 0.4 }} />
            <GradualBlur preset="page-footer" />

            {/* Header */}
            <motion.div
                className="universe-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">موسوعة هايرول 📜</h1>
                <p className="subtitle">
                    دليلك الأساسي لفهم أساطير، أعراق، وثوابت عالم زيلدا الخيالي.
                </p>
            </motion.div>

            <div className="universe-container">

                {/* Section 0: The Core Legend */}
                <motion.section
                    className="lore-section"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title">أساسيات الأسطورة (The Core Legend)</h2>
                    <div className="foundation-grid">

                        <div className="lore-card foundation-card">
                            <div className="card-header">
                                <span className="emoji">🏰</span>
                                <h3 className="card-title">مملكة هايرول (Kingdom of Hyrule)</h3>
                            </div>
                            <p className="desc">
                                المسرح الرئيسي لأغلب ألعاب السلسلة. أرض شاسعة وساحرة تباركت من الآلهة، تتنوع تضاريسها بين الغابات العميقة، الجبال البركانية، والصحاري القاحلة. هي المملكة التي يطمع الشر دائماً في السيطرة عليها.
                            </p>
                        </div>

                        <div className="lore-card foundation-card">
                            <div className="card-header">
                                <span className="emoji">🗡️</span>
                                <h3 className="card-title">البطل لينك (Link)</h3>
                            </div>
                            <p className="desc">
                                بطل السلسلة الذي تتحكم به (والمعلومة الأهم: اسمه ليس زيلدا!). بطل صامت، شجاع، وغالباً ما يستيقظ من نوم عميق ليجد نفسه محملاً بمسؤولية إنقاذ العالم. يرتدي عادة الزي الأخضر المميز، ويمثل قطعة "الشجاعة" في الترايفورس.
                            </p>
                        </div>

                        <div className="lore-card foundation-card">
                            <div className="card-header">
                                <span className="emoji">👑</span>
                                <h3 className="card-title">الأميرة زيلدا (Princess Zelda)</h3>
                            </div>
                            <p className="desc">
                                السلسلة تحمل اسمها. هي أميرة مملكة هايرول وسليلة الدم الملكي المقدس. لا تقتصر أدوارها على كونها أميرة تنتظر الإنقاذ، بل هي حكيمة تمتلك قوى سحرية عظيمة، وتمثل قطعة "الحكمة" في الترايفورس.
                            </p>
                        </div>

                        <div className="lore-card foundation-card">
                            <div className="card-header">
                                <span className="emoji">😈</span>
                                <h3 className="card-title">غانون / غانوندورف (Ganon / Ganondorf)</h3>
                            </div>
                            <p className="desc">
                                العدو الأزلي والمطلق في السلسلة. تجسيد للشر والكراهية التي لا تموت. يسعى دائماً للسيطرة على مملكة هايرول وقوة الترايفورس ليحكم العالم بظلامه، ويمثل قطعة "القوة".
                            </p>
                        </div>

                    </div>
                </motion.section>

                {/* Section 1: قوى الخلق */}
                <motion.section
                    className="lore-section"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title">قوى الخلق (The Golden Power)</h2>

                    <div className="lore-card triforce-card">
                        <div>
                            <div className="card-header">
                                <span className="emoji">🔺</span>
                                <h3 className="card-title">الترايفورس (The Triforce)</h3>
                            </div>
                            <p className="desc">
                                الآثر المقدس الأهم في السلسلة. مثلث ذهبي تركته الآلهة الثلاث بعد خلق العالم. ينقسم إلى ثلاث قطع:
                            </p>
                            <ul className="triforce-list">
                                <li><span className="color-red">قوة (Power):</span> يمثلها اللون الأحمر.</li>
                                <li><span className="color-blue">حكمة (Wisdom):</span> يمثلها اللون الأزرق.</li>
                                <li><span className="color-green">شجاعة (Courage):</span> يمثلها اللون الأخضر.</li>
                            </ul>
                            <div className="lore-rule">
                                يُقال أن من يجمع القطع الثلاث يتحقق له أي أمنية، مما يجعله مطمعاً دائماً لقوى الخير والشر على حد سواء.
                            </div>
                        </div>

                        <div className="triforce-animation-container">
                            <svg className="triforce-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                {/* Top Triangle (Power) */}
                                <polygon className="tf-power" points="50,15 30,50 70,50" />
                                {/* Bottom Left Triangle (Wisdom) */}
                                <polygon className="tf-wisdom" points="30,50 10,85 50,85" />
                                {/* Bottom Right Triangle (Courage) */}
                                <polygon className="tf-courage" points="70,50 50,85 90,85" />
                            </svg>
                        </div>
                    </div>
                </motion.section>

                {/* Section 2: Races of Hyrule */}
                <motion.section
                    className="lore-section"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title">أعراق وقبائل عالم هايرول (Races of Hyrule)</h2>
                    <div className="races-grid">

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🧝‍♂️</span>
                                <h3 className="card-title">الهايليان (Hylians)</h3>
                            </div>
                            <p className="desc">
                                العرق البشري ذو الآذان المدببة (مثل "لينك" والأميرة "زيلدا"). يُعتقد أن آذانهم الطويلة تساعدهم على سماع رسائل الآلهة. هم مؤسسو مملكة هايرول.
                            </p>
                        </div>

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🏜️</span>
                                <h3 className="card-title">الجيرودو (Gerudo)</h3>
                            </div>
                            <p className="desc">
                                قبيلة من المحاربات الأشداء يعشن في الصحاري القاسية. يتكون هذا العرق بالكامل من النساء، ولا يُولد فيهم ذكر إلا مرة كل 100 عام (والذي يُقدر له أن يصبح ملكهم).
                            </p>
                        </div>

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🐟</span>
                                <h3 className="card-title">الزورا (Zora)</h3>
                            </div>
                            <p className="desc">
                                برمائيون أنيقون يعيشون في الأنهار والمحيطات. يتميزون بمهارة السباحة الخارقة وصناعة الدروع الفضية، وغالباً ما يحرسون مصادر المياه العذبة للمملكة.
                            </p>
                        </div>

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🪨</span>
                                <h3 className="card-title">الغورون (Goron)</h3>
                            </div>
                            <p className="desc">
                                عمالقة مسالمون ذوو بنية صخرية، يستوطنون الجبال البركانية والمناطق شديدة الحرارة. قوتهم البدنية هائلة، ويعتمدون في غذائهم على أكل الصخور الممتازة!
                            </p>
                        </div>

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🦅</span>
                                <h3 className="card-title">الريتو (Rito)</h3>
                            </div>
                            <p className="desc">
                                عرق من المحاربين الطيور يتميزون بالكبرياء ومهارة الرماية. يسكنون قمم الجبال العالية ويحلقون في سماء هايرول لجمع الأخبار وحماية الأراضي.
                            </p>
                        </div>

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🍃</span>
                                <h3 className="card-title">أرواح الغابة (Koroks / Kokiri)</h3>
                            </div>
                            <p className="desc">
                                كائنات صغيرة ولطيفة تتخذ من الغابات العميقة موطناً لها. يعيشون في حماية "شجرة الديكو" العظيمة، ويحبون التخفي وصنع المقالب الخفيفة بالمسافرين.
                            </p>
                        </div>

                    </div>
                </motion.section>

                {/* Section 3: Legendary Relics */}
                <motion.section
                    className="lore-section"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="section-title">الأسلحة والآثار الأسطورية (Legendary Relics)</h2>
                    <div className="relics-grid">

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">🗡️</span>
                                <h3 className="card-title">سيف إقصاء الظلام (The Master Sword)</h3>
                            </div>
                            <p className="desc">
                                النصل الأسطوري الذي خُلق خصيصاً لردع الشر. لا يمكن لأي شخص حمله، فهو يختار بطلة بعناية، ويجب أن يمتلك حامله شجاعة نقية وقلباً لا يعرف الخوف.
                            </p>
                        </div>

                        <div className="lore-card">
                            <div className="card-header">
                                <span className="emoji">💎</span>
                                <h3 className="card-title">الروبيز (Rupees)</h3>
                            </div>
                            <p className="desc">
                                العملة الرسمية في عالم زيلدا. عبارة عن أحجار كريمة ملونة، تختلف قيمتها باختلاف لونها (الأخضر يساوي 1، الأزرق 5، والأحمر 20، وهكذا).
                            </p>
                        </div>

                    </div>
                </motion.section>

            </div>
        </main>
    );
}
