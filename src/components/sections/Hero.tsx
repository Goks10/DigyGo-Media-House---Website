import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-6">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Media House Studio"
                    className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="z-10 max-w-4xl"
            >
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
                    We Build Personal Brands Through Content That <span className="text-orange-500">Gets Watched</span>.
                </h1>
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                    End-to-end YouTube & short-form content systems for founders, creators, and businesses.
                </p>
                <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white min-w-[200px]" asChild>
                        <Link to="/contact">Book a Free Strategy Call</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="min-w-[200px]" asChild>
                        <Link to="/#how-it-works">See How It Works</Link>
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
