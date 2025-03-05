import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FacilitatorLandingPage() {
  const benefits = [
    "Share your expertise with learners across Nigeria",
    "Earn money from your courses",
    "Flexible course creation and management",
    "Access to TLS's growing student base",
    "Support and resources to help you succeed",
  ]

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Become a TLS Facilitator</h1>
        <p className="mt-4 max-w-[700px] text-lg text-muted-foreground">
          Join our community of expert facilitators and help shape the future of education in Nigeria.
        </p>
        <div className="mt-8">
          <Link href="/facilitator/apply">
            <Button size="lg">Apply to Become a Facilitator</Button>
          </Link>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">Why Become a TLS Facilitator?</h2>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 md:mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="max-w-[600px] mx-auto mb-8 text-muted-foreground">
          Join TLS today and start sharing your knowledge with eager learners across Nigeria.
        </p>
        <Link href="/facilitator/apply">
          <Button size="lg">Apply Now</Button>
        </Link>
      </div>
    </div>
  )
}

