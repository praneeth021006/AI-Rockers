"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy } from "lucide-react"

interface LeaderboardTableProps {
  subject: string
}

export function LeaderboardTable({ subject }: LeaderboardTableProps) {
  // Mock leaderboard data
  const generateLeaderboardData = (subject: string) => {
    const names = [
      "Rahul Sharma",
      "Priya Patel",
      "Amit Kumar",
      "Sneha Reddy",
      "Mohammed Ali",
      "Ananya Singh",
      "Vikram Mehta",
      "Neha Gupta",
      "Rajesh Verma",
      "Kavita Rao",
    ]

    // Shuffle and assign random scores based on subject
    return names
      .map((name) => ({
        name,
        points: Math.floor(Math.random() * 500) + 800,
        streak: Math.floor(Math.random() * 14) + 1,
        badges: Math.floor(Math.random() * 10) + 1,
        quizzes: Math.floor(Math.random() * 30) + 20,
        avatar: name
          .split(" ")
          .map((n) => n[0])
          .join(""),
      }))
      .sort((a, b) => b.points - a.points)
      .map((student, index) => ({
        ...student,
        rank: index + 1,
      }))
  }

  const [leaderboardData] = useState(() => generateLeaderboardData(subject))

  // Highlight top 3 ranks with different colors
  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-amber-500"
    if (rank === 2) return "text-slate-400"
    if (rank === 3) return "text-amber-700"
    return "text-muted-foreground"
  }

  // Get trophy for top 3
  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Trophy className={`h-4 w-4 ${getRankColor(rank)}`} />
    }
    return null
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">Rank</TableHead>
            <TableHead>Student</TableHead>
            <TableHead className="text-right">Points</TableHead>
            <TableHead className="text-right">Streak</TableHead>
            <TableHead className="text-right">Badges</TableHead>
            <TableHead className="text-right">Quizzes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((student) => (
            <TableRow key={student.name} className={student.rank <= 3 ? "bg-muted/40" : ""}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  <span className={getRankColor(student.rank)}>#{student.rank}</span>
                  {getRankIcon(student.rank)}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${student.avatar}`} />
                    <AvatarFallback>{student.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="font-medium">{student.name}</div>
                </div>
              </TableCell>
              <TableCell className="text-right font-medium">{student.points}</TableCell>
              <TableCell className="text-right">{student.streak} days</TableCell>
              <TableCell className="text-right">{student.badges}</TableCell>
              <TableCell className="text-right">{student.quizzes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
