"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PerformanceMetrics() {
  // Mock performance data
  const performanceData = [
    {
      month: "Jan",
      mathematics: 65,
      science: 75,
      languages: 80,
      social: 70,
    },
    {
      month: "Feb",
      mathematics: 68,
      science: 74,
      languages: 82,
      social: 72,
    },
    {
      month: "Mar",
      mathematics: 70,
      science: 78,
      languages: 81,
      social: 74,
    },
    {
      month: "Apr",
      mathematics: 72,
      science: 80,
      languages: 83,
      social: 75,
    },
    {
      month: "May",
      mathematics: 75,
      science: 82,
      languages: 85,
      social: 78,
    },
    {
      month: "Jun",
      mathematics: 78,
      science: 84,
      languages: 86,
      social: 80,
    },
  ]

  // Regional performance data
  const regionalData = [
    { region: "Delhi", performance: 82 },
    { region: "Mumbai", performance: 78 },
    { region: "Bangalore", performance: 85 },
    { region: "Chennai", performance: 76 },
    { region: "Kolkata", performance: 80 },
    { region: "Hyderabad", performance: 79 },
    { region: "Ahmedabad", performance: 77 },
    { region: "Pune", performance: 81 },
  ]

  return (
    <Tabs defaultValue="trends" className="space-y-4">
      <TabsList>
        <TabsTrigger value="trends">Performance Trends</TabsTrigger>
        <TabsTrigger value="regional">Regional Analysis</TabsTrigger>
        <TabsTrigger value="subjects">Subject Breakdown</TabsTrigger>
      </TabsList>

      <TabsContent value="trends" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance Trends</CardTitle>
            <CardDescription>Average student performance across subjects over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="month" stroke="#888888" />
                  <YAxis stroke="#888888" domain={[50, 100]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, ""]} labelFormatter={(label) => `Month: ${label}`} />
                  <Line type="monotone" dataKey="mathematics" stroke="#1e40af" strokeWidth={2} name="Mathematics" />
                  <Line type="monotone" dataKey="science" stroke="#15803d" strokeWidth={2} name="Science" />
                  <Line type="monotone" dataKey="languages" stroke="#b91c1c" strokeWidth={2} name="Languages" />
                  <Line type="monotone" dataKey="social" stroke="#7e22ce" strokeWidth={2} name="Social Studies" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="regional" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Regional Performance Analysis</CardTitle>
            <CardDescription>Average student performance by region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionalData.map((item) => (
                <div key={item.region} className="flex items-center">
                  <div className="w-[100px] font-medium">{item.region}</div>
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${item.performance}%` }} />
                    </div>
                  </div>
                  <div className="w-[50px] text-right font-medium">{item.performance}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
