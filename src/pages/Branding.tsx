import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, User, Target, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Branding() {
    return (
        <div className="container py-24 px-4 md:px-6">
            {/* Header */}
            <div className="mx-auto max-w-4xl text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-4">
                    Personal Brand Launchpad <span className="text-orange-500">(90 Days)</span>
                </h1>
                <p className="text-xl text-muted-foreground">Turn your expertise into visibility and authority.</p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 mb-24">
                {/* Who This Is For */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-full bg-orange-500/10 text-orange-500"><User className="h-6 w-6" /></div>
                        <h2 className="text-2xl font-bold text-white">Who this is for</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {["Founders", "Startup leaders", "Coaches", "Consultants", "Creators", "Agency owners"].map((item, i) => (
                            <Card key={i} className="bg-zinc-900 border-zinc-800">
                                <CardContent className="p-4 flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                                    <span className="font-medium text-zinc-100">{item}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Outcome */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-full bg-orange-500/10 text-orange-500"><Target className="h-6 w-6" /></div>
                        <h2 className="text-2xl font-bold text-white">Outcome</h2>
                    </div>
                    <ul className="space-y-4">
                        {["Clear personal brand", "Consistent content flow", "Increased visibility", "Authority in your niche"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                                <Check className="h-5 w-5 text-orange-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* What You Get - Full Width */}
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-orange-500/10 text-orange-500"><Rocket className="h-6 w-6" /></div>
                    <h2 className="text-3xl font-bold text-white">What You Get</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        "Brand positioning workshop",
                        "Content strategy",
                        "30 short videos",
                        "4 YouTube videos",
                        "Editing & optimization",
                        "Content calendar",
                        "Growth plan",
                        "Performance Tracking"
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 text-center rounded-xl bg-black/40 border border-white/5">
                            <span className="font-medium text-zinc-200">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8" asChild>
                        <Link to="/contact">Apply for Program <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
