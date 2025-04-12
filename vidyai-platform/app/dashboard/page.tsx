import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BarChart, BookOpen, Clock, Trophy, Users } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentActivity } from "@/components/recent-activity"
import { UpcomingLessons } from "@/components/upcoming-lessons"
import { SubjectProgress } from "@/components/subject-progress"
import { StreakCard } from "@/components/streak-card"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Student Dashboard" text="Track your progress and continue learning.">
        <Button>Start Learning</Button>
      </DashboardHeader>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Learning Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5 hours</div>
                <p className="text-xs text-muted-foreground">+2.5 hours from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
                <p className="text-xs text-muted-foreground">Keep going to earn rewards!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Quizzes</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+8 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Mentors</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Math and Science subjects</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <SubjectProgress />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Lessons</CardTitle>
                <CardDescription>Your scheduled lessons for the next few days</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingLessons />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Learning Streak</CardTitle>
                <CardDescription>Keep your daily learning streak going</CardDescription>
              </CardHeader>
              <CardContent>
                <StreakCard />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="subjects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {["Mathematics", "Science", "Hindi", "English", "Social Studies", "Computer Science"].map((subject) => (
              <Card key={subject}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle>{subject}</CardTitle>
                    <CardDescription>Class 8</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{Math.floor(Math.random() * 100)}%</span>
                    </div>
                    <Progress value={Math.floor(Math.random() * 100)} />
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      Continue
                    </Button>
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
