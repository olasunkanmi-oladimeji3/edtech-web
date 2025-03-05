"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Save, ArrowLeft, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import LessonEditor from "@/components/facilitator/lesson-editor"
// import QuizEditor from "@/components/facilitator/quiz-editor"
import CoursePreview from "@/components/facilitator/course-preview"

interface CourseEditorPageProps {
  params: { id: string }
}

interface Lesson {
  id: number
  title: string
  content: string
}

interface Quiz {
  id: number
  title: string
  questions: any[]
}

export default function CourseEditorPage({ params }: CourseEditorPageProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("details")
  const [courseData, setCourseData] = useState({
    title: "Introduction to Nigerian Business Law",
    description: "Learn the fundamentals of business law in the Nigerian context.",
    category: "Business",
    level: "Intermediate",
    duration: "8",
    price: "15000",
  })
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const handleSave = async () => {
    console.log("Saving course data...")
    router.push("/facilitator/dashboard")
  }

  const addLesson = () => {
    setLessons([...lessons, { id: Date.now(), title: "New Lesson", content: "" }])
  }

  const addQuiz = () => {
    setQuizzes([...quizzes, { id: Date.now(), title: "New Quiz", questions: [] }])
  }

  const updateLesson = (id: number, updatedLesson: Lesson) => {
    setLessons(lessons.map((lesson) => (lesson.id === id ? updatedLesson : lesson)))
  }

  const deleteLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id))
  }

  const updateQuiz = (id: number, updatedQuiz: Quiz) => {
    setQuizzes(quizzes.map((quiz) => (quiz.id === id ? updatedQuiz : quiz)))
  }

  const deleteQuiz = (id: number) => {
    setQuizzes(quizzes.filter((quiz) => quiz.id !== id))
  }

  const handleCourseDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCourseData({ ...courseData, [name]: value })
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Link href="/facilitator/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold ml-4">Edit Course</h1>
        </div>
        <div className="flex space-x-2">
          <Button onClick={() => setIsPreviewMode(!isPreviewMode)}>
            <Eye className="mr-2 h-4 w-4" />
            {isPreviewMode ? "Exit Preview" : "Preview Course"}
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {isPreviewMode ? (
        <CoursePreview course={courseData} lessons={lessons} quizzes={quizzes} />
      ) : (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="details">Course Details</TabsTrigger>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Course Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input id="title" name="title" value={courseData.title} onChange={handleCourseDataChange} />
                  <Textarea id="description" name="description" value={courseData.description} onChange={handleCourseDataChange} />
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
