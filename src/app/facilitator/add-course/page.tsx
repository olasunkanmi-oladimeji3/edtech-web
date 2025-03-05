"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AddCoursePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    router.push("/facilitator/dashboard")
  }

  return (
    <div className="container py-8 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle>Add New Course</CardTitle>
          <CardDescription>Fill in the details to submit your course for review.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="title">Course Title</Label>
              <Input id="title" placeholder="Enter the course title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Course Description</Label>
              <Textarea id="description" placeholder="Provide a detailed description of your course" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="personal-development">Personal Development</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="level">Course Level</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select course level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Course Duration (in weeks)</Label>
              <Input id="duration" type="number" min="1" placeholder="Enter course duration" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Course Price (in Naira)</Label>
              <Input id="price" type="number" min="0" placeholder="Enter course price" required />
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Course for Review"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

