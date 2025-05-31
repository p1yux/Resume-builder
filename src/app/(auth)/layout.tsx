'use client'

import Image from 'next/image'
import { Card, CardContent } from '~/components/ui/card'
import { Navigation, Footer } from '~/components/landing'
import { motion } from 'framer-motion'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center p-6 md:p-10 relative w-full overflow-hidden">
      {/* Enhanced Background Pattern - Same as Hero */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.05)_50%,transparent_100%)] dark:bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
        
        
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-10 dark:opacity-20"
        >
          <div className="w-full h-full border border-foreground/20 rounded-full backdrop-blur-sm bg-background/10 shadow-xl" />
        </motion.div>


        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-50 dark:opacity-30">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
        </div>
      </div>

      <Navigation />
      <div className="w-full max-w-sm md:max-w-3xl relative z-10">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden py-0 bg-background/80 backdrop-blur-md border border-foreground/20 shadow-2xl">
            <CardContent className="grid p-0 md:grid-cols-2">
              {children}
              <div className="relative hidden md:block">
                <Image
                  width={500}
                  height={600}
                  src="/auth.jpg"
                  alt="auth"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
