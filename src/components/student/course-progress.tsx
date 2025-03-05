import { CheckCircle, Circle } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CourseProgress({ course }) {
  const completedLessons = course.lessons.filter((lesson) => lesson.completed).length
  const totalLessons = course.lessons.length
  const progressPercentage = (completedLessons / totalLessons) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title} Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progressPercentage} className="mb-4" />
        <p className="text-sm text-muted-foreground mb-4">
          {completedLessons} of {totalLessons} lessons completed ({Math.round(progressPercentage)}%)
        </p>
        <ul className="space-y-2">
          {course.lessons.map((lesson, index) => (
            <li key={index} className="flex items-center">
              {lesson.completed ? (
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground mr-2" />
              )}
              <span className={lesson.completed ? "line-through text-muted-foreground" : ""}>{lesson.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

