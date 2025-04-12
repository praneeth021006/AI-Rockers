import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { LeaderboardTable } from "@/components/leaderboard-table"
import { Award, BookOpen, Calendar, Trophy } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeaderboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Leaderboard" text="See how you rank among your peers across different subjects.">
        <div className="flex items-center gap-2">
          <Select defaultValue="class8">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="class6">Class 6</SelectItem>
              <SelectItem value="class7">Class 7</SelectItem>
              <SelectItem value="class8">Class 8</SelectItem>
              <SelectItem value="class9">Class 9</SelectItem>
              <SelectItem value="class10">Class 10</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            This Month
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
            <Trophy className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#12</div>
            <p className="text-xs text-muted-foreground">Up 3 positions this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Points Earned</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">+86 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Personal best: 14 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overall" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overall">Overall</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
          <TabsTrigger value="science">Science</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="social">Social Studies</TabsTrigger>
        </TabsList>

        <TabsContent value="overall" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overall Leaderboard</CardTitle>
              <CardDescription>Top performers across all subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable subject="overall" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mathematics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mathematics Leaderboard</CardTitle>
              <CardDescription>Top performers in Mathematics</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable subject="mathematics" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="science" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Science Leaderboard</CardTitle>
              <CardDescription>Top performers in Science</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardTable subject="science" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
