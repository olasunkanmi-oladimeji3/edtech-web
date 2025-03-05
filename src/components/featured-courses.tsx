import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedCourses() {
  const featuredCourses = [
    {
      id: 1,
      title: "Nigerian Tech Entrepreneurship",
      description: "Learn how to build and scale successful tech startups in the Nigerian market.",
      instructor: "Bosun Tijani",
      level: "Intermediate",
      duration: "8 weeks",
      category: "Business",
      image: "/culture.png",
    },
    {
      id: 2,
      title: "Data Science for Nigerian Industries",
      description: "Apply data science techniques to solve real-world problems in Nigerian industries.",
      instructor: "Dr. Omolola Ogunleye",
      level: "Advanced",
      duration: "12 weeks",
      category: "Data Science",
      image: "/webdev.png",
    },
    {
      id: 3,
      title: "Digital Marketing for Nigerian Businesses",
      description: "Master digital marketing strategies tailored for the Nigerian market and consumers.",
      instructor: "Aisha Babangida",
      level: "Beginner to Intermediate",
      duration: "6 weeks",
      category: "Marketing",
      image: "/bank.jpg",
    },
  ]

  return (
    <section className="container px-11 py-11">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">Featured Courses</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our top courses designed to boost your skills and career in Nigeria's growing industries.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8  md:pt-11">
        {featuredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden border-0 shadow-md ">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="object-cover w-full h-full transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge>{course.category}</Badge>
                <span className="text-sm text-muted-foreground">{course.duration}</span>
              </div>
              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex-1">
                  <p className="text-sm font-medium">Instructor</p>
                  <p className="text-sm text-muted-foreground">{course.instructor}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Level</p>
                  <p className="text-sm text-muted-foreground">{course.level}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/courses/${course.id}`} className="w-full">
                <Button className="w-full">View Course</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/courses">
          <Button variant="outline">
            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

