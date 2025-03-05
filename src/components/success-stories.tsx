import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Oluwaseun Adebayo",
      role: "Founder, TechNaija",
      story:
        "TLS's Nigerian Tech Entrepreneurship course gave me the knowledge and confidence to start my own tech company. Now, TechNaija is helping businesses across Nigeria embrace digital transformation.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Amina Yusuf",
      role: "Data Scientist, MTN Nigeria",
      story:
        "The Data Science for Nigerian Industries course helped me transition from a junior analyst to a senior data scientist role. I'm now leading data-driven initiatives that are improving telecom services across Nigeria.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Chidi Okonkwo",
      role: "Digital Marketing Manager, Jumia",
      story:
        "Thanks to TLS's Digital Marketing course, I've been able to create campaigns that truly resonate with Nigerian consumers. Our conversion rates have increased by 150% since I implemented the strategies I learned.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-11 px-16 bg-neutral-100">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how TLS has transformed careers and businesses across Nigeria.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {stories.map((story) => (
          <Card key={story.id} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={story.image} alt={story.name} />
                  <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{story.name}</CardTitle>
                  <CardDescription>{story.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-justify">{story.story}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/success-stories">
          <Button variant="outline">
            Read More Success Stories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

