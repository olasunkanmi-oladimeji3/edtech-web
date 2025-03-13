"use client"

import { motion } from "framer-motion"

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
}

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
}

const loadingTextVariants = {
  start: { opacity: 0.5 },
  end: { opacity: 1 },
}

const loadingTextTransition = {
  duration: 0.5,
  yoyo: Number.POSITIVE_INFINITY,
  ease: "easeInOut",
}

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center">
        <motion.div
          className="flex justify-center mb-4 space-x-2"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="w-3 h-3 bg-primary rounded-full"
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            />
          ))}
        </motion.div>
        <motion.span
          className="text-lg font-medium text-primary"
          variants={loadingTextVariants}
          initial="start"
          animate="end"
          transition={loadingTextTransition}
        >
          Loading...
        </motion.span>
      </div>
    </div>
  )
}

