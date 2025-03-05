import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedCourses from "@/components/featured-courses"
import TestimonialsSection from "@/components/testimonials-section"
import HeroSection from "@/components/hero-section"
import SuccessStories from "@/components/success-stories"
import FeaturedCategories from "@/components/category-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        < FeaturedCategories />

        <section className="py-5 md:py-12 lg:py-11 bg-neutral-50 px-11">
          <div className="mx-auto flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your learning journey with TLS in three simple steps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 pt-8 md:pt-12">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">1. Choose Your Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse our extensive library of courses taught by Nigerian industry experts.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">2. Learn at Your Pace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access course materials anytime, anywhere, and learn at your own speed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">3. Earn Your Certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete your course and receive a recognized certificate to boost your career.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <FeaturedCourses />

        <SuccessStories />

        <TestimonialsSection />

        <section className="container py-12 md:py-24 lg:py-32 px-8">
          <div className="mx-auto flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Future?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of Nigerian professionals already learning on TLS.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/courses">
                <Button className="w-full sm:w-auto">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" className="w-full sm:w-auto">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

