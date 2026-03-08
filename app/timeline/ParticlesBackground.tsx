"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Fairy magical colors
const colors = ["rgba(246, 216, 137, 0.8)", "rgba(168, 240, 232, 0.8)", "rgba(130, 255, 170, 0.7)"];

export default function ParticlesBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; size: number; color: string; duration: number; delay: number }>>([]);

    useEffect(() => {
        // Generate static initial particles to avoid hydration mismatch
        const newParticles = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage across width
            size: Math.random() * 4 + 2, // 2px to 6px
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: Math.random() * 10 + 15, // 15s to 25s to float up
            delay: Math.random() * -20, // Start at different times
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="particles-container" aria-hidden="true">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.x}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        boxShadow: `0 0 ${p.size * 2.5}px ${p.color}`,
                    }}
                    initial={{ y: "110vh", opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.8, 1, 0.8, 0],
                        x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`, `${p.x}%`] // gentle sway
                    }}
                    transition={{
                        y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
                        opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay, times: [0, 0.2, 0.5, 0.8, 1] },
                        x: { duration: p.duration * 0.6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: p.delay }
                    }}
                />
            ))}
        </div>
    );
}
