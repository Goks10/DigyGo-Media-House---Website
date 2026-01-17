import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export function FoundingClients() {
    return (
        <section className="py-24">
            <div className="container px-4 md:px-6">
                <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-8 md:p-16 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 blur-[100px]" />

                    <Crown className="mx-auto mb-6 h-12 w-12 text-orange-400" />
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white md:text-5xl">
                        Founding Creator Program
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                        We are onboarding our first 5 personal brands with special early partner pricing, priority execution, and case study collaboration.
                    </p>
                    <div className="flex justify-center">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
                            <Link to="/branding">Apply Now</Link>
                        </Button>
                    </div>
                    <p className="mt-6 text-sm font-medium text-orange-400">Limited Slots Available</p>
                </div>
            </div>
        </section>
    );
}
