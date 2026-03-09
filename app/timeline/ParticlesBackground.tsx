"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Fairy magical colors
const colors = ["rgba(246, 216, 137, 0.8)", "rgba(168, 240, 232, 0.8)", "rgba(130, 255, 170, 0.7)"];

export default function ParticlesBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; duration: number; delay: number }>>([]);

    useEffect(() => {
        // Generate static initial particles to avoid hydration mismatch
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage across width
            y: Math.random() * 100, // Appears smoothly from random y
            size: Math.random() * 5 + 3, // 3px to 8px
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: Math.random() * 15 + 20, // 20s to 35s to float
            delay: Math.random() * -20, // Start at different times
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="particles-container" aria-hidden="true" style={{ mixBlendMode: 'screen', opacity: 0.85 }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 5}px rgba(255,255,255,0.4)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        opacity: [0, 0.6, 1, 0.8, 0],
                        x: [
                            0,
                            Math.random() * 100 - 50,
                            Math.random() * 150 - 75,
                            Math.random() * 100 - 50,
                            0
                        ], // crazy random paths horizontally
                        y: [
                            0,
                            Math.random() * -150 - 50,
                            Math.random() * -250 - 150,
                            Math.random() * -300 - 200,
                            -400
                        ] // floats upwards to infinity with swirls
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                        opacity: { duration: p.duration, repeat: Infinity, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeInOut", delay: p.delay }
                    }}
                />
            ))}
        </div>
    );
}
