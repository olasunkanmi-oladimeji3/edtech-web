"use client"

import { useState } from "react"
import { PlusCircle, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function QuizEditor({ quiz, index }) {
  const [quizData, setQuizData] = useState(quiz)

  const handleQuizChange = (e) => {
    const { name, value } = e.target
    setQuizData({ ...quizData, [name]: value })
  }

  const addQuestion = () => {
    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions,
        { id: Date.now(), text: "", options: [{ id: Date.now(), text: "", isCorrect: false }] },
      ],
    })
  }

  const handleQuestionChange = (questionId, e) => {
    const { name, value } = e.target
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((q) => (q.id === questionId ? { ...q, [name]: value } : q)),
    })
  }

  const addOption = (questionId) => {
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((q) =>
        q.id === questionId ? { ...q, options: [...q.options, { id: Date.now(), text: "", isCorrect: false }] } : q,
      ),
    })
  }

  const handleOptionChange = (questionId, optionId, e) => {
    const { name, value, type, checked } = e.target
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((o) =>
                o.id === optionId ? { ...o, [name]: type === "checkbox" ? checked : value } : o,
              ),
            }
          : q,
      ),
    })
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`quiz-${index}`}>
        <AccordionTrigger>
          Quiz {index + 1}: {quizData.title}
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`quiz-title-${index}`}>Quiz Title</Label>
              <Input id={`quiz-title-${index}`} name="title" value={quizData.title} onChange={handleQuizChange} />
            </div>
            <div className="space-y-4">
              {quizData.questions.map((question, qIndex) => (
                <div key={question.id} className="border p-4 rounded-md">
                  <Label htmlFor={`question-${qIndex}`}>Question {qIndex + 1}</Label>
                  <Input
                    id={`question-${qIndex}`}
                    name="text"
                    value={question.text}
                    onChange={(e) => handleQuestionChange(question.id, e)}
                    className="mb-2"
                  />
                  <div className="space-y-2">
                    {question.options.map((option, oIndex) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`option-correct-${qIndex}-${oIndex}`}
                          name="isCorrect"
                          checked={option.isCorrect}
                          onCheckedChange={(checked) =>
                            handleOptionChange(question.id, option.id, {
                              target: { name: "isCorrect", type: "checkbox", checked },
                            })
                          }
                        />
                        <Input
                          id={`option-text-${qIndex}-${oIndex}`}
                          name="text"
                          value={option.text}
                          onChange={(e) => handleOptionChange(question.id, option.id, e)}
                          className="flex-grow"
                        />
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => addOption(question.id)} variant="outline" size="sm" className="mt-2">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Option
                  </Button>
                </div>
              ))}
            </div>
            <Button onClick={addQuestion} variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Question
            </Button>
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Quiz
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

