"use client"

import { useState } from "react"
import { Upload, Paperclip, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AssignmentSubmission({ assignment }) {
  const [files, setFiles] = useState([])
  const [comment, setComment] = useState("")

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files)
    setFiles([...files, ...newFiles])
  }

  const removeFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically upload the files and send the comment to your backend
    console.log("Submitting assignment:", { files, comment })
    // Reset form
    setFiles([])
    setComment("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{assignment.title}</CardTitle>
        <CardDescription>Due: {new Date(assignment.dueDate).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                Upload Files
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                    >
                      <span>Upload files</span>
                      <Input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        multiple
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            {files.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-medium text-gray-700">Uploaded files:</h4>
                <ul className="mt-1 space-y-1">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between py-1">
                      <div className="flex items-center">
                        <Paperclip className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-500">{file.name}</span>
                      </div>
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(file)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Comment
              </label>
              <Textarea
                id="comment"
                rows={3}
                placeholder="Add a comment to your submission..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit}>
          Submit Assignment
        </Button>
      </CardFooter>
    </Card>
  )
}

