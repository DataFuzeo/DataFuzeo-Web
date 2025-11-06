"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, Zap, Code } from "lucide-react"

interface CaseStudyContentProps {
  caseStudy: {
    problem: {
      title: string
      description: string
      points: string[]
    }
    solution: {
      title: string
      description: string
      points: string[]
      techStack: string[]
    }
    impact: {
      title: string
      description: string
    }
  }
}

export function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-3xl font-bold">{caseStudy.problem.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.problem.description}</p>
          <div className="grid gap-4">
            {caseStudy.problem.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10"
              >
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">{caseStudy.solution.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.solution.description}</p>
          <div className="grid gap-4 mb-8">
            {caseStudy.solution.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Technology Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.solution.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold">{caseStudy.impact.title}</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.impact.description}</p>
        </motion.div>
      </div>
    </section>
  )
}
