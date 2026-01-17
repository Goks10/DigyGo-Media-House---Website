import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { WhyUs } from "@/components/sections/WhyUs";
import { FoundingClients } from "@/components/sections/FoundingClients";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <>
            <Hero />
            <SocialProof />
            <ProblemSection />
            <HowItWorks />
            <ServicesPreview />
            <CaseStudyHighlight />
            <WhyUs />
            <FoundingClients />
            <FinalCTA />
        </>
    );
}
