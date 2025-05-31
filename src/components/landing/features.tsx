'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  Palette, 
  Download, 
  Zap, 
  Shield, 
  Globe,
  FileText,
  Users,
  Star
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Content',
    description: 'Smart suggestions and content generation to help you write compelling resume sections that stand out.',
  },
  {
    icon: Palette,
    title: 'Professional Templates',
    description: 'Choose from a variety of clean, modern templates designed by industry professionals.',
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Export your resume in PDF, Word, or other formats optimized for applicant tracking systems.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Build your resume in minutes, not hours. Our streamlined process gets you results quickly.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is secure and private. We never share your information with third parties.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'Templates and formats that meet international hiring standards and expectations.',
  },
]

const stats = [
  {
    icon: FileText,
    value: '50K+',
    label: 'Templates Downloaded',
  },
  {
    icon: Users,
    value: '25K+',
    label: 'Happy Users',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'User Rating',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose Podium?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create a standout resume that gets you hired faster.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-foreground/10 bg-background/50 backdrop-blur-sm hover:border-foreground/20 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-foreground/5 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Professionals Worldwide
            </h3>
            <p className="text-muted-foreground">
              Join thousands of job seekers who have successfully landed their dream jobs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-background flex items-center justify-center">
                  <stat.icon className="h-8 w-8" />
                </div>
                {/* <div className="text-3xl font-bold mb-2">{stat.value}</div> */}
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 