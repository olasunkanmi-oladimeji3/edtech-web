"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Clock, Award, Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data - in a real app, this would come from your API
const mockStudentData = {
  name: "Adebayo Ogunlesi",
  enrolledCourses: [
    { id: "1", title: "Introduction to Nigerian Business Law", progress: 35, nextLesson: "Contract Law Basics" },
    {
      id: "2",
      title: "Digital Marketing for Nigerian Businesses",
      progress: 70,
      nextLesson: "Social Media Strategies",
    },
  ],
  upcomingAssignments: [
    {
      id: "1",
      title: "Business Law Case Study",
      dueDate: "2023-07-15",
      course: "Introduction to Nigerian Business Law",
    },
    {
      id: "2",
      title: "Marketing Campaign Proposal",
      dueDate: "2023-07-20",
      course: "Digital Marketing for Nigerian Businesses",
    },
  ],
  recentAchievements: [
    { id: "1", title: "Completed Module 1", description: "Fundamentals of Business Law", date: "2023-07-01" },
    { id: "2", title: "5-Day Study Streak", description: "Consistent learning for 5 days", date: "2023-07-05" },
  ],
  notifications: [
    { id: "1", message: "New course materials available", date: "2023-07-06" },
    { id: "2", message: "Upcoming live session with Dr. Nnamani", date: "2023-07-10" },
  ],
}

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState(mockStudentData)

  useEffect(() => {
    // In a real app, you would fetch the student data here
    setStudentData(mockStudentData)
  }, [])

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, {studentData.name}!</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Enrolled Courses</CardTitle>
            <CardDescription>Your current learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            {studentData.enrolledCourses.map((course) => (
              <div key={course.id} className="mb-4 last:mb-0">
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <Progress value={course.progress} className="mb-2" />
                <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                <Link href={`/classroom/${course.id}`}>
                  <Button className="mt-2" variant="outline" size="sm">
                    Continue Learning
                  </Button>
                </Link>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>Stay on top of your tasks</CardDescription>
          </CardHeader>
          <CardContent>
            {studentData.upcomingAssignments.map((assignment) => (
              <div key={assignment.id} className="mb-4 last:mb-0">
                <h3 className="font-semibold">{assignment.title}</h3>
                <p className="text-sm text-muted-foreground">{assignment.course}</p>
                <div className="flex items-center mt-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
            <CardDescription>Celebrate your progress</CardDescription>
          </CardHeader>
          <CardContent>
            {studentData.recentAchievements.map((achievement) => (
              <div key={achievement.id} className="mb-4 last:mb-0">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  <h3 className="font-semibold">{achievement.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Achieved on {new Date(achievement.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Notifications</h2>
        <Card>
          <CardContent className="p-0">
            {studentData.notifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`p-4 flex items-start ${index !== studentData.notifications.length - 1 ? "border-b" : ""}`}
              >
                <Bell className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <p>{notification.message}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {new Date(notification.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

