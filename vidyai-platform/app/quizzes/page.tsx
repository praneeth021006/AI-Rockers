import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { QuizGenerator } from "@/components/quiz-generator"
import { BookOpen, Clock, FileText, BarChart } from "lucide-react"

export default function QuizzesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Quizzes" text="Take personalized quizzes in your preferred language.">
        <Button>Generate New Quiz</Button>
      </DashboardHeader>

      <Tabs defaultValue="available" className="space-y-4">
        <TabsList>
          <TabsTrigger value="available">Available</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="generator">Quiz Generator</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Algebra Basics", subject: "Mathematics", questions: 10, time: 15 },
              { title: "Cell Structure", subject: "Science", questions: 12, time: 20 },
              { title: "Grammar Rules", subject: "Hindi", questions: 8, time: 10 },
              { title: "Indian Freedom Movement", subject: "Social Studies", questions: 15, time: 25 },
            ].map((quiz, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <CardDescription>{quiz.subject}</CardDescription>
                  </div>
                  <CardTitle className="mt-2">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.questions} questions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.time} minutes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Quiz</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Fractions and Decimals", subject: "Mathematics", score: 85, date: "2 days ago" },
              { title: "Plant Kingdom", subject: "Science", score: 92, date: "1 week ago" },
              { title: "Tenses", subject: "English", score: 78, date: "2 weeks ago" },
            ].map((quiz, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <CardDescription>{quiz.subject}</CardDescription>
                  </div>
                  <CardTitle className="mt-2">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <BarChart className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{quiz.score}%</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Completed {quiz.date}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Review</Button>
                  <Button variant="ghost">Retry</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="generator" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Quiz Generator</CardTitle>
              <CardDescription>
                Generate personalized quizzes based on your syllabus and preferred language
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuizGenerator />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
