import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, BarChart, Trophy, Layers, Users, TrendingUp } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export default function CaseStudy() {
    return (
        <div className="container py-24 px-4 md:px-6">
            <ScrollAnimation>
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <Badge className="mb-4 bg-orange-500 text-white hover:bg-orange-600">Growth Case Study</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-6">
                        Marketing Brand – YouTube Growth
                    </h1>
                    <p className="text-xl text-muted-foreground">How we helped a marketing brand clarify their message and explode their organic reach.</p>
                </div>
            </ScrollAnimation>

            <div className="grid gap-8 lg:grid-cols-3 mb-16">
                {[
                    { icon: BarChart, label: "Total Views", value: "500K+" },
                    { icon: Users, label: "New Subscribers", value: "12.5K" },
                    { icon: TrendingUp, label: "Lead Increase", value: "300%" }
                ].map((stat, i) => (
                    <ScrollAnimation key={i} delay={i * 0.1} animation="scaleUp">
                        <Card className="bg-zinc-900/50 border-white/10 text-center py-8">
                            <CardContent>
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </CardContent>
                        </Card>
                    </ScrollAnimation>
                ))}
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-16">
                <ScrollAnimation delay={0.2}>
                    <Card className="bg-zinc-900/50 border-white/10">
                        <CardHeader><CardTitle className="flex items-center gap-2 text-white"><BarChart className="h-5 w-5 text-red-500" /> The Challenge</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>• Inconsistent content</li>
                                <li>• Low reach</li>
                                <li>• No clear video structure</li>
                                <li>• Poor retention</li>
                            </ul>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={0.3}>
                    <Card className="bg-zinc-900/50 border-white/10">
                        <CardHeader><CardTitle className="flex items-center gap-2 text-white"><Layers className="h-5 w-5 text-blue-500" /> Our Approach</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>• Structured content format</li>
                                <li>• Hook-based scripting</li>
                                <li>• Optimized pacing in edits</li>
                                <li>• Repurposed long videos to reels</li>
                            </ul>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4}>
                    <Card className="bg-zinc-900/50 border-orange-500/20 shadow-[0_0_30px_-10px_rgba(249,115,22,0.1)]">
                        <CardHeader><CardTitle className="flex items-center gap-2 text-white"><Trophy className="h-5 w-5 text-orange-500" /> The Results</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-zinc-200">
                                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-orange-500 shrink-0" /> 4 YouTube videos crossed 1k+ views organically</li>
                                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-orange-500 shrink-0" /> 3 consecutive uploads &gt; 1k views</li>
                                <li className="flex items-start gap-2"><Check className="h-5 w-5 text-orange-500 shrink-0" /> Improved consisteny & engagement</li>
                            </ul>
                        </CardContent>
                    </Card>
                </ScrollAnimation>
            </div>

            <ScrollAnimation animation="fadeUp">
                <div className="rounded-xl bg-zinc-900 p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Services Provided</h3>
                    <div className="flex flex-wrap gap-3">
                        {["YouTube Scripting", "Video Editing", "Content Structure", "Reels Planning"].map((tag, i) => (
                            <Badge key={i} variant="secondary" className="text-md py-1 px-4">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}
