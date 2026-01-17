import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Youtube, Smartphone, User, Check } from "lucide-react";

export default function Services() {
    const serviceList = [
        {
            title: "YouTube Authority Program",
            icon: Youtube,
            features: [
                "Channel positioning",
                "Content strategy",
                "Scriptwriting",
                "Video editing",
                "Thumbnails",
                "SEO optimization",
                "Growth roadmap",
            ],
        },
        {
            title: "Short-Form Content Program",
            icon: Smartphone,
            features: [
                "Reels / Shorts strategy",
                "Batch content planning",
                "Trend-based formats",
                "High-retention editing",
                "Platform optimization",
            ],
        },
        {
            title: "Personal Branding System",
            icon: User,
            flagship: true,
            description: "Our complete end-to-end solution. Available in 3 / 6 / 12 month programs.",
            features: [
                "Personal brand positioning",
                "Content pillars",
                "Monthly shoot planning",
                "Long + short-form production",
                "Repurposing",
                "Posting automation",
                "Analytics & growth tracking",
            ],
        },
    ];

    return (
        <div className="container py-24 px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl mb-4">Our Services</h1>
                <p className="text-muted-foreground text-lg">Comprehensive content solutions for your personal brand.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {serviceList.map((service, i) => (
                    <Card key={i} className={`flex flex-col border-white/10 bg-black/40 backdrop-blur-sm transition-all hover:bg-black/60 ${service.flagship ? 'border-orange-500/50 shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]' : ''}`}>
                        <CardHeader>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                                {service.flagship && <Badge className="bg-orange-500 text-white hover:bg-orange-600">Flagship</Badge>}
                            </div>
                            {service.description && (
                                <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                            )}
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="grid gap-3">
                                {service.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <Check className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
