import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CourseRecommendations({ recommendations }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Courses</CardTitle>
        <CardDescription>Based on your interests and learning history</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recommendations.map((course) => (
            <li key={course.id}>
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-muted-foreground">{course.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium mr-2">₦{course.price.toLocaleString()}</span>
                <span className="text-xs text-muted-foreground">{course.duration}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/courses">
          <Button variant="outline">
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

