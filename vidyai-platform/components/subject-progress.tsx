"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export function SubjectProgress() {
  const data = [
    {
      name: "Math",
      progress: 78,
    },
    {
      name: "Science",
      progress: 65,
    },
    {
      name: "Hindi",
      progress: 92,
    },
    {
      name: "English",
      progress: 85,
    },
    {
      name: "Social",
      progress: 70,
    },
    {
      name: "Computer",
      progress: 88,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip formatter={(value) => [`${value}%`, "Progress"]} labelFormatter={(label) => `Subject: ${label}`} />
        <Bar dataKey="progress" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
