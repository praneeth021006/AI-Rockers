"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, BookOpen, FileText } from "lucide-react"

export function QuizGenerator() {
  const [loading, setLoading] = useState(false)
  const [quizGenerated, setQuizGenerated] = useState(false)

  const handleGenerateQuiz = () => {
    setLoading(true)
    // Simulate API call to generate quiz
    setTimeout(() => {
      setLoading(false)
      setQuizGenerated(true)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select defaultValue="mathematics">
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="social">Social Studies</SelectItem>
              <SelectItem value="computer">Computer Science</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic">Topic</Label>
          <Input id="topic" placeholder="e.g., Algebra, Cell Structure" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="class">Class</Label>
          <Select defaultValue="8">
            <SelectTrigger id="class">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">Class 6</SelectItem>
              <SelectItem value="7">Class 7</SelectItem>
              <SelectItem value="8">Class 8</SelectItem>
              <SelectItem value="9">Class 9</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="hindi">
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="gujarati">Gujarati</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="difficulty">Difficulty Level</Label>
          <Select defaultValue="medium">
            <SelectTrigger id="difficulty">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="questions">Number of Questions</Label>
          <Select defaultValue="10">
            <SelectTrigger id="questions">
              <SelectValue placeholder="Select number" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Questions</SelectItem>
              <SelectItem value="10">10 Questions</SelectItem>
              <SelectItem value="15">15 Questions</SelectItem>
              <SelectItem value="20">20 Questions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additional">Additional Instructions (Optional)</Label>
        <Textarea
          id="additional"
          placeholder="Any specific topics to focus on or avoid, question types, etc."
          className="min-h-[100px]"
        />
      </div>

      <Button onClick={handleGenerateQuiz} disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Quiz...
          </>
        ) : (
          <>Generate Quiz</>
        )}
      </Button>

      {quizGenerated && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Generated Quiz: Algebra Basics
            </CardTitle>
            <CardDescription>10 questions • Medium difficulty • Hindi language</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your quiz has been generated successfully. It includes a mix of multiple choice, short answer, and
              problem-solving questions on Algebra Basics for Class 8.
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Preview Quiz
            </Button>
            <Button>Start Quiz Now</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
