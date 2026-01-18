import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    animation?: "fadeUp" | "fadeRight" | "fadeLeft" | "scaleUp" | "blurIn";
    delay?: number;
    duration?: number;
}

export function ScrollAnimation({
    children,
    className = "",
    animation = "fadeUp",
    delay = 0,
    duration = 0.5
}: ScrollAnimationProps) {

    const getVariants = () => {
        switch (animation) {
            case "fadeRight":
                return {
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                };
            case "fadeLeft":
                return {
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 }
                };
            case "scaleUp":
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                };
            case "blurIn":
                return {
                    hidden: { opacity: 0, filter: "blur(10px)" },
                    visible: { opacity: 1, filter: "blur(0px)" }
                };
            case "fadeUp":
            default:
                return {
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                };
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            variants={getVariants()}
        >
            {children}
        </motion.div>
    );
}
