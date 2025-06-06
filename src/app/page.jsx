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

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-heading">Wavelength</span>
            </div>

            <div className="flex gap-8">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Wavelength. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
