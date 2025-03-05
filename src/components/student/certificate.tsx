import { Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Certificate({ certificate }) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Certificate of Completion</CardTitle>
        <CardDescription>This is to certify that</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <h2 className="text-2xl font-bold">{certificate.studentName}</h2>
        <p>has successfully completed the course</p>
        <h3 className="text-xl font-semibold">{certificate.courseName}</h3>
        <div className="flex justify-center items-center space-x-2">
          <Award className="h-6 w-6 text-yellow-500" />
          <p>
            with a grade of <span className="font-bold">{certificate.grade}</span>
          </p>
        </div>
        <p>on {new Date(certificate.completionDate).toLocaleDateString()}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Certificate ID: {certificate.id}</p>
          <p className="text-sm text-muted-foreground">Verify at tls.com/verify</p>
        </div>
        <Button>Download PDF</Button>
      </CardFooter>
    </Card>
  )
}

