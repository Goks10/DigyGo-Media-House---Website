import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black py-12 relative z-10">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-xl font-bold tracking-tighter text-white">
                            DigyGo <span className="text-orange-500">Media House</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            We build personal brands through content that gets watched.
                            End-to-end YouTube & short-form content systems.
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                            <li><Link to="/services" className="hover:text-orange-500">YouTube Authority</Link></li>
                            <li><Link to="/services" className="hover:text-orange-500">Short-Form Content</Link></li>
                            <li><Link to="/program" className="hover:text-orange-500">Personal Branding</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
                            <li><Link to="/case-study" className="hover:text-orange-500">Case Studies</Link></li>
                            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
                        <ul className="grid gap-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-orange-500">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-orange-500">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-muted-foreground">
                    <p>© 2025 DigyGo Media House. All rights reserved.</p>
                    <p className="mt-2">Built by the team behind DigyGo – Digital Marketing & AI Agency.</p>
                </div>
            </div>
        </footer>
    );
}
