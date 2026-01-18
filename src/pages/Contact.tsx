import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";

export default function Contact() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-80px)] py-12 px-4 md:px-6">
            <ScrollAnimation animation="scaleUp" className="w-full max-w-xl">
                <Card className="w-full border-white/10 bg-black/40 backdrop-blur-md">
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-3xl font-bold text-white">Book a Strategy Call</CardTitle>
                        <CardDescription className="text-muted-foreground text-lg">
                            Ready to scale your personal brand? Let's talk.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-white">Full Name</Label>
                                <Input id="name" placeholder="John Doe" className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-500" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white">Email Address</Label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-500" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="brand" className="text-white">Current Social Media Link (if any)</Label>
                                <Input id="brand" placeholder="youtube.com/@yourchannel" className="bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-500" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="goals" className="text-white">What are your main goals?</Label>
                                <Textarea id="goals" placeholder="I want to build authority..." className="min-h-[100px] bg-zinc-900/50 border-white/10 text-white placeholder:text-zinc-500" />
                            </div>
                            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-lg">
                                Schedule Free Call
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </ScrollAnimation>
        </div>
    );
}
