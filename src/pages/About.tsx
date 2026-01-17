import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Target, Zap, Heart } from "lucide-react";

export default function About() {
    const philosophy = [
        { icon: Target, text: "Strategy before aesthetics" },
        { icon: Zap, text: "Systems over randomness" },
        { icon: Rocket, text: "Growth over vanity metrics" },
        { icon: Heart, text: "Long-term brand building" },
    ];

    return (
        <div className="container py-24 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center mb-24">
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-6">About DigyGo Media House</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    We are a content-first media house focused on building personal brands and digital visibility.<br /><br />
                    Our team comes from <span className="text-orange-500 font-bold">DigyGo</span> – a digital marketing & AI agency that builds growth systems for businesses.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center mb-24">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-6">The Problem We Solve.</h2>
                    <div className="text-xl text-muted-foreground space-y-4">
                        <p>Most people create content.</p>
                        <p>Very few build influence.</p>
                        <p className="text-white font-bold text-2xl">We exist to change that.</p>
                    </div>
                </div>
                <div className="relative aspect-square lg:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src="/images/about-hero.png"
                        alt="DigyGo Media House Philosophy"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 mix-blend-overlay" />
                </div>
            </div>

            <div className="mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold text-white text-center mb-12">Our Philosophy</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {philosophy.map((item, i) => (
                        <Card key={i} className="bg-black/40 border-white/10 hover:border-orange-500/50 transition-colors">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center h-full">
                                <div className="mb-4 p-3 rounded-full bg-orange-500/10 text-orange-500">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <span className="font-medium text-lg text-zinc-200">{item.text}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
