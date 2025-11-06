// import { notFound } from "next/navigation"
// import { CaseStudyHero } from "@/components/case-study-hero"
// import { CaseStudyMetrics } from "@/components/case-study-metrics"
// import { CaseStudyContent } from "@/components/case-study-content"
// import { CaseStudyCta } from "@/components/case-study-cta"

// const caseStudies = {
//   "fraud-detection-case-study": {
//     title: "AI-Powered Financial Security",
//     subtitle: "Reduced fraud detection time by 45%",
//     client: "Global Financial Institution",
//     industry: "Financial Services",
//     duration: "8 months",
//     team: "12 specialists",
//     tags: ["Machine Learning", "Fraud Detection", "Real-time Processing", "Financial AI"],
//     image: "/financial-fraud-detection-ai-dashboard.jpg",
//     overview:
//       "A leading financial institution was struggling with manual fraud detection processes that took 24-48 hours, resulting in significant financial losses and poor customer experience. We implemented a comprehensive AI solution that revolutionized their fraud detection capabilities.",
//     challenge:
//       "The client's existing fraud detection system relied heavily on manual review processes, causing delays in transaction approvals and allowing fraudulent activities to go undetected for extended periods. The system had a high false positive rate of 23%, leading to legitimate transactions being blocked and customer frustration.",
//     solution:
//       "We developed a real-time machine learning system using advanced algorithms including Random Forest, Neural Networks, and Gradient Boosting. The solution integrated seamlessly with their existing infrastructure and included automated decision-making capabilities for low-risk transactions.",
//     implementation: [
//       "Data pipeline architecture for real-time transaction processing",
//       "Machine learning model training on 5+ years of historical data",
//       "Integration with existing banking systems and APIs",
//       "Dashboard development for fraud analysts",
//       "Automated alerting and case management system",
//     ],
//     results: [
//       "Reduced fraud detection time from 24-48 hours to under 2 hours",
//       "Improved accuracy to 94% with 67% reduction in false positives",
//       "Prevented $12M in potential fraud losses in the first year",
//       "Increased customer satisfaction by 28% due to fewer blocked legitimate transactions",
//     ],
//     techStack: [
//       "Python",
//       "TensorFlow",
//       "Apache Kafka",
//       "Redis",
//       "PostgreSQL",
//       "Docker",
//       "Kubernetes",
//       "AWS",
//       "React",
//       "Node.js",
//     ],
//     metrics: [
//       { label: "Detection Speed", value: "45% faster", description: "From 24-48 hours to under 2 hours" },
//       { label: "Accuracy Rate", value: "94%", description: "Significant improvement from 77%" },
//       { label: "False Positives", value: "-67%", description: "Reduced from 23% to 7.6%" },
//       { label: "Cost Savings", value: "$12M", description: "Prevented fraud losses in year 1" },
//     ],
//   },
//   "customer-ai-case-study": {
//     title: "Intelligent Customer Service AI",
//     subtitle: "Automated 80% of customer support queries",
//     client: "E-commerce Platform",
//     industry: "Retail Technology",
//     duration: "6 months",
//     team: "8 specialists",
//     tags: ["Natural Language Processing", "Conversational AI", "Customer Service", "Automation"],
//     image: "/ai-chatbot-customer-service-interface.jpg",
//     overview:
//       "A rapidly growing e-commerce platform was overwhelmed with customer support queries, leading to long wait times and decreased customer satisfaction. We deployed an intelligent conversational AI system that transformed their customer service operations.",
//     challenge:
//       "The client's customer support team was handling over 10,000 queries daily, with average response times of 4-6 hours. 70% of queries were repetitive, involving order status, returns, and basic product information. The team was struggling to scale with business growth.",
//     solution:
//       "We implemented a sophisticated conversational AI system with natural language understanding, integrated with their existing CRM and order management systems. The solution included sentiment analysis, escalation protocols, and continuous learning capabilities.",
//     implementation: [
//       "Natural language processing model development",
//       "Integration with existing CRM and order management systems",
//       "Multi-channel deployment (website, mobile app, social media)",
//       "Agent handoff system for complex queries",
//       "Analytics dashboard for performance monitoring",
//     ],
//     results: [
//       "Automated 80% of customer support queries",
//       "Reduced average response time to under 30 seconds",
//       "Increased customer satisfaction score by 35%",
//       "Enabled 24/7 customer support coverage",
//     ],
//     techStack: [
//       "Python",
//       "spaCy",
//       "BERT",
//       "Rasa",
//       "MongoDB",
//       "FastAPI",
//       "WebSocket",
//       "React",
//       "TypeScript",
//       "AWS Lambda",
//     ],
//     metrics: [
//       { label: "Query Automation", value: "80%", description: "Automated resolution without human intervention" },
//       { label: "Response Time", value: "30 seconds", description: "Average response time improvement" },
//       { label: "Satisfaction Increase", value: "+35%", description: "Customer satisfaction score improvement" },
//       { label: "Cost Reduction", value: "60%", description: "Support operational cost savings" },
//     ],
//   },
// }

// interface PageProps {
//   params: {
//     slug: string
//   }
// }

// export default function CaseStudyPage({ params }: PageProps) {
//   const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

//   if (!caseStudy) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <CaseStudyHero caseStudy={caseStudy} />
//       <CaseStudyMetrics metrics={caseStudy.metrics} />
//       <CaseStudyContent caseStudy={caseStudy} />
//       <CaseStudyCta />
//     </div>
//   )
// }

// export function generateStaticParams() {
//   return Object.keys(caseStudies).map((slug) => ({
//     slug,
//   }))
// }
import { notFound } from "next/navigation"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyMetrics } from "@/components/case-study-metrics"
import { CaseStudyContent } from "@/components/case-study-content"
import { CaseStudyCta } from "@/components/case-study-cta"
import { caseStudies } from "@/data/case-studies"

interface PageProps {
  params: { slug: string }
}

export default function CaseStudyPage({ params }: PageProps) {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyMetrics metrics={caseStudy.metrics} />
      <CaseStudyContent caseStudy={caseStudy} />
      <CaseStudyCta />
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

