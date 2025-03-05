import { CheckCircle, Circle, ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearningPath({ path }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Learning Path</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {path.map((step, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                {step.completed ? <CheckCircle className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {index < path.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground absolute left-3.5 mt-8" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

