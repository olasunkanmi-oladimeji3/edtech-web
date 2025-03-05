"use client"

import { useState, useEffect } from "react"
import { Award } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data - in a real app, this would come from your API
const mockGradesData = {
  overallGPA: 3.7,
  courses: [
    {
      id: 1,
      title: "Introduction to Nigerian Business Law",
      grade: "A",
      percentage: 92,
      instructor: "Barrister Chukwudi Eze",
      assignments: [
        { title: "Case Study Analysis", grade: 95 },
        { title: "Midterm Exam", grade: 88 },
        { title: "Final Project", grade: 93 },
      ],
    },
    {
      id: 2,
      title: "Digital Marketing for Nigerian Businesses",
      grade: "B+",
      percentage: 87,
      instructor: "Aisha Babangida",
      assignments: [
        { title: "Marketing Strategy Proposal", grade: 85 },
        { title: "Social Media Campaign", grade: 90 },
        { title: "Final Exam", grade: 86 },
      ],
    },
    // Add more courses as needed
  ],
}

export default function GradesPage() {
  const [gradesData, setGradesData] = useState(mockGradesData)

  useEffect(() => {
    // In a real app, you would fetch the grades data here
    setGradesData(mockGradesData)
  }, [])

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Academic Performance</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overall Performance</CardTitle>
          <CardDescription>Your cumulative grade point average</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-2" />
            <span className="text-4xl font-bold">{gradesData.overallGPA}</span>
            <p className="text-muted-foreground">GPA</p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {gradesData.courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>Instructor: {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold">{course.grade}</span>
                  <span className="text-muted-foreground ml-2">({course.percentage}%)</span>
                </div>
                <Progress value={course.percentage} className="w-1/2" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Assignments</h4>
                <ul className="space-y-2">
                  {course.assignments.map((assignment, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{assignment.title}</span>
                      <span className="font-medium">{assignment.grade}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

