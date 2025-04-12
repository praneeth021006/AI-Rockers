import Link from "next/link"
import { ArrowRight, BookOpen, BarChart3, Award, Users, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold">VidyAI++</span>
            </Link>
          </div>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/subjects" className="text-sm font-medium">
              Subjects
            </Link>
            <Link href="/quizzes" className="text-sm font-medium">
              Quizzes
            </Link>
            <Link href="/admin" className="text-sm font-medium">
              Admin
            </Link>
            <Button asChild size="sm">
              <Link href="/login">Login</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Personalized Education for Every Student
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  VidyAI++ delivers hyper-personalized, regional-language education aligned with each student's class
                  level and learning style.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/get-started">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="VidyAI++ Platform"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Designed to overcome educational barriers with AI-powered solutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Multilingual AI Tutoring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Generate explanations and quizzes in Indian languages based on regional syllabi and grade level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Adaptive Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dynamically adjust content difficulty based on quiz performance, behavioral feedback, and learning
                    pace.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Admin Dashboard</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access, monitor, and export student data securely through a web-based dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>Gamified Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Skill heatmaps, digital badges, streak rewards, and leaderboards to boost retention and motivation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="grid gap-1">
                    <CardTitle>AI Mentor Matchmaking</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Match students with suitable mentors based on needs, subject difficulty, and regional compatibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/20 p-2">
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
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M12 3v4" />
                      <path d="M10 4h4" />
                      <path d="m15 7 2 2" />
                      <path d="M7 7 5 9" />
                      <path d="M12 19v-4" />
                      <path d="M10 18h4" />
                      <path d="m15 15-2-2" />
                      <path d="m7 15 2-2" />
                    </svg>
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>Offline-First Architecture</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Core functionality works in low/no-internet zones via PWA and on-device AI. Syncs data when online.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 VidyAI++. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
