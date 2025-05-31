'use client'

import { motion } from 'framer-motion'
import { UserPlus, Edit3, Download, CheckCircle, Share } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up for free and access our intuitive resume builder platform with instant access.',
  },
  {
    step: '02',
    icon: Edit3,
    title: 'Build Content',
    description: 'Add your information and let our AI help craft compelling content that stands out.',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Choose Template',
    description: 'Select from professional templates designed to get you noticed by recruiters.',
  },
  {
    step: '04',
    icon: Share,
    title: 'Share & Apply',
    description: 'Share your resume with your network and start applying to your dream jobs.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-foreground/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From zero to hired in four simple steps. Our streamlined process makes resume creation effortless and professional.
          </p>
        </motion.div>

        {/* Steps - Mobile First Approach */}
        <div className="space-y-8 lg:space-y-0">
          {/* Mobile & Tablet Layout (Vertical) */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 left-8 w-0.5 h-16 bg-foreground/20 z-0">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.8, delay: (index * 0.1) + 0.5 }}
                      viewport={{ once: true }}
                      className="w-full bg-foreground/40 origin-top"
                    />
                  </div>
                )}

                <div className="flex items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 rounded-2xl bg-background border-2 border-foreground/20 flex items-center justify-center mb-4 shadow-lg relative z-10"
                    >
                      <span className="text-sm font-bold">{step.step}</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: (index * 0.1) + 0.2 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center shadow-md"
                    >
                      <step.icon className="h-8 w-8" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + 0.3 }}
                    viewport={{ once: true }}
                    className="flex-1 pt-4"
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout (Horizontal) */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Connecting line background */}
              <div className="absolute top-24 left-16 right-16 h-0.5 bg-foreground/10 z-0">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-foreground/30 origin-left"
                />
              </div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="text-center h-full flex flex-col">
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 mx-auto rounded-2xl bg-background border-2 border-foreground/20 flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <span className="text-sm font-bold">{step.step}</span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: (index * 0.15) + 0.2 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:bg-foreground/20 transition-colors duration-300 shadow-md mt-10"
                    >
                      <step.icon className="h-8 w-8" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (index * 0.15) + 0.4 }}
                      viewport={{ once: true }}
                      className="flex-1 flex flex-col"
                    >
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-1">{step.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-background/80 border-2 border-foreground/20 backdrop-blur-md shadow-xl">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span className="text-base font-semibold">Ready in minutes, not hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 