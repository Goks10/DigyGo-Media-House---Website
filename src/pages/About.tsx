import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export default function About() {
    return (
        <div className="container py-24 px-4 md:px-6">
            <ScrollAnimation>
                <div className="mx-auto max-w-3xl text-center mb-24">
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-6">About DigyGo Media House</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We are a content-first media house focused on building personal brands and digital visibility.<br /><br />
                        Our team comes from <span className="text-orange-500 font-bold">DigyGo</span> – a digital marketing & AI agency that builds growth systems for businesses.
                    </p>
                </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
                <div className="mx-auto max-w-4xl text-center mb-24">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-6">
                        We Build Brands That Matter
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        At DigyGo Media House, we believe that personal branding is the single highest-leverage asset a founder or creator can own.
                    </p>
                </div>
            </ScrollAnimation>

            <div className="grid gap-8 md:grid-cols-3">
                {[
                    {
                        icon: Target,
                        title: "Our Mission",
                        desc: "To help visionary leaders amplify their message and impact millions through content."
                    },
                    {
                        icon: Lightbulb,
                        title: "Our Vision",
                        desc: "To be the #1 growth partner for purpose-driven founders and creators worldwide."
                    },
                    {
                        icon: Heart,
                        title: "Our Values",
                        desc: "Excellence, authenticity, and systems-driven growth in everything we do."
                    }
                ].map((item, i) => (
                    <ScrollAnimation key={i} delay={i * 0.15}>
                        <Card className="bg-zinc-900/50 border-white/10 h-full">
                            <CardContent className="p-8 text-center flex flex-col items-center h-full">
                                <div className="mb-6 rounded-full bg-orange-500/10 p-4 text-orange-500">
                                    <item.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                ))}
            </div>

            <div className="mt-24 grid gap-12 lg:grid-cols-2 items-center">
                <ScrollAnimation animation="fadeRight">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">The Problem We Solve.</h2>
                        <div className="text-xl text-muted-foreground space-y-4">
                            <p>Most people create content.</p>
                            <p>Very few build influence.</p>
                            <p className="text-white font-bold text-2xl">We exist to change that.</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animation="scaleUp">
                    <div className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="/about-media-house.png"
                            alt="DigyGo Media House Studio"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 mix-blend-overlay" />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
