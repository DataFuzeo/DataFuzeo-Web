"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"

const blogPosts = [
  {
    id: 1,
    title: "How Predictive Analytics is Transforming Retail Demand Forecasting",
    excerpt: "Explore ML models, real case studies, and business impact in modern retail environments.",
    category: "Data Science",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    image: "/predictive-analytics-retail-dashboard.jpg",
    slug: "predictive-analytics-retail-demand-forecasting",
  },
  {
    id: 2,
    title: "Customer Churn Prediction: Why It Matters and How AI Solves It",
    excerpt: "Deep dive into churn ML models with visuals of workflows and practical implementations.",
    category: "Data Science",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    image: "/customer-churn-prediction-ai-model.jpg",
  },
  {
    id: 3,
    title: "From Chatbots to AI Agents: The Next Wave of Customer Support",
    excerpt: "Contrast old rule-based bots vs. modern reasoning agents in customer service.",
    category: "AI Agents",
    readTime: "7 min read",
    date: "Dec 10, 2024",
    image: "/ai-chatbot-customer-support.png",
  },
  {
    id: 4,
    title: "Building a Document Intelligence System with RAG",
    excerpt: "Show how LLMs + data pipelines help legal, finance, and healthcare industries.",
    category: "AI Agents",
    readTime: "10 min read",
    date: "Dec 8, 2024",
    image: "/document-intelligence-rag-system.jpg",
  },
  {
    id: 5,
    title: "How Workflow Automation Saves Businesses Thousands of Hours",
    excerpt: "Practical case studies with n8n, Make.com, and Python automation tools.",
    category: "Automation",
    readTime: "5 min read",
    date: "Dec 5, 2024",
    image: "/workflow-automation-business-process.jpg",
  },
  {
    id: 6,
    title: "The Hidden Cost of Manual Processes",
    excerpt: "Use numbers + examples from accounting, sales, HR to show automation benefits.",
    category: "Automation",
    readTime: "6 min read",
    date: "Dec 3, 2024",
    image: "/manual-process-automation-cost-savings.jpg",
  },
  {
    id: 7,
    title: "Modern Data Stacks Explained: ETL, ELT, and Data Lakes",
    excerpt: "Educational, SEO-friendly guide to modern data architecture patterns.",
    category: "Data Engineering",
    readTime: "9 min read",
    date: "Dec 1, 2024",
    image: "/modern-data-stack-etl-elt-architecture.jpg",
  },
  {
    id: 8,
    title: "Real-Time Data Pipelines: Why Businesses Can't Afford to Wait",
    excerpt: "IoT, streaming, real-time dashboards and their business impact.",
    category: "Data Engineering",
    readTime: "7 min read",
    date: "Nov 28, 2024",
    image: "/real-time-data-pipeline-streaming.jpg",
  },
  {
    id: 9,
    title: "Generative AI in Marketing: Automating Content Without Losing Brand Voice",
    excerpt: "Balances excitement + practical limits of AI content generation.",
    category: "Generative AI",
    readTime: "8 min read",
    date: "Nov 25, 2024",
    image: "/generative-ai-marketing-content-creation.jpg",
  },
  {
    id: 10,
    title: "The Future of E-commerce: AI-Powered Personalization",
    excerpt: "Product recommendations, image try-ons, personalization with generative models.",
    category: "Generative AI",
    readTime: "6 min read",
    date: "Nov 22, 2024",
    image: "/ai-ecommerce-personalization-recommendations.jpg",
  },
]

export function BlogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <BlogCard post={post} />
        </motion.div>
      ))}
    </div>
  )
}
