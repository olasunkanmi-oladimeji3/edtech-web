"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
}

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
}

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
}

export default function NotFound() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary/20 to-background text-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-9xl font-bold text-primary mb-4" variants={textVariants}>
        404
      </motion.h1>
      <motion.h2 className="text-4xl font-semibold mb-4" variants={textVariants}>
        Oops! Page Not Found
      </motion.h2>
      <motion.p className="text-xl text-muted-foreground mb-8 max-w-md" variants={textVariants}>
        The page you're looking for seems to have wandered off on its own learning journey.
      </motion.p>
      <motion.div variants={buttonVariants}>
        <Link href="/">
          <Button size="lg">Return to Homepage</Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}

