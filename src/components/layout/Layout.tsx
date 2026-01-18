import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import { BackgroundElements } from "../ui/BackgroundElements";
import { ThreeBackground } from "../ui/ThreeBackground";
import { motion, AnimatePresence } from "framer-motion";

export function Layout() {
    const location = useLocation();

    return (
        <div className="flex min-h-screen flex-col font-sans antialiased text-foreground selection:bg-orange-500/30 overflow-hidden">
            <ScrollToTop />
            <div className="film-grain" />
            <div className="film-grain" />
            <ThreeBackground />
            <BackgroundElements />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
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
