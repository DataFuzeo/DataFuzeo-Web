// data/case-studies.ts
import { Clock, TrendingUp, Users } from "lucide-react"

export interface Metric {
  label: string
  value: string
  description?: string
  icon?: any
}

export interface CaseStudy {
  id: number
  title: string
  subtitle: string
  client: string
  industry: string
  duration: string
  team: string
  tags: string[]
  image: string
  overview: string
  challenge: string
  solution: string
  implementation: string[]
  results: string[]
  techStack: string[]
  metrics: Metric[]
  slug: string
}

export const caseStudies = {
  "fraud-detection-case-study": {
    title: "AI-Powered Financial Security",
    subtitle: "Reduced fraud detection time by 45%",
    client: "Global Financial Institution",
    industry: "Financial Services",
    duration: "8 months",
    team: "12 specialists",
    tags: ["Machine Learning", "Fraud Detection", "Real-time Processing", "Financial AI"],
    image: "/financial-fraud-detection-ai-dashboard.jpg",

    // 👇 Structured for CaseStudyContent
    problem: {
      title: "The Challenge",
      description:
        "The client's fraud detection system relied heavily on manual review processes, causing delays in approvals and letting fraudulent activities slip through. High false positive rates frustrated legitimate customers.",
      points: [
        "Fraud detection took 24–48 hours to complete",
        "False positive rate of 23% blocked legitimate transactions",
        "Manual reviews caused long delays in transaction approvals",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We implemented a real-time fraud detection system powered by advanced machine learning models. The system streamlined approvals, reduced manual intervention, and improved accuracy significantly.",
      points: [
        "Built real-time data pipeline architecture",
        "Trained models on 5+ years of historical transaction data",
        "Integrated seamlessly with core banking APIs",
        "Developed analyst dashboards and automated alerts",
      ],
      techStack: [
        "Python",
        "TensorFlow",
        "Apache Kafka",
        "Redis",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "React",
        "Node.js",
      ],
    },
    impact: {
      title: "Impact",
      description:
        "Fraud detection time dropped from 24–48 hours to under 2 hours, accuracy rose to 94%, false positives fell by 67%, and the client saved $12M in fraud losses within the first year.",
    },

    metrics: [
      {  icon: "Clock", label: "Detection Speed", value: "45% faster", description: "From 24-48 hours to under 2 hours" },
      { label: "Accuracy Rate", value: "94%", description: "Improved from 77%" },
      { label: "False Positives", value: "-67%", description: "Reduced from 23% to 7.6%" },
      { label: "Cost Savings", value: "$12M", description: "Prevented fraud losses in year 1" },
    ],
  },
  

  "customer-ai-case-study": {
    title: "Intelligent Customer Service AI",
    subtitle: "Automated 80% of customer support queries",
    client: "E-commerce Platform",
    industry: "Retail Technology",
    duration: "6 months",
    team: "8 specialists",
    tags: ["Natural Language Processing", "Conversational AI", "Customer Service", "Automation"],
    image: "/ai-chatbot-customer-service-interface.jpg",

    problem: {
      title: "The Challenge",
      description:
        "The client’s support team faced over 10,000 daily queries, with slow response times and overwhelming repetitive requests. Customers waited hours for simple answers.",
      points: [
        "Average response time was 4–6 hours",
        "70% of queries were repetitive (order status, returns, product info)",
        "Support team couldn’t scale with business growth",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed a conversational AI system with natural language understanding and seamless CRM integration. It handled repetitive queries automatically and escalated complex issues to human agents.",
      points: [
        "Built custom NLP models with BERT & spaCy",
        "Integrated AI with CRM and order management systems",
        "Deployed across website, app, and social media channels",
        "Enabled human agent handoff for complex cases",
        "Provided analytics dashboards for monitoring performance",
      ],
      techStack: [
        "Python",
        "spaCy",
        "BERT",
        "Rasa",
        "MongoDB",
        "FastAPI",
        "WebSocket",
        "React",
        "TypeScript",
        "AWS Lambda",
      ],
    },
    impact: {
      title: "Impact",
      description:
        "The AI automated 80% of queries, cut response times to 30 seconds, boosted customer satisfaction by 35%, and reduced support costs by 60%.",
    },

    metrics: [
      { label: "Query Automation", value: "80%", description: "Automated resolution without human intervention" },
      { label: "Response Time", value: "30 seconds", description: "Average response time improvement" },
      { label: "Satisfaction Increase", value: "+35%", description: "Customer satisfaction score improvement" },
      { label: "Cost Reduction", value: "60%", description: "Support operational cost savings" },
    ],
  },
}
