import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Contact() {
    return (
        <div className="container py-24 px-4 md:px-6">
            <div className="mx-auto max-w-xl">
                <Card className="border-white/10 bg-black/40 backdrop-blur-sm">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold text-white">Book a Strategy Call</CardTitle>
                        <CardDescription className="text-lg mt-2">Let’s understand your goals and see if we are a fit.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="John Doe" className="bg-zinc-900 border-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="role">Role</Label>
                                    <Input id="role" placeholder="Founder / Creator" className="bg-zinc-900 border-white/10" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-zinc-900 border-white/10" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" placeholder="Company Name" className="bg-zinc-900 border-white/10" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="goal">Monthly Content Goal</Label>
                                <Input id="goal" placeholder="e.g. 4 YouTube Videos + 10 Reels" className="bg-zinc-900 border-white/10" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Tell us more about your vision..." className="min-h-[120px] bg-zinc-900 border-white/10" />
                            </div>

                            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg">
                                Book Call
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
