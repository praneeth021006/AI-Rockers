import { BookOpen, FileText, Video, Award } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "quiz",
      title: "Completed Algebra Quiz",
      subject: "Mathematics",
      time: "2 hours ago",
      icon: FileText,
    },
    {
      type: "lesson",
      title: "Watched Cell Structure Video",
      subject: "Science",
      time: "Yesterday",
      icon: Video,
    },
    {
      type: "achievement",
      title: "Earned 'Science Explorer' Badge",
      subject: "Science",
      time: "2 days ago",
      icon: Award,
    },
    {
      type: "lesson",
      title: "Completed Hindi Grammar Lesson",
      subject: "Hindi",
      time: "3 days ago",
      icon: BookOpen,
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-4 rounded-lg border p-3">
          <div className="rounded-full bg-primary/10 p-2">
            <activity.icon className="h-4 w-4 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.subject}</p>
          </div>
          <div className="text-xs text-muted-foreground">{activity.time}</div>
        </div>
      ))}
    </div>
  )
}
