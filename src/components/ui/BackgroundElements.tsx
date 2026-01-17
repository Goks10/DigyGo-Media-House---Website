import { motion } from "framer-motion";
import { Camera, Mic, Clapperboard, Film, Video, Play, Music } from "lucide-react";

export function BackgroundElements() {
    const icons = [
        { Icon: Camera, top: "10%", left: "5%", delay: 0 },
        { Icon: Mic, top: "20%", right: "10%", delay: 2 },
        { Icon: Clapperboard, bottom: "15%", left: "8%", delay: 4 },
        { Icon: Film, top: "40%", left: "50%", delay: 6 },
        { Icon: Video, bottom: "30%", right: "5%", delay: 1 },
        { Icon: Play, top: "15%", left: "80%", delay: 3 },
        { Icon: Music, bottom: "10%", left: "40%", delay: 5 },
    ];

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {icons.map(({ Icon, top, left, right, bottom, delay }, index) => (
                <motion.div
                    key={index}
                    className="absolute text-orange-500/5"
                    style={{ top, left, right, bottom }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.03, 0.08, 0.03],
                        scale: [1, 1.1, 1],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: delay,
                        ease: "easeInOut"
                    }}
                >
                    <Icon size={64} strokeWidth={1} />
                </motion.div>
            ))}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-80" />
        </div>
    );
}
