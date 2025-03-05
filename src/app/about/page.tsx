import Image from "next/image"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const missionPoints = [
    "Provide world-class education to Nigerian learners",
    "Bridge the skills gap in the Nigerian job market",
    "Foster innovation and entrepreneurship",
    "Promote lifelong learning and continuous skill development",
  ]

  const teamMembers = [
    { name: "Fela Bank-Olemoh", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
    { name: "Tolu Okula", role: "Managing Director", image: "/placeholder.svg?height=300&width=300" },

  ]

  return (
    <div className="container py-12 md:py-24 px-11">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About TLS - The Learning Space</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Empowering learners with world-class digital courses and skills for the future.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <ul className="space-y-4">
            {missionPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="mr-2 h-6 w-6 text-primary flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="TLS Mission"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center mx-auto">
              <div className="relative h-[200px] w-[200px] mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-muted py-12 rounded-lg ">
        <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Be part of the educational revolution in Africa. Whether you&apos;re a learner, educator, or partner, there&apos;s a
          place for you at TLS.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Explore Courses</Button>
          <Button size="lg" variant="outline">
            Become a Facilitator
          </Button>
        </div>
      </section>
    </div>
  )
}

