import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import { BackgroundElements } from "../ui/BackgroundElements";
import { ParticlesBackground } from "../ui/ParticlesBackground";
import { motion, AnimatePresence } from "framer-motion";

export function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans antialiased text-foreground selection:bg-orange-500/30 overflow-hidden active-gradient">
            <ScrollToTop />
            <div className="film-grain" />
            <ParticlesBackground />
            <BackgroundElements />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    className="flex-1 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}
