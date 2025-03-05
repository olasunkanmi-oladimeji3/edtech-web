import Link from "next/link"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
  const courses = [
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
    {
      id: 4,
      title: "Fintech Innovation in Nigeria",
      description: "Explore the rapidly growing fintech sector in Nigeria and learn about innovative solutions.",
      instructor: "Olugbenga Agboola",
      level: "Intermediate",
      duration: "10 weeks",
      category: "Finance",
      image: "/bank.jpg",
    },
    {
      id: 5,
      title: "Sustainable Agriculture Techniques",
      description: "Learn modern, sustainable farming practices tailored to Nigeria's climate and soil conditions.",
      instructor: "Dr. Akinwumi Adesina",
      level: "All Levels",
      duration: "8 weeks",
      category: "Agriculture",
      image: "/Pictuttre5.png",
    },
    {
      id: 6,
      title: "Nigerian Art and Design",
      description: "Explore traditional and contemporary Nigerian art forms and their influence on global design.",
      instructor: "Nike Davies-Okundaye",
      level: "Beginner",
      duration: "6 weeks",
      category: "Arts & Culture",
      image: "/culture.png",
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col space-y-4 md:space-y-8 px-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Courses</h1>
          <p className="mt-2 text-muted-foreground">
            Discover courses tailored for Nigeria's growing industries and future leaders.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center ">
          <div className="relative w-full md:w-96">
            <Input placeholder="Search courses..." className="pl-10" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 md:ml-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
                <SelectItem value="arts-culture">Arts & Culture</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden border-0 shadow-md">
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
      </div>
    </div>
  )
}

