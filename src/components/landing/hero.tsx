'use client'

import { Button } from '~/components/ui/button'
import { ArrowRight, FileText, Sparkles, Code, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.05)_50%,transparent_100%)] dark:bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10 dark:opacity-20"
        >
          <div className="w-full h-full border-2 border-foreground/20 rounded-2xl backdrop-blur-sm bg-background/10 shadow-2xl transform rotate-12" />
        </motion.div>
        
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

        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/5 w-16 h-16 opacity-10 dark:opacity-20"
        >
          <div className="w-full h-full border border-foreground/20 rotate-45 backdrop-blur-sm bg-background/10 shadow-lg" />
        </motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-50 dark:opacity-30">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Badge with 3D effect */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 bg-background/80 backdrop-blur-md shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                AI-Powered Resume Builder
              </span>
            </div>
          </motion.div> */}

          {/* Main Heading with 3D effects */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block">Build Your</span>
              <span className="block relative">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative inline-block"
                >
                  Perfect Resume
                  {/* 3D underline effect */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 rounded-full shadow-lg"
                  />
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="absolute -bottom-2 left-2 right-2 h-2 bg-foreground/40 rounded-full blur-sm"
                  />
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Create professional resumes with{' '}
              <span className="font-semibold text-foreground">AI assistance</span>.
              <br />
              Stand out from the crowd with clean, modern designs that get you{' '}
              <span className="font-semibold text-foreground">noticed</span>.
            </motion.p>
          </div>

          {/* Enhanced CTA Buttons with 3D effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-foreground/20 to-foreground/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <Button asChild size="lg" className="relative text-lg px-10 py-2 h-auto rounded-2xl bg-foreground text-background hover:bg-foreground/90 shadow-2xl border border-foreground/20">
                <Link href="/dashboard" className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  Start Building
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-2 h-auto rounded-2xl border-2 border-foreground/30 bg-background/80 backdrop-blur-md hover:bg-foreground/5 shadow-xl"
              >
                <Link href="#features" className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  Learn More
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with 3D cards */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-6 md:gap-12 pt-20"
          >
            {[
              { value: "10K+", label: "Resumes Created", icon: FileText },
              { value: "95%", label: "Success Rate", icon: Sparkles },
              { value: "24/7", label: "AI Support", icon: Code }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-b from-foreground/10 to-transparent rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative text-center p-6 rounded-3xl border border-foreground/10 bg-background/60 backdrop-blur-md shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
} 