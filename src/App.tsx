import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Branding from "@/pages/Branding";
import CaseStudy from "@/pages/CaseStudy";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/branding" element={<Branding />} />
                    <Route path="/case-study" element={<CaseStudy />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
