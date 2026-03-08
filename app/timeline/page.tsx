"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import GradualBlur from "@/components/GradualBlur";
import "../timeline.css";

export default function TimelinePage() {
    return (
        <main className="timeline-page">
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
                        <Link href="/games/skyward-sword" className="timeline-node">
                            <span className="year">2011</span>
                            <span className="name">Skyward Sword</span>
                            <span className="desc">فجر التاريخ، نشأة السيف واللعنة الأبدية</span>
                        </Link>

                        <div className="vertical-line"></div>

                        <div className="node-group">
                            <Link href="/games/ocarina-of-time" className="timeline-node">
                                <span className="year">1998</span>
                                <span className="name">Ocarina of Time</span>
                                <span className="desc">النقطة المفصلية وبداية الصراع</span>
                            </Link>

                            {/* Minish Cap Side Branch */}
                            <div className="side-branch right-branch">
                                <div className="horizontal-dotted-line"></div>
                                <Link href="/games/the-minish-cap" className="timeline-node node-secondary border-brown">
                                    <span className="badge">للعب الخفيف 📱</span>
                                    <span className="year">2004</span>
                                    <span className="name">The Minish Cap</span>
                                    <span className="desc">قصة فرعية خفيفة</span>
                                </Link>
                            </div>
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

                            <div className="vertical-line"></div>
                            <Link href="/games/wind-waker" className="timeline-node">
                                <span className="year">2002</span>
                                <span className="name">The Wind Waker</span>
                                <span className="desc">عالم أغرقته المياه وحبس الشر</span>
                            </Link>

                            <div className="vertical-line"></div>
                            <Link href="/games/phantom-hourglass" className="timeline-node">
                                <span className="year">2007</span>
                                <span className="name">Phantom Hourglass</span>
                                <span className="desc">تكملة في رحلة بحرية جديدة</span>
                            </Link>

                            <div className="vertical-line"></div>
                            <Link href="/games/spirit-tracks" className="timeline-node">
                                <span className="year">2009</span>
                                <span className="name">Spirit Tracks</span>
                                <span className="desc">بعد 100 سنة، تأسيس مملكة تعتمد على القطارات</span>
                            </Link>
                            <div className="down-line dotted to-convergence"></div>
                        </div>

                        {/* Branch B: Child Timeline */}
                        <div className="branch-col border-blue">
                            <div className="branch-title">مسار الطفل</div>

                            <div className="vertical-line"></div>
                            <Link href="/games/majoras-mask" className="timeline-node">
                                <span className="year">2000</span>
                                <span className="name">Majora's Mask</span>
                                <span className="desc">تكملة مباشرة في عالم موازي</span>
                            </Link>

                            <div className="vertical-line"></div>
                            <Link href="/games/twilight-princess" className="timeline-node">
                                <span className="year">2006</span>
                                <span className="name">Twilight Princess</span>
                                <span className="desc">بعد مئات السنين، لقاء مع شبح البطل القديم</span>
                            </Link>
                            <div className="down-line dotted to-convergence"></div>
                        </div>

                        {/* Branch C: Downfall Timeline */}
                        <div className="branch-col border-red">
                            <div className="branch-title">مسار البطل المهزوم</div>

                            <div className="vertical-line"></div>

                            <div className="node-group">
                                <Link href="/games/a-link-to-the-past" className="timeline-node">
                                    <span className="year">1991</span>
                                    <span className="name">A Link to the Past</span>
                                    <span className="desc">عصور مظلمة وتراجع للمملكة</span>
                                </Link>

                                <div className="side-branch left-branch offset-1">
                                    <div className="horizontal-dotted-line"></div>
                                    <Link href="/games/links-awakening" className="timeline-node node-secondary border-brown">
                                        <span className="badge">للعب الخفيف 📱</span>
                                        <span className="year">1993</span>
                                        <span className="name">Link's Awakening</span>
                                        <span className="desc">مغامرة جانبية في جزيرة</span>
                                    </Link>
                                </div>

                                <div className="side-branch left-branch offset-2">
                                    <div className="horizontal-dotted-line"></div>
                                    <Link href="/games/a-link-between-worlds" className="timeline-node node-secondary border-brown">
                                        <span className="badge">للعب الخفيف 📱</span>
                                        <span className="year">2013</span>
                                        <span className="name">A Link Between Worlds</span>
                                        <span className="desc">أسلوب لعب سريع ومبتكر</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="vertical-line"></div>
                            <Link href="/games/the-legend-of-zelda" className="timeline-node">
                                <span className="year">1986/87</span>
                                <span className="name">Zelda 1 & Zelda 2</span>
                                <span className="desc">نهاية الخط الزمني الكلاسيكي في أراضي قاحلة</span>
                            </Link>
                            <div className="down-line dotted to-convergence"></div>
                        </div>

                    </div>

                    <div className="convergence-point">
                        <span>نقطة الالتقاء — المستقبل السحيق ✦</span>
                    </div>

                    {/* Phase 3: The Convergence */}
                    <div className="timeline-phase border-yellow pt-0">
                        <Link href="/games/breath-of-the-wild" className="timeline-node mt-0">
                            <span className="year">2017</span>
                            <span className="name">Breath of the Wild</span>
                            <span className="desc">بعد عشرات الآلاف من السنين، حيث تلاشت تفاصيل التاريخ القديم</span>
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
