import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Chidi Okonkwo",
      role: "Software Developer at Paystack",
      content:
        "TLS's Web Development Bootcamp was a game-changer for me. I went from struggling to find work to landing a job at one of Nigeria's top fintech companies!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Amina Yusuf",
      role: "Data Analyst at MTN Nigeria",
      content:
        "The Data Science for Nigerian Industries course provided me with practical skills that I use daily in my job. It's tailored perfectly for the Nigerian market.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Oluwaseun Adebayo",
      role: "Founder of TechNaija",
      content:
        "As an entrepreneur, the Nigerian Tech Entrepreneurship course gave me invaluable insights into navigating the local tech ecosystem. Highly recommended!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Ngozi Eze",
      role: "Digital Marketing Manager at Jumia",
      content:
        "The Digital Marketing for Nigerian Businesses course helped me understand local consumer behavior and tailor our strategies accordingly. It's been transformative for our campaigns.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-neutral-50">
      <div className="mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from Nigerian professionals who have transformed their careers with TLS.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 pt-8 md:pt-12 px-5">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-0 shadow-md">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-justify">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

