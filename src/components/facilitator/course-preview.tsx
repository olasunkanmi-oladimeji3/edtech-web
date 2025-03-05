"use client"

import { useState } from "react"
import { ChevronRight, PlayCircle, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface Material {
  name: string;
}

interface Lesson {
  id: string;
  title: string;
  content: string;
  materials?: Material[];
}

interface Quiz {
  id: string;
  title: string;
}

interface CoursePreviewProps {
  course: any;
  lessons: Lesson[];
  quizzes: Quiz[];
}

export default function CoursePreview({ course, lessons, quizzes }: CoursePreviewProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3 bg-muted p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Course Curriculum</h3>
        <Accordion type="single" collapsible className="w-full">
          {lessons.map((lesson, index) => (
            <AccordionItem key={lesson.id} value={`lesson-${lesson.id}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Lesson {index + 1}: {lesson.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button variant="ghost" className="w-full justify-start" onClick={() => setSelectedLesson(lesson)}>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  View Lesson
                </Button>
                {lesson.materials?.map((material, mIndex) => (
                  <Button key={mIndex} variant="ghost" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    {material.name}
                  </Button>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
          {quizzes.map((quiz, index) => (
            <AccordionItem key={quiz.id} value={`quiz-${quiz.id}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4" />
                  Quiz {index + 1}: {quiz.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button variant="ghost" className="w-full justify-start">
                  Take Quiz
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-full md:w-2/3">
        {selectedLesson ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedLesson.title}</h2>
            <div className="prose max-w-none">{selectedLesson.content}</div>
            {selectedLesson.materials?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Lesson Materials</h3>
                <ul className="space-y-2">
                  {selectedLesson.materials.map((material, index) => (
                    <li key={index} className="flex items-center">
                      <FileText className="mr-2 h-4 w-4" />
                      <a href="#" className="text-primary hover:underline">
                        {material.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select a lesson to preview its content
          </div>
        )}
      </div>
    </div>
  )
}
