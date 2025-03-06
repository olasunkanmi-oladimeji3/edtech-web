import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Users, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

export default function CoursePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from an API
  const course = {
    id: Number.parseInt(params.id),
    title: "Web Development Bootcamp",
    description:
      "Learn HTML, CSS, JavaScript, React, and Node.js in this comprehensive bootcamp designed to take you from beginner to job-ready developer.",
    instructor: "Sarah Johnson",
    instructorTitle: "Senior Web Developer",
    instructorBio:
      "Sarah has over 10 years of experience in web development and has worked with companies like Google and Facebook.",
    instructorAvatar: "/placeholder.svg?height=100&width=100",
    level: "Beginner to Intermediate",
    duration: "12 weeks",
    category: "Development",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.8,
    reviews: 342,
    students: 12543,
    price: 99.99,
    modules: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lessons: [
          { id: 1, title: "Welcome to the Course", duration: "10:23", completed: true },
          { id: 2, title: "Setting Up Your Development Environment", duration: "15:45", completed: true },
          { id: 3, title: "Understanding How the Web Works", duration: "12:30", completed: false },
        ],
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        lessons: [
          { id: 4, title: "HTML Document Structure", duration: "14:12", completed: false },
          { id: 5, title: "Working with Text and Lists", duration: "18:30", completed: false },
          { id: 6, title: "Adding Images and Links", duration: "20:15", completed: false },
          { id: 7, title: "Creating Forms", duration: "25:10", completed: false },
        ],
      },
      {
        id: 3,
        title: "CSS Styling",
        lessons: [
          { id: 8, title: "CSS Selectors and Properties", duration: "22:45", completed: false },
          { id: 9, title: "Box Model and Layout", duration: "19:20", completed: false },
          { id: 10, title: "Flexbox and Grid", duration: "28:30", completed: false },
          { id: 11, title: "Responsive Design", duration: "24:15", completed: false },
        ],
      },
    ],
    whatYouWillLearn: [
      "Build websites with HTML, CSS, and JavaScript",
      "Create responsive layouts with Flexbox and Grid",
      "Develop interactive web applications with React",
      "Build backend APIs with Node.js and Express",
      "Work with databases like MongoDB",
      "Deploy your applications to the web",
    ],
  }

  // Calculate progress
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100)

  return (
    <div className="container py-8 md:py-12 md:px-12 px-8">
      <Link
        href="/courses"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courses
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <Image src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
          </div>

          <div className="mt-6">
            <h1 className="text-3xl font-bold">{course.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge>{course.category}</Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{course.level}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{course.duration}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium">{course.rating}</span>
                <span className="ml-1 text-sm text-muted-foreground">({course.reviews} reviews)</span>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">{course.description}</p>

            <div className="mt-8">
              <h2 className="text-xl font-bold">What You&apos;ll Learn</h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {course.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="curriculum">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum" className="mt-4">
                <div className="space-y-4">
                  {course.modules.map((module) => (
                    <Card key={module.id}>
                      <CardHeader className="py-4">
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <CardDescription>
                          {module.lessons.length} lessons •{" "}
                          {module.lessons.reduce(
                            (acc, lesson) =>
                              acc +
                              Number.parseInt(lesson.duration.split(":")[0]) * 60 +
                              Number.parseInt(lesson.duration.split(":")[1]),
                            0,
                          ) / 60}{" "}
                          minutes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <ul className="space-y-2">
                          {module.lessons.map((lesson) => (
                            <li key={lesson.id} className="flex items-center justify-between">
                              <div className="flex items-center">
                                {lesson.completed ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2 h-5 w-5 text-primary"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                ) : (
                                  <Video className="mr-2 h-5 w-5 text-muted-foreground" />
                                )}
                                <span className={lesson.completed ? "text-muted-foreground line-through" : ""}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="instructor" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      <Image
                        src={course.instructorAvatar || "/placeholder.svg"}
                        alt={course.instructor}
                        className="rounded-full h-20 w-20 object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-bold">{course.instructor}</h3>
                        <p className="text-sm text-muted-foreground">{course.instructorTitle}</p>
                        <p className="mt-2">{course.instructorBio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-5xl font-bold">{course.rating}</div>
                      <div className="mt-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-500" : "text-muted"}`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">Based on {course.reviews} reviews</p>
                      <p className="mt-4">Reviews will be displayed here in a real application.</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-2xl">₦{course.price}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Enroll Now</Button>
              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>

              <div className="pt-4 border-t">
                <h3 className="font-medium">This course includes:</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center text-sm">
                    <Video className="mr-2 h-4 w-4 text-muted-foreground" />
                    {totalLessons} on-demand video lessons
                  </li>
                  <li className="flex items-center text-sm">
                    <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                    Downloadable resources
                  </li>
                  <li className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    Full lifetime access
                  </li>
                  <li className="flex items-center text-sm">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    Community access
                  </li>
                </ul>
              </div>

              {completedLessons > 0 && (
                <div className="pt-4 border-t">
                  <h3 className="font-medium">Your progress</h3>
                  <div className="mt-2 space-y-2">
                    <Progress value={progressPercentage} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {completedLessons} of {totalLessons} lessons completed ({progressPercentage}%)
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

