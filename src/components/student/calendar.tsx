"use client"

import { useState } from "react"
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isToday, isSameMonth, isWithinInterval } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data - in a real app, this would come from your API
const mockEvents = [
  { id: 1, title: "Business Law Lecture", start: new Date(2023, 6, 15, 10, 0), end: new Date(2023, 6, 15, 12, 0) },
  {
    id: 2,
    title: "Marketing Strategy Assignment Due",
    start: new Date(2023, 6, 18, 23, 59),
    end: new Date(2023, 6, 18, 23, 59),
  },
  { id: 3, title: "Group Project Meeting", start: new Date(2023, 6, 20, 14, 0), end: new Date(2023, 6, 20, 16, 0) },
]

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const startDate = startOfWeek(currentDate)
  const endDate = endOfWeek(currentDate)
  const days = eachDayOfInterval({ start: startDate, end: endDate })

  const nextWeek = () => setCurrentDate((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7))
  const prevWeek = () => setCurrentDate((date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7))

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Your Schedule</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={prevWeek}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium">
              {format(startDate, "MMM d")} - {format(endDate, "MMM d, yyyy")}
            </span>
            <Button variant="outline" size="icon" onClick={nextWeek}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-medium">
              {day}
            </div>
          ))}
          {days.map((day) => (
            <div
              key={day.toString()}
              className={`p-2 border rounded-md ${
                isToday(day)
                  ? "bg-primary text-primary-foreground"
                  : isSameMonth(day, currentDate)
                    ? "bg-background"
                    : "bg-muted text-muted-foreground"
              }`}
            >
              <div className="text-center">{format(day, "d")}</div>
              <div className="mt-1 space-y-1">
                {mockEvents
                  .filter((event) =>
                    isWithinInterval(day, { start: startOfWeek(event.start), end: endOfWeek(event.end) }),
                  )
                  .map((event) => (
                    <div key={event.id} className="text-xs truncate bg-secondary text-secondary-foreground p-1 rounded">
                      {event.title}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

