import { Zap, Layout, Users, Trophy } from "lucide-react";

import { motion } from "framer-motion";

export function WhyUs() {
    const reasons = [
        {
            icon: Users,
            title: "Built by Digygo",
            desc: "Backed by a team with deep expertise in Marketing & AI.",
        },
        {
            icon: Layout,
            title: "Strategy First",
            desc: "We don't just shoot. We strategize, plan, and execute.",
        },
        {
            icon: Zap,
            title: "Systems Focus",
            desc: "No random content. We build scalable growth engines.",
        },
        {
            icon: Trophy,
            title: "Performance Mindset",
            desc: "Focused on metrics that matter, not just vanity views.",
        },
    ];

    return (
        <section className="py-24 bg-zinc-900/30">
            <div className="container px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl"
                >
                    Why Choose Us?
                </motion.h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 rounded-2xl bg-white/5 p-4 text-orange-500 ring-1 ring-white/10 transition-all group-hover:bg-orange-500/10 group-hover:ring-orange-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]">
                                <reason.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-white">{reason.title}</h3>
                            <p className="text-sm text-muted-foreground">{reason.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
