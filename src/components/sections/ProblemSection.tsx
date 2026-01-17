import { X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
    const problems = [
        "Inconsistent content",
        "Low views and engagement",
        "No clear personal brand positioning",
        "Spending on videos that don’t convert",
        "No system for growth",
    ];

    return (
        <section className="py-24 bg-zinc-900/30">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                            Most creators and founders <span className="text-red-500">struggle</span> with:
                        </h2>
                        <div className="flex flex-col gap-4">
                            {problems.map((problem, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                                        <X className="h-5 w-5" />
                                    </div>
                                    <span className="text-lg text-muted-foreground">{problem}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-xl bg-orange-500/20 blur-3xl" />
                        <Card className="relative border-orange-500/20 bg-black/80 backdrop-blur-sm">
                            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                                    <Check className="h-10 w-10" />
                                </div>
                                <h3 className="mb-2 text-3xl font-bold text-white">We fix this.</h3>
                                <p className="text-muted-foreground">
                                    Our systems-first approach ensures consistency, quality, and growth without the headache.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
