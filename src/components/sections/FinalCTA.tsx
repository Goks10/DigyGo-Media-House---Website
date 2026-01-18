import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "../ui/ScrollAnimation";

export function FinalCTA() {
    return (
        <section className="py-24 border-t border-white/5">
            <ScrollAnimation>
                <div className="container flex flex-col items-center px-4 text-center md:px-6">
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                        Ready to build your personal brand?
                    </h2>
                    <p className="mb-8 max-w-[600px] text-muted-foreground md:text-xl">
                        Book a free 30-minute strategy call to get started.
                    </p>
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                        <Link to="/contact">Book a Free Strategy Call</Link>
                    </Button>
                </div>
            </ScrollAnimation>
        </section>
    );
}
