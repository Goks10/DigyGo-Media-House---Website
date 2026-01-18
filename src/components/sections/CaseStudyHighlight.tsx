import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "../ui/ScrollAnimation";

export function CaseStudyHighlight() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <ScrollAnimation animation="scaleUp">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-3xl rounded-full" />
                            <div className="relative aspect-video rounded-xl border border-white/10 bg-black/50 overflow-hidden shadow-2xl">
                                {/* Case Study Image */}
                                <img
                                    src="/images/youtube_growth.png"
                                    alt="YouTube Growth Analytics Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="fadeLeft" delay={0.2}>
                        <div className="order-1 lg:order-2">
                            <Badge variant="outline" className="mb-4 border-orange-500/50 text-orange-500">Case Study</Badge>
                            <h2 className="mb-6 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                                Marketing Brand – YouTube Growth
                            </h2>
                            <ul className="mb-8 space-y-4">
                                {["4 videos crossed 1,000+ views organically", "3 consecutive uploads crossed 1,000+ views", "Platforms: YouTube & Instagram", "Services: Scripting, editing, content structure"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild>
                                <Link to="/case-study" className="group">
                                    View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
}
