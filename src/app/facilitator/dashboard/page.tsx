import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FacilitatorDashboard() {
  // This would typically come from your backend
  const courses = [
    { id: 1, title: "Introduction to Nigerian Business Law", status: "Published", students: 156 },
    { id: 2, title: "Advanced Data Analysis for Nigerian Markets", status: "Under Review", students: 0 },
    { id: 3, title: "Digital Marketing Strategies for Nigerian SMEs", status: "Draft", students: 0 },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Facilitator Dashboard</h1>
        <Link href="/facilitator/add-course">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Course
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>Status: {course.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Students Enrolled: {course.students}</p>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Manage Course
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

