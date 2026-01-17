export function SocialProof() {
    return (
        <section className="border-y border-white/5 bg-black/50 py-12">
            <div className="container px-4 text-center md:px-6">
                <p className="mb-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Trusted by early-stage founders & growing brands
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                    {/* Placeholders for logos */}
                    <div className="text-xl font-bold flex items-center gap-2"><div className="h-8 w-8 bg-white/20 rounded-full"></div> Brand A</div>
                    <div className="text-xl font-bold flex items-center gap-2"><div className="h-8 w-8 bg-white/20 rounded-full"></div> Brand B</div>
                    <div className="text-xl font-bold flex items-center gap-2"><div className="h-8 w-8 bg-white/20 rounded-full"></div> Brand C</div>
                    <div className="text-xl font-bold flex items-center gap-2"><div className="h-8 w-8 bg-white/20 rounded-full"></div> Brand D</div>
                </div>
                <p className="mt-8 text-xs text-muted-foreground">
                    Team behind Digygo – Digital Marketing & AI Agency
                </p>
            </div>
        </section>
    );
}
