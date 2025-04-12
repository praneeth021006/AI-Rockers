"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function StreakCard() {
  const [currentStreak] = useState(7)
  const [longestStreak] = useState(14)

  // Generate last 7 days for the streak visualization
  const today = new Date()
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    return date
  }).reverse()

  // For demo purposes, assume the user has completed activities on these days
  const completedDays = [0, 1, 2, 3, 4, 5, 6] // All 7 days completed

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium">Current Streak</p>
          <p className="text-2xl font-bold">{currentStreak} days</p>
        </div>
        <div>
          <p className="text-sm font-medium">Longest Streak</p>
          <p className="text-2xl font-bold">{longestStreak} days</p>
        </div>
      </div>

      <div className="flex justify-between pt-2">
        {last7Days.map((date, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                completedDays.includes(index) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {date.getDate()}
            </div>
            <span className="mt-1 text-xs">{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]}</span>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <Button className="w-full">
          <Calendar className="mr-2 h-4 w-4" />
          Continue Learning Today
        </Button>
      </div>
    </div>
  )
}
