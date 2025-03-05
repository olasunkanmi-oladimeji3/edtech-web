// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import {  Save, ArrowLeft, Eye } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import LessonEditor from "@/components/facilitator/lesson-editor"
// // import QuizEditor from "@/components/facilitator/quiz-editor"
// import CoursePreview from "@/components/facilitator/course-preview"
// export interface Lesson {
//   id: string; // Ensure ID is consistently a string
//   title: string;
//   content: string;
// }

// export interface Quiz {
//   id: string; // Ensure ID is consistently a string
//   title: string;
//   questions: any[]; // Replace `any[]` with a proper type if available
// }


// export default function CourseEditorPage({ params }: { params: { id: string } }) {
//   const router = useRouter()
//   const [activeTab, setActiveTab] = useState("details")
//   const [courseData, setCourseData] = useState({
//     title: "Introduction to Nigerian Business Law",
//     description: "Learn the fundamentals of business law in the Nigerian context.",
//     category: "Business",
//     level: "Intermediate",
//     duration: "8",
//     price: "15000",
//   })
//   const [lessons, setLessons] = useState<Lesson[]>([])
//   const [quizzes, setQuizzes] = useState<Quiz[]>([])
//   const [isPreviewMode, setIsPreviewMode] = useState(false)

//   const handleSave = async () => {
//     console.log("Saving course data...")
//     router.push("/facilitator/dashboard")
//   }

//   const addLesson = () => {
//     setLessons([...lessons, { id: Date.now().toString(), title: "New Lesson", content: "" }])
//   }

//   const addQuiz = () => {
//     setQuizzes([...quizzes, { id: Date.now().toString(), title: "New Quiz", questions: [] }])
//   }

//   const updateLesson = (id: string, updatedLesson: Lesson) => {
//     setLessons(lessons.map((lesson) => (lesson.id === id ? updatedLesson : lesson)))
//   }

//   const deleteLesson = (id: string) => {
//     setLessons(lessons.filter((lesson) => lesson.id !== id))
//   }

//   const updateQuiz = (id: string, updatedQuiz: Quiz) => {
//     setQuizzes(quizzes.map((quiz) => (quiz.id === id ? updatedQuiz : quiz)))
//   }

//   const deleteQuiz = (id: string) => {
//     setQuizzes(quizzes.filter((quiz) => quiz.id !== id))
//   }

//   const handleCourseDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setCourseData({ ...courseData, [name]: value })
//   }

//   return (
//     <div className="container py-8 md:py-12">
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center">
//           <Link href="/facilitator/dashboard">
//             <Button variant="ghost" size="sm">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Dashboard
//             </Button>
//           </Link>
//           <h1 className="text-3xl font-bold ml-4">Edit Course</h1>
//         </div>
//         <div className="flex space-x-2">
//           <Button onClick={() => setIsPreviewMode(!isPreviewMode)}>
//             <Eye className="mr-2 h-4 w-4" />
//             {isPreviewMode ? "Exit Preview" : "Preview Course"}
//           </Button>
//           <Button onClick={handleSave}>
//             <Save className="mr-2 h-4 w-4" />
//             Save Changes
//           </Button>
//         </div>
//       </div>

//       {isPreviewMode ? (
//         <CoursePreview course={courseData} lessons={lessons} quizzes={quizzes} />
//       ) : (
//         <Tabs value={activeTab} onValueChange={setActiveTab}>
//           <TabsList>
//             <TabsTrigger value="details">Course Details</TabsTrigger>
//             <TabsTrigger value="lessons">Lessons</TabsTrigger>
//             <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
//           </TabsList>
//           <TabsContent value="details">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Course Details</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="title">Course Title</Label>
//                     <Input id="title" name="title" value={courseData.title} onChange={handleCourseDataChange} />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="description">Course Description</Label>
//                     <Textarea id="description" name="description" value={courseData.description} onChange={handleCourseDataChange} />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="category">Category</Label>
//                     <Select value={courseData.category} onValueChange={(value) => setCourseData({ ...courseData, category: value })}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select a category" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="business">Business</SelectItem>
//                         <SelectItem value="technology">Technology</SelectItem>
//                         <SelectItem value="design">Design</SelectItem>
//                         <SelectItem value="marketing">Marketing</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="duration">Course Duration (in weeks)</Label>
//                     <Input id="duration" name="duration" type="number" value={courseData.duration} onChange={handleCourseDataChange} />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="price">Course Price (in Naira)</Label>
//                     <Input id="price" name="price" type="number" value={courseData.price} onChange={handleCourseDataChange} />
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       )}
//     </div>
//   )
// }
