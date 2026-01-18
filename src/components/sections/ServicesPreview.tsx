import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Youtube, Smartphone, User } from "lucide-react";
import { ScrollAnimation } from "../ui/ScrollAnimation";
import { motion } from "framer-motion";

export function ServicesPreview() {
    const services = [
        {
            icon: Youtube,
            title: "YouTube Authority Building",
            desc: "Long-form content that builds trust and visibility.",
        },
        {
            icon: Smartphone,
            title: "Short-Form Domination",
            desc: "Reels & Shorts designed for reach and engagement.",
        },
        {
            icon: User,
            title: "Personal Branding (End-to-End)",
            desc: "Strategy → Content → Growth → Automation.",
        },
    ];

    return (
        <section className="py-24 bg-zinc-900/30">
            <div className="container px-4 md:px-6">
                <ScrollAnimation>
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                        Services Overview
                    </h2>
                </ScrollAnimation>
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, i) => (
                        <ScrollAnimation key={i} delay={i * 0.1}>
                            <motion.div whileHover={{ y: -5 }}>
                                <Card className="h-full border-white/10 bg-black/40 backdrop-blur-sm transition-all hover:border-orange-500/50 hover:bg-black/60 hover:shadow-lg hover:shadow-orange-500/10">
                                    <CardHeader>
                                        <service.icon className="mb-4 h-10 w-10 text-orange-500" />
                                        <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{service.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <ScrollAnimation delay={0.3}>
                        <Button variant="outline" asChild>
                            <Link to="/services">View All Services</Link>
                        </Button>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
