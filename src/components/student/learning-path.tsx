import { CheckCircle, Circle, ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Step = {
  title: string
  description: string
  completed: boolean
}

type LearningPathProps = {
  path: Step[]
}

export default function LearningPath({ path }: LearningPathProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Learning Path</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-4">
          {path.map((step, index) => (
            <div key={index} className="flex items-center relative">
              {/* Status Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                {step.completed ? <CheckCircle className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
              </div>

              {/* Step Details */}
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow Icon (Only between steps) */}
              {index < path.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground ml-2" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
