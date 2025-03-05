'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Save, ArrowLeft, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoursePreview from "@/components/facilitator/course-preview";


export interface Lesson {
  id: string;
  title: string;
  content: string;
  materials?: Material[];
}

export interface Quiz {
  id: string;
  title: string;
}

export interface Material {
  name: string;
}

// Define the expected structure of params

export default function CourseEditorPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("details");
  const [courseData, setCourseData] = useState({
    title: "Introduction to Nigerian Business Law",
    description: "Learn the fundamentals of business law in the Nigerian context.",
    category: "business",
    level: "intermediate",
    duration: "8",
    price: "15000",
  });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleSave = async () => {
    console.log("Saving course data...");
    setQuizzes([])
    setLessons([])
    router.push("/facilitator/dashboard");
  };

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
        <CoursePreview lessons={lessons} quizzes={quizzes} />
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
                  <div className="space-y-2">
                    <Label htmlFor="title">Course Title</Label>
                    <Input id="title" name="title" value={courseData.title} onChange={(e) => setCourseData({ ...courseData, title: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Course Description</Label>
                    <Textarea id="description" name="description" value={courseData.description} onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} />
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
