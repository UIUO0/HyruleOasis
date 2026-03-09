"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import GradualBlur from "@/components/GradualBlur";
import "../timeline.css";

// Helper component for nodes
const GameNode = ({ slug, year, name, desc, isSecondary = false, badge = null }: { slug: string, year: string, name: string, desc: string, isSecondary?: boolean, badge?: string | null }) => (
    <Link href={`/games/${slug}`} className={`timeline-node ${isSecondary ? 'node-secondary' : ''}`}>
        {badge && <span className="badge">{badge}</span>}
        <img src={`/images/games/${slug}/cover.webp`} alt={name} className="node-cover" loading="lazy" />
        <div className="node-content">
            <span className="year">{year}</span>
            <span className="name">{name}</span>
            <span className="desc">{desc}</span>
        </div>
    </Link>
);

export default function TimelinePage() {
    return (
        <main className="timeline-page">
            <video
                className="timeline-bg-video"
                autoPlay
                loop
                muted
                playsInline
                src="/videos/universe-bg.mp4"
            />
            <div className="timeline-video-overlay" />
            <div className="timeline-grain-layer" />

            <ParticlesBackground />
            <GradualBlur preset="page-footer" />

            <div className="timeline-header">
                <h1 className="title">الخط الزمني لسلسلة The Legend of Zelda 🗡️</h1>
                <p className="body">
                    رسم بياني تفريعي يوضح ترابط قصة السلسلة — مرتب حسب تسلسل الأحداث وليس تاريخ الإصدار.
                </p>
            </div>

            <div className="timeline-wrapper">
                <div className="timeline-tree">

                    {/* Phase 1: Foundation */}
                    <div className="timeline-phase border-yellow">
                        <GameNode slug="skyward-sword" year="2011" name="Skyward Sword" desc="فجر التاريخ، نشأة السيف واللعنة الأبدية" />

                        <div className="path-segment">
                            <div className="vertical-line tall-line"></div>
                            <div className="side-branch right-branch border-brown">
                                <div className="branch-arm border-yellow"></div>
                                <GameNode slug="the-minish-cap" year="2004" name="The Minish Cap" desc="قصة فرعية خفيفة" isSecondary badge="للعب الخفيف 📱" />
                            </div>
                        </div>

                        <GameNode slug="ocarina-of-time" year="1998" name="Ocarina of Time" desc="النقطة المفصلية وبداية الصراع" />

                        <div className="path-segment">
                            <div className="vertical-line to-convergence"></div>
                        </div>
                    </div>

                    <div className="split-label">
                        <span>الانقسام العظيم ⚔️</span>
                    </div>

                    {/* Phase 2: The Three Branches */}
                    <div className="timeline-branches">

                        {/* Branch A: Adult Timeline */}
                        <div className="branch-col border-purple">
                            <div className="branch-title">مسار البالغ</div>

                            <div className="path-segment"><div className="vertical-line"></div></div>
                            <GameNode slug="wind-waker" year="2002" name="The Wind Waker" desc="عالم أغرقته المياه وحبس الشر" />

                            <div className="path-segment"><div className="vertical-line"></div></div>
                            <GameNode slug="phantom-hourglass" year="2007" name="Phantom Hourglass" desc="تكملة في رحلة بحرية جديدة" />

                            <div className="path-segment"><div className="vertical-line"></div></div>
                            <GameNode slug="spirit-tracks" year="2009" name="Spirit Tracks" desc="بعد 100 سنة، تأسيس مملكة تعتمد على القطارات" />

                            <div className="path-segment flex-grow">
                                <div className="vertical-line dotted to-convergence"></div>
                            </div>
                        </div>

                        {/* Branch B: Child Timeline */}
                        <div className="branch-col border-blue">
                            <div className="branch-title">مسار الطفل</div>

                            <div className="path-segment"><div className="vertical-line"></div></div>
                            <GameNode slug="majoras-mask" year="2000" name="Majora's Mask" desc="تكملة مباشرة في عالم موازي" />

                            <div className="path-segment"><div className="vertical-line"></div></div>
                            <GameNode slug="twilight-princess" year="2006" name="Twilight Princess" desc="بعد مئات السنين، لقاء مع شبح البطل القديم" />

                            <div className="path-segment flex-grow">
                                <div className="vertical-line dotted to-convergence"></div>
                            </div>
                        </div>

                        {/* Branch C: Downfall Timeline */}
                        <div className="branch-col border-red">
                            <div className="branch-title">مسار البطل المهزوم</div>

                            <div className="path-segment"><div className="vertical-line"></div></div>
                            <GameNode slug="a-link-to-the-past" year="1991" name="A Link to the Past" desc="عصور مظلمة وتراجع للمملكة" />

                            <div className="path-segment">
                                <div className="vertical-line tall-line"></div>
                                <div className="side-branch left-branch border-brown">
                                    <div className="branch-arm border-red"></div>
                                    <GameNode slug="links-awakening" year="1993" name="Link's Awakening" desc="مغامرة جانبية في جزيرة" isSecondary badge="للعب الخفيف 📱" />
                                </div>
                            </div>

                            <div className="path-segment">
                                <div className="vertical-line tall-line"></div>
                                <div className="side-branch right-branch border-brown">
                                    <div className="branch-arm border-red"></div>
                                    <GameNode slug="a-link-between-worlds" year="2013" name="A Link Between Worlds" desc="أسلوب لعب سريع ومبتكر" isSecondary badge="للعب الخفيف 📱" />
                                </div>
                            </div>

                            <GameNode slug="the-legend-of-zelda" year="1986/87" name="Zelda 1 & Zelda 2" desc="نهاية الخط الزمني الكلاسيكي في أراضي قاحلة" />

                            <div className="path-segment flex-grow">
                                <div className="vertical-line dotted to-convergence"></div>
                            </div>
                        </div>

                    </div>

                    <div className="convergence-point">
                        <span>نقطة الالتقاء — المستقبل السحيق ✦</span>
                    </div>

                    {/* Phase 3: The Convergence */}
                    <div className="timeline-phase border-yellow pt-0">
                        <div className="path-segment" style={{ height: "40px" }}><div className="vertical-line dotted"></div></div>

                        <GameNode slug="breath-of-the-wild" year="2017" name="Breath of the Wild" desc="بعد عشرات الآلاف من السنين، حيث تلاشت تفاصيل التاريخ القديم" />

                        <div className="path-segment"><div className="vertical-line"></div></div>

                        <GameNode slug="tears-of-the-kingdom" year="2023" name="Tears of the Kingdom" desc="تكملة مباشرة لاستكشاف أعماق وسماء المملكة" />
                    </div>

                </div>
            </div>
        </main>
    );
}
