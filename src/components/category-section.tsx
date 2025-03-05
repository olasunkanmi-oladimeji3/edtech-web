import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card,CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"


export default function FeaturedCategories() {
  const categories = [
    {
      id: 1,
      title: "Business",
      description: "Explore courses on Nigerian Tech Entrepreneurship and more.",
      image: "/culture.png",
    },
    {
      id: 2,
      title: "Data Science",
      description: "Learn Data Science for Nigerian Industries and advanced techniques.",
      image: "/webdev.png",
    },
    {
      id: 3,
      title: "Marketing",
      description: "Master Digital Marketing strategies for Nigerian Businesses.",
      image: "/bank.jpg",
    },
    {
      id: 4,
      title: "Finance",
      description: "Explore Fintech Innovation and financial solutions in Nigeria.",
      image: "/bank.jpg",
    },
    {
      id: 5,
      title: "Software Development",
      description: "Learn Sustainable Agriculture Techniques suited for Nigeria.",
      image: "/Pictuttre5.png",
    },
    {
      id: 6,
      title: "Arts & Culture",
      description: "Discover Nigerian Art and Design in traditional and modern forms.",
      image: "/culture.png",
    },
  ]

  return (
    <section className="container py-8 md:py-12 px-4 md:px-8 bg-neutral-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Explore Categories</h2>
        <p className="mt-2 text-muted-foreground">Choose from diverse categories designed to empower Nigeria&apos;s future leaders.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden border shadow-md rounded-lg">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="object-cover w-full h-full transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-base line-clamp-1 text-center">{category.title}</CardTitle>
              <CardDescription className="line-clamp-2 text-sm text-center">{category.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href={`/courses?category=${category.title.toLowerCase()}`} className="w-full">
                <Button className="w-full">Explore {category.title}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/courses">
          <Button variant="outline">
            View All Categories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
