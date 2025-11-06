// "use client"
// import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { ScrollAnimation } from "@/components/scroll-animation"
// import Link from "next/link"

// const featuredCases = [
//   {
//     id: 1,
//     title: "Reduced fraud detection time by 45%",
//     subtitle: "AI-Powered Financial Security",
//     problem: "Manual fraud detection was taking 24-48 hours, causing significant losses",
//     solution: "Implemented real-time ML algorithms with automated decision making",
//     impact: "Reduced detection time to under 2 hours with 94% accuracy",
//     image: "/financial-fraud-detection-ai-dashboard.jpg",
//     metrics: [
//       { icon: Clock, label: "Detection Time", value: "45% faster" },
//       { icon: TrendingUp, label: "Accuracy", value: "94%" },
//       { icon: Users, label: "False Positives", value: "-67%" },
//     ],
//     slug: "fraud-detection-case-study",
//   },
//   {
//     id: 2,
//     title: "Automated 80% of customer support queries",
//     subtitle: "Intelligent Customer Service AI",
//     problem: "Customer support team was overwhelmed with repetitive queries",
//     solution: "Deployed conversational AI with natural language understanding",
//     impact: "Automated 80% of queries while improving customer satisfaction",
//     image: "/ai-chatbot-customer-service-interface.jpg",
//     metrics: [
//       { icon: TrendingUp, label: "Automation", value: "80%" },
//       { icon: Users, label: "Satisfaction", value: "+35%" },
//       { icon: Clock, label: "Response Time", value: "Instant" },
//     ],
//     slug: "customer-ai-case-study",
//   },
// ]

// export function FeaturedCaseStudies() {
//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <ScrollAnimation>
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured <span className="gradient-text">Case Studies</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Deep dives into how we've solved complex challenges for our clients
//             </p>
//           </div>
//         </ScrollAnimation>

//         <div className="space-y-20">
//           {featuredCases.map((caseStudy, index) => (
//             <ScrollAnimation key={caseStudy.id} direction={index % 2 === 0 ? "left" : "right"}>
//               <div
//                 className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
//               >
//                 {/* Image */}
//                 <div className="flex-1">
//                   <div className="relative group">
//                     <img
//                       src={caseStudy.image || "/placeholder.svg"}
//                       alt={caseStudy.title}
//                       className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="flex-1 space-y-6">
//                   <div>
//                     <h3 className="text-2xl md:text-3xl font-bold mb-2">{caseStudy.title}</h3>
//                     <p className="text-lg text-primary font-medium">{caseStudy.subtitle}</p>
//                   </div>

//                   {/* Problem, Solution, Impact */}
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-red-400 mb-2">Problem</h4>
//                       <p className="text-muted-foreground">{caseStudy.problem}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-yellow-400 mb-2">Solution</h4>
//                       <p className="text-muted-foreground">{caseStudy.solution}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-green-400 mb-2">Impact</h4>
//                       <p className="text-muted-foreground">{caseStudy.impact}</p>
//                     </div>
//                   </div>

//                   {/* Metrics */}
//                   <div className="grid grid-cols-3 gap-4">
//                     {caseStudy.metrics.map((metric, metricIndex) => (
//                       <div key={metricIndex} className="text-center p-4 glass rounded-lg">
//                         <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
//                         <div className="font-bold text-lg">{metric.value}</div>
//                         <div className="text-sm text-muted-foreground">{metric.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <Button
//                     asChild
//                     className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
//                   >
//                     <Link href={`/case-studies/${caseStudy.slug}`}>
//                       Read Full Case Study
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </Link>
//                   </Button>
//                 </div>
//               </div>
//             </ScrollAnimation>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"
import { ArrowRight, Clock, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import Link from "next/link"

// Map string names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Clock,
  TrendingUp,
  Users,
}

export function FeaturedCaseStudies() {
  // Featured case studies data
  const featuredCases = [
    {
      id: 1,
      title: "Nexa AI Voice Receptionist",
      subtitle: "Human-like AI Voice Assistant for Appointment Booking",
      image: "/nexa.jpg",
      challenge: "Traditional appointment booking processes rely heavily on manual handling or complex IVR systems that frustrate customers and burden staff.",
      solution: "AI-powered voice receptionist built on Vapi.ai, designed to autonomously handle inbound voice calls, manage scheduling, and respond naturally like a human assistant.",
      impact: "98% appointment completion rate with <3 second response time and 85% reduction in manual workload.",
      metrics: [
        { icon: "Clock", label: "Response Time", value: "<3 sec" },
        { icon: "TrendingUp", label: "Completion Rate", value: "98%" },
        { icon: "Users", label: "Workload Reduction", value: "85%" },
      ],
      slug: "nexa-ai-project",
    },
    {
      id: 2,
      title: "AURA — AI Document Intelligence System",
      subtitle: "RAG + LangGraph Integration for Offline Document Reasoning",
      image: "/aura.jpg",
      challenge: "Modern researchers and professionals face severe inefficiencies in understanding and analyzing large, complex documents with traditional search tools lacking context awareness.",
      solution: "Fully modular document intelligence pipeline integrating RAG with LangGraph for graph-based reasoning, local embedding indexing, and offline inference capabilities.",
      impact: "95% reduction in document review time with 100% data privacy and real-time response capabilities.",
      metrics: [
        { icon: "Clock", label: "Time Reduction", value: "95%" },
        { icon: "TrendingUp", label: "Response Accuracy", value: "82%" },
        { icon: "Users", label: "Data Privacy", value: "100%" },
      ],
      slug: "aura-ai-project",
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into how we've solved complex challenges for our clients
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-20">
          {featuredCases.map((caseStudy, index) => (
            <ScrollAnimation key={caseStudy.id} direction={index % 2 === 0 ? "left" : "right"}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img
                      src={caseStudy.image || "/placeholder.svg"}
                      alt={caseStudy.title}
                      className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{caseStudy.title}</h3>
                    <p className="text-lg text-primary font-medium">{caseStudy.subtitle}</p>
                  </div>

                  {/* Problem, Solution, Impact */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-400 mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-2">Solution</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Impact</h4>
                      <p className="text-muted-foreground">{caseStudy.impact}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {caseStudy.metrics.map((metric, metricIndex) => {
                      const Icon = iconMap[metric.icon] || null
                      return (
                        <div key={metricIndex} className="text-center p-4 glass rounded-lg">
                          {Icon && <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />}
                          <div className="font-bold text-lg">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      )
                    })}
                  </div>

                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
