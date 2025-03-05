"use client"

import { useState } from "react"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CourseFeedback({ courseId, courseName }) {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", { courseId, rating, feedback })
    // Reset form
    setRating(0)
    setFeedback("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Feedback</CardTitle>
        <CardDescription>Share your thoughts on {courseName}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`focus:outline-none ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    onClick={() => setRating(star)}
                  >
                    <Star className="h-8 w-8 fill-current" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                Your Feedback
              </label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your experience with this course..."
                rows={4}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit}>
          Submit Feedback
        </Button>
      </CardFooter>
    </Card>
  )
}

