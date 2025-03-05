"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Clock, GraduationCap, LayoutDashboard, ListChecks, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      instructor: "Sarah Johnson",
      progress: 25,
      image: "/placeholder.svg?height=100&width=150",
      lastAccessed: "2 days ago",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      progress: 60,
      image: "/placeholder.svg?height=100&width=150",
      lastAccessed: "Yesterday",
    },
    {
      id: 3,
      title: "UX/UI Design Masterclass",
      instructor: "Emma Rodriguez",
      progress: 10,
      image: "/placeholder.svg?height=100&width=150",
      lastAccessed: "Just now",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Live Q&A Session: Web Development",
      date: "Tomorrow, 3:00 PM",
      instructor: "Sarah Johnson",
    },
    {
      id: 2,
      title: "Workshop: Data Visualization",
      date: "Friday, 2:00 PM",
      instructor: "Michael Chen",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "First Course Completed",
      description: "You've completed your first course!",
      date: "Jan 15, 2024",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "5-Day Streak",
      description: "You've learned for 5 consecutive days!",
      date: "Feb 3, 2024",
      icon: Clock,
    },
    {
      id: 3,
      title: "Quiz Master",
      description: "You've passed 10 quizzes with perfect scores!",
      date: "Feb 10, 2024",
      icon: ListChecks,
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-64 lg:w-72">
          <div className="space-y-4 py-4">
            <div className="px-4 py-2">
              <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">Dashboard</h2>
              <div className="space-y-1">
                <Button
                  variant={activeTab === "overview" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("overview")}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Overview
                </Button>
                <Button
                  variant={activeTab === "my-courses" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("my-courses")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  My Courses
                </Button>
                <Button
                  variant={activeTab === "achievements" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("achievements")}
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Achievements
                </Button>
                <Button
                  variant={activeTab === "profile" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "settings" ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="hidden">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="my-courses">My Courses</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{enrolledCourses.length}</div>
                    <p className="text-xs text-muted-foreground">+1 from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Progress</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Math.round(
                        enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length,
                      )}
                      %
                    </div>
                    <p className="text-xs text-muted-foreground">+5% from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{achievements.length}</div>
                    <p className="text-xs text-muted-foreground">+2 new achievements</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Continue Learning</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="flex items-center space-x-4">
                          <div className="w-16 h-12 overflow-hidden rounded">
                            
                            <Image
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1 space-y-1">
                            <Link href={`/courses/${course.id}`} className="font-medium hover:underline">
                              {course.title}
                            </Link>
                            <div className="text-sm text-muted-foreground">{course.instructor}</div>
                            <div className="w-full">
                              <Progress value={course.progress} className="h-1" />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{course.progress}% complete</span>
                              <span>Last accessed: {course.lastAccessed}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Don't miss these scheduled events</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex flex-col space-y-2 border-b pb-4 last:border-0 last:pb-0">
                          <div className="font-medium">{event.title}</div>
                          <div className="flex justify-between text-sm">
                            <span>{event.date}</span>
                            <span className="text-muted-foreground">with {event.instructor}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            Add to Calendar
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="my-courses" className="space-y-4">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="text-xs text-muted-foreground">Last accessed: {course.lastAccessed}</div>
                      </div>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Link href={`/courses/${course.id}`}>
                        <Button className="w-full">Continue Learning</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement) => (
                  <Card key={achievement.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <achievement.icon className="h-8 w-8 text-primary" />
                        <Badge variant="outline">{achievement.date}</Badge>
                      </div>
                      <CardTitle className="mt-2">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <h2 className="text-2xl font-bold">Profile</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Profile"
                        className="rounded-full h-24 w-24 object-cover"
                      />
                      <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full">
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
                          className="h-4 w-4"
                        >
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </Button>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="grid gap-2">
                      <h4 className="font-medium">Bio</h4>
                      <p className="text-muted-foreground">
                        I'm a software developer passionate about learning new technologies and improving my skills.
                      </p>
                    </div>

                    <div className="grid gap-2">
                      <h4 className="font-medium">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Web Development</Badge>
                        <Badge variant="secondary">Data Science</Badge>
                        <Badge variant="secondary">UX/UI Design</Badge>
                        <Badge variant="secondary">Machine Learning</Badge>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <h4 className="font-medium">Learning Goals</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Complete the Web Development Bootcamp</li>
                        <li>Learn React and build a portfolio project</li>
                        <li>Start learning data visualization</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button>Edit Profile</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <h2 className="text-2xl font-bold">Settings</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <p className="text-sm text-muted-foreground">Manage your account settings and preferences.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about course updates and events.
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Course Recommendations</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive personalized course recommendations based on your interests.
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Learning Reminders</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive reminders to continue your learning journey.
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium">Subscription</h3>
                      <div className="mt-4 p-4 border rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Pro Plan</h4>
                            <p className="text-sm text-muted-foreground">$19.99/month, renews on March 15, 2024</p>
                          </div>
                          <Button variant="outline">Manage</Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-lg font-medium">Danger Zone</h3>
                      <div className="mt-4 p-4 border border-destructive/20 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Delete Account</h4>
                            <p className="text-sm text-muted-foreground">
                              Permanently delete your account and all your data.
                            </p>
                          </div>
                          <Button variant="destructive">Delete Account</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

