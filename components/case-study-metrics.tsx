// "use client"

// import { motion } from "framer-motion"
// import { TrendingUp, TrendingDown } from "lucide-react"

// interface Metric {
//   label: string
//   value: string
//   change: string
// }

// interface CaseStudyMetricsProps {
//   metrics: Metric[]
// }

// export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
//   return (
//     <section className="py-16 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl font-bold mb-4">Key Results</h2>
//           <p className="text-muted-foreground text-lg">Measurable impact delivered through our solution</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {metrics.map((metric, index) => (
//             <motion.div
//               key={metric.label}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="glass rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
//             >
//               <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
//               <div className="text-sm text-muted-foreground mb-3">{metric.label}</div>
//               <div
//                 className={`flex items-center justify-center gap-1 text-sm font-medium ${
//                   metric.change.startsWith("+") ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {metric.change.startsWith("+") ? (
//                   <TrendingUp className="w-4 h-4" />
//                 ) : (
//                   <TrendingDown className="w-4 h-4" />
//                 )}
//                 {metric.change}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"

interface Metric {
  label: string
  value: string
  change?: string // made optional to avoid errors
}

interface CaseStudyMetricsProps {
  metrics: Metric[]
}

export function CaseStudyMetrics({ metrics }: CaseStudyMetricsProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Key Results</h2>
          <p className="text-muted-foreground text-lg">
            Measurable impact delivered through our solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                {metric.label}
              </div>
              <div
                className={`flex items-center justify-center gap-1 text-sm font-medium ${
                  metric.change?.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {metric.change?.startsWith("+") ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {metric.change ?? "N/A"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
