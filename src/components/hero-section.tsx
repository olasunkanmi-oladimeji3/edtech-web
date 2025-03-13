import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-primary/20 to-background">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4 container px-4 md:px-16 md:pb-11 sm:pt-16">
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-left md:text-center sm:text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Empower Your Future with TLS
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Nigeria&apos;s premier EdTech platform. Gain world-class skills,
              boost your career, and shape the future of our nation.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/courses">
              <Button className="w-full sm:w-auto">
                Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="outline" className="w-full sm:w-auto">
                Start Learning for Free
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[350px] w-full overflow-hidden bg-muted md:h-[450px] lg:h-[500px]">
            <Image
              width={100}
              height={300}
              src="/study-group.jpg"
              alt="Nigerian students learning online"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



