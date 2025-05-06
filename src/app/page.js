import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Users,
  Zap,
  FileText,
  Lock,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold font-heading">Wavelength</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading leading-tight">
                Connect on your <span className="text-primary">wavelength</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A modern chat platform designed for communities, friends, and
                teams to communicate seamlessly in real-time.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="rounded-full px-8">
                  <Link href="/register">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-24">
              <div className="relative">
                <div className="absolute -top-4 -left-4 h-24 w-24 bg-primary/10 rounded-full z-0"></div>
                <Card className="relative z-10">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <MessageSquare className="h-6 w-6 text-primary" />{" "}
                      Real-time Messaging
                    </CardTitle>
                    <CardDescription>
                      Instant communication with friends and colleagues
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Experience fluid, real-time conversations with message
                      threading, reactions, and robust notification system that
                      keeps you connected.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="relative mt-12 md:mt-16">
                <div className="absolute -top-4 -right-4 h-20 w-20 bg-secondary/10 rounded-full z-0"></div>
                <Card className="relative z-10">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <Users className="h-6 w-6 text-secondary" /> Community
                      Channels
                    </CardTitle>
                    <CardDescription>
                      Organize conversations by topic and interest
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Create public and private channels for different topics,
                      with granular permissions and moderation tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-24">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">
                    Presence Status
                  </CardTitle>
                  <CardDescription>
                    Know who's available in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Show your online status and see when others are active,
                    away, or busy with customizable presence indicators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">File Sharing</CardTitle>
                  <CardDescription>
                    Share documents, images, and media
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Seamlessly share and preview files within conversations,
                    with organized media galleries for each channel.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="font-heading">
                    Secure Communication
                  </CardTitle>
                  <CardDescription>
                    Private and protected conversations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Robust authentication system and private messaging ensure
                    your conversations remain secure and private.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-24 text-center">
              <h2 className="text-3xl font-bold font-heading mb-6">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of communities already connecting on Wavelength
                and start chatting in just a few clicks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="default">
                  <Link href="/register">Create Account</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-card">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Designed for the way you communicate
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A beautiful, intuitive interface that puts conversations front
                and center
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="font-heading">
                    Direct Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Private conversations with individuals or small groups with
                    read receipts and typing indicators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Thread Replies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Keep conversations organized with threaded message replies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Rich Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Support for markdown, code blocks, and embedded content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Custom Themes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Personalize your experience with light and dark modes.</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle className="font-heading">
                    Responsive Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access your conversations from any device with a fully
                    responsive design optimized for desktop, tablet, and mobile.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
