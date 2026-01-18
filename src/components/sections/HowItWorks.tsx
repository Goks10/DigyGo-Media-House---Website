import { Target, Clapperboard, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "../ui/ScrollAnimation";

export function HowItWorks() {
    const steps = [
        {
            icon: Target,
            title: "1. Positioning & Strategy",
            desc: "We define your content pillars, audience, and brand voice.",
        },
        {
            icon: Clapperboard,
            title: "2. Content Production System",
            desc: "We script, shoot, edit, and repurpose long-form + short-form content.",
        },
        {
            icon: TrendingUp,
            title: "3. Growth & Optimization",
            desc: "We track performance, refine formats, and scale what works.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24">
            <div className="container px-4 md:px-6">
                <ScrollAnimation>
                    <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                        How It Works
                    </h2>
                </ScrollAnimation>
                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <ScrollAnimation key={i} delay={i * 0.2} className="h-full">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="group relative flex flex-col items-center text-center h-full"
                            >
                                {i !== steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent -z-10 transform translate-x-1/2" />
                                )}
                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-orange-500/20 bg-background shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)] transition-all group-hover:border-orange-500 group-hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.5)] group-hover:scale-110">
                                    <step.icon className="h-10 w-10 text-orange-500 transition-transform group-hover:scale-110" />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                                <p className="text-muted-foreground">{step.desc}</p>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
