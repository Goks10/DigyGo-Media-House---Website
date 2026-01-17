import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ParticlesBackground() {
    const [particles, setParticles] = useState<{ id: number; left: string; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const particleCount = 30;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1, // 1px to 4px
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * 10,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-orange-500/20 shadow-[0_0_10px_2px_rgba(249,115,22,0.1)]"
                    style={{
                        left: particle.left,
                        width: particle.size,
                        height: particle.size,
                        top: "110%", // Start below screen
                    }}
                    animate={{
                        top: "-10%", // Float to top
                        opacity: [0, 0.5, 0], // Fade in/out
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
