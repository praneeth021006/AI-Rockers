import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UpcomingLessons() {
  const lessons = [
    {
      title: "Algebra: Solving Equations",
      subject: "Mathematics",
      date: "Today, 3:00 PM",
      mentor: "Priya Sharma",
    },
    {
      title: "Cell Structure and Functions",
      subject: "Science",
      date: "Tomorrow, 4:30 PM",
      mentor: "Rajesh Kumar",
    },
    {
      title: "Hindi Grammar: Tenses",
      subject: "Hindi",
      date: "Wed, 2:00 PM",
      mentor: "Anita Desai",
    },
  ]

  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => (
        <div key={index} className="flex flex-col space-y-2 rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{lesson.title}</h3>
          </div>
          <div className="text-sm text-muted-foreground">{lesson.subject}</div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            {lesson.date}
          </div>
          <div className="text-sm">Mentor: {lesson.mentor}</div>
          <Button size="sm" className="mt-2">
            Join Lesson
          </Button>
        </div>
      ))}
    </div>
  )
}
