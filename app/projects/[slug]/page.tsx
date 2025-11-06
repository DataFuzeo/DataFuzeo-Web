import { notFound } from "next/navigation"
import { CaseStudyHero } from "@/components/case-study-hero"
import { CaseStudyContent } from "@/components/case-study-content"
import { CaseStudyMetrics } from "@/components/case-study-metrics"
import { CaseStudyCta } from "@/components/case-study-cta"

const caseStudies = {
  "nexa-ai-project": {
    title: "Nexa AI Voice Receptionist",
    subtitle: "Human-like AI Voice Assistant for Appointment Booking",
    image: "/nexa1.png",
    client: "Nexa Corporation",
    duration: "2 weeks",
    team: "3 specialists",
    tags: ["AI Agents", "Voice AI", "Automation", "No-Code"],
    problem: {
      title: "The Challenge",
      description:
        "Traditional appointment booking processes rely heavily on manual handling or complex IVR systems that frustrate customers and burden staff. Nexa Corporation sought to build a human-like AI voice assistant capable of handling real-time appointment bookings without coding — maintaining conversational fluidity and context throughout the interaction.",
      points: [
        "Manual scheduling taking up staff time and causing bottlenecks",
        "Rigid IVR systems failing to understand natural speech",
        "Lack of contextual awareness in basic chat or voice bots",
        "Limited scalability for high call volumes",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We built Nexa, an AI-powered voice receptionist on Vapi.ai, designed to autonomously handle inbound voice calls, manage scheduling, and respond naturally like a human assistant — all created within a no-code environment.",
      points: [
        "Real-time conversational flow using GPT-based natural language processing",
        "Voice-to-text and text-to-speech integration for fluid dialogues",
        "Automated collection of user details (name, time, service type)",
        "Conditional logic for incomplete or unclear responses",
        "Human-like emotional tone and response timing",
      ],
      techStack: ["Vapi.ai", "GPT-based LLM", "Real-Time STT/TTS APIs", "No-code Flow Builder", "Webhooks", "Loom", "OBS Studio"],
    },
    impact: {
      title: "Business Impact",
      description:
        "The AI voice receptionist transformed Nexa Corporation's appointment booking process, delivering exceptional automation and customer experience improvements while dramatically reducing development time compared to traditional voice bot solutions.",
      metrics: [
        { label: "Appointment Completion Rate", value: "98%", change: "+98%" },
        { label: "Manual Booking Workload Reduction", value: "85%", change: "–85%" },
        { label: "Average Response Time", value: "<3 sec", change: "+Real-Time" },
        { label: "Natural Language Understanding", value: "100%", change: "+100%" },
        { label: "Development Time", value: "<2 hrs", change: "–95%" },
      ],
    },
  },
  "ai-customer-support-automation": {
  title: "AI-Powered Customer Support Agent with Workflow Automation",
  subtitle: "Reducing manual support work through AI and workflow automation",
  image: "/ai-customer-support-automation1.jpg",
  client: "Internal Prototype – Data Fuzeo",
  duration: "4 weeks",
  team: "3 specialists",
  tags: ["AI Agents", "Automation", "n8n", "Customer Support", "Workflow Integration"],

  problem: {
    title: "The Challenge",
    description:
      "Customer support teams often face three major issues: slow response times, manual follow-ups, and disconnected tools. Handling FAQs and repetitive queries consumes time, and tracking data across Slack, Gmail, and CRMs adds inefficiency. Our goal was to streamline these processes with a smart, AI-driven solution.",
    points: [
      "Slow response times due to repetitive manual handling of FAQs",
      "Manual follow-ups and ticket logging required additional effort",
      "Support data scattered across Slack, Gmail, and HubSpot",
    ],
  },

  solution: {
    title: "Our Solution",
    description:
      "We developed an AI Customer Support Agent integrated with n8n workflows and multiple business tools. The solution uses conversational AI for instant query handling and workflow automation to manage follow-ups, alerts, and reports seamlessly.",
    points: [
      "Developed AI agent using OpenAI API for natural conversational handling",
      "Automated Slack alerts, follow-ups, and Gmail replies via n8n workflows",
      "Integrated Google Sheets and HubSpot CRM for ticket logging and reporting",
      "Implemented unified Slack and email notifications to prevent missed queries",
    ],
    techStack: [
      "OpenAI API",
      "n8n Automation",
      "Google Sheets",
      "Slack API",
      "Gmail API",
      "HubSpot CRM",
    ],
  },

  impact: {
    title: "Business Impact",
    description:
      "The prototype demonstrated measurable business value — faster responses, higher efficiency, and improved satisfaction. It unified communication across Slack, Gmail, Sheets, and HubSpot, showing how AI and automation can transform support operations.",
    metrics: [
      { label: "Response Time", value: "Instant", change: "Reduced from hours to seconds" },
      { label: "Manual Work Saved", value: "15+ hrs/week", change: "Saved through automation" },
      { label: "Customer Satisfaction", value: "↑ High", change: "Instant, reliable AI responses" },
      { label: "Data Integration", value: "Unified", change: "Slack, Gmail, Sheets & HubSpot synced" },
    ],
  },
},
"medibot-ai": {
  title: "RAG-Based Medical Chatbot (MediBot AI)",
  subtitle: "Delivering trustworthy, explainable AI for healthcare professionals and patients",
  image: "/med-dashboard.png", // first image in case study
  client: "Healthcare Providers (Prototype)",
  duration: "6 months",
  team: "4 specialists",
  tags: ["RAG", "LLMs", "Healthcare", "AI Agents", "PostgreSQL", "FastAPI"],

  problem: {
    title: "The Challenge",
    description:
      "Healthcare organizations face rising patient queries, staff overload, and unreliable AI responses when using generic chatbots. There was a need for a secure, domain-specific conversational AI that could provide accurate, reference-backed guidance.",
    points: [
      "High patient query volume overwhelming medical staff",
      "Generic chatbots producing hallucinated or unsafe responses",
      "Lack of transparency and citation in AI-generated outputs",
      "Difficulty integrating structured medical data with LLMs",
    ],
  },

  solution: {
    title: "Our Solution",
    description:
      "We developed MediBot AI — a Retrieval-Augmented Generation (RAG) powered medical assistant that merges knowledge retrieval with LLM reasoning to provide context-aware, evidence-based responses.",
    points: [
      "Implemented RAG pipeline using pgvector in PostgreSQL for context retrieval",
      "Integrated transformer-based Sentence-BERT and LLM for conversational accuracy",
      "Added confidence scoring and citation features to enhance transparency",
      "Built user interface with login, chatbot interaction, and follow-up queries",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Django",
      "Sentence-BERT",
      "PostgreSQL + pgvector",
      "Docker",
      "AWS/GCP/Azure",
      "React",
    ],
    images: [
      "/med-dashboard.jpg",
      "/signup-med.jpg",
      "/med2.jpg",
    ],
  },

  impact: {
    title: "Business Impact",
    description:
      "MediBot AI reduced patient support load, enhanced medical accessibility, and delivered safe, explainable AI-driven assistance for healthcare professionals.",
    metrics: [
      { label: "Response Accuracy", value: "96%", change: "+32%" },
      { label: "Patient Query Load", value: "-65%", change: "Reduced staff load" },
      { label: "Transparency", value: "100%", change: "All responses sourced" },
      { label: "Deployment Ready", value: "Cloud-native", change: "Scalable microservices" },
    ],
  },
},
  "aura-ai-project": {
    title: "AURA — AI-Powered Document Intelligence System",
    subtitle: "RAG + LangGraph Integration for Offline Document Reasoning",
    image: "/Aura1.png",
    client: "Internal R&D Project",
    duration: "6 weeks",
    team: "2 specialists",
    tags: ["RAG", "LangGraph", "Document Intelligence", "Local AI"],
    problem: {
      title: "The Challenge",
      description:
        "Modern researchers and professionals face severe inefficiencies in understanding and analyzing large, complex documents. Traditional document search tools lack context awareness, while cloud-based AI systems raise cost and privacy concerns.",
      points: [
        "Managing long-context windows exceeding LLM token limits",
        "Maintaining multi-turn memory across document-based conversations",
        "Building offline inference without relying on paid APIs",
        "Efficiently indexing embeddings for fast semantic retrieval",
        "Handling diverse document formats (multi-column PDFs, tables, images)",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We built AURA, a fully modular and explainable document intelligence pipeline that integrates RAG with LangGraph for graph-based reasoning and context preservation.",
      points: [
        "LangGraph Workflow Orchestration – Graph-based reasoning flow enabling retrieval, synthesis, validation, and generation nodes",
        "Hybrid RAG Pipeline – FAISS-powered retrieval + LLM response generation (Flan-T5 / Llama-2)",
        "Local Embedding & Indexing – Sentence-Transformers + FAISS for high-speed, offline semantic search",
        "Advanced PDF Parsing – PyMuPDF and pdfplumber for extracting structured and unstructured data",
        "Graph Memory System – LangGraph memory nodes for context continuity and multi-turn reasoning",
        "Full-Stack Integration – Streamlit frontend UI with Flask backend managing embeddings, retrieval, and inference orchestration",
      ],
      techStack: ["Python", "Flask", "Streamlit", "LangGraph", "RAG", "Hugging Face Transformers", "Sentence-Transformers", "FAISS", "PyMuPDF", "pdfplumber"],
    },
    impact: {
      title: "Business Impact",
      description:
        "AURA reduced document analysis time by 95%, delivering instant contextual insight. Enabled secure, private, offline document reasoning, eliminating API costs and setting a new benchmark for locally deployable document intelligence systems.",
      metrics: [
        { label: "Document Review Time Reduction", value: "95%", change: "–95%" },
        { label: "Response Factuality Improvement", value: "82%", change: "+82%" },
        { label: "Offline Inference", value: "100%", change: "+100% Data Privacy" },
        { label: "Average Response Time", value: "<5 sec", change: "+Real-Time" },
        { label: "Reusability", value: "100%", change: "Across Document Pipelines" },
      ],
    },
  },
  "ai-content-engine": {
    title: "Generative AI Content Engine",
    subtitle: "Scaling Marketing Content with Advanced AI Technology",
    image: "/ai-content-generation-interface.jpg",
    client: "CreativeFlow Agency",
    duration: "6 months",
    team: "5 specialists",
    tags: ["Generative AI", "Automation"],
    problem: {
      title: "The Challenge",
      description:
        "CreativeFlow Agency struggled to meet growing client demands for personalized content across multiple channels. Manual content creation was bottlenecking growth and limiting campaign effectiveness.",
      points: [
        "Content production capacity limited to 50 pieces per week",
        "Inconsistent brand voice across different content creators",
        "High cost per content piece ($200+ average)",
        "Unable to personalize content at scale for different audience segments",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed an AI-powered content generation engine that creates personalized, brand-consistent content across multiple formats and channels.",
      points: [
        "GPT-4 based content generation with custom fine-tuning",
        "Brand voice consistency engine with style transfer learning",
        "Multi-format content creation (blogs, social media, emails, ads)",
        "Automated A/B testing and performance optimization",
      ],
      techStack: ["Python", "OpenAI GPT-4", "LangChain", "FastAPI", "PostgreSQL", "Redis", "React", "TypeScript"],
    },
    impact: {
      title: "Business Impact",
      description:
        "The AI content engine revolutionized CreativeFlow's content production capabilities and client satisfaction.",
      metrics: [
        { label: "Content Production Speed", value: "10x", change: "+900%" },
        { label: "Content Quality Score", value: "92%", change: "+38%" },
        { label: "Cost per Content Piece", value: "$20", change: "-90%" },
        { label: "Client Satisfaction", value: "96%", change: "+24%" },
      ],
    },
  },
  "charm-poultry-health": {
    title: "CHARM — Chicken Health Assessment and Remote Monitoring System",
    subtitle: "AI-Powered Poultry Health Platform for Disease Detection and Farm Monitoring",
    image: "/charm1.png",
    client: "AgriTech Innovation Project",
    duration: "8 weeks",
    team: "3 specialists",
    tags: ["Computer Vision", "Deep Learning", "AgriTech", "AI Agents"],
    problem: {
      title: "The Challenge",
      description:
        "Poultry farming faces significant challenges in early disease detection and continuous health monitoring. Farmers traditionally depend on manual inspection — a slow, error-prone process that cannot scale across large flocks.",
      points: [
        "Difficulty identifying diseases early due to subtle visual symptoms",
        "Lack of real-time, objective health tracking",
        "Inability to deploy advanced AI models on low-power farm hardware",
        "Minimal access to automated alerts and diagnostic insights for non-technical users",
        "Absence of scalable infrastructure connecting farms, veterinarians, and health data",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed CHARM, a full-stack, AI-driven poultry health monitoring platform integrating real-time computer vision, deep learning-based classification, and smart alerting to detect diseases instantly and provide actionable insights.",
      points: [
        "Detection & Tracking: YOLOv8 for real-time chicken detection and BoT-SORT for individual movement tracking",
        "Disease Classification: ResNet50-based model trained on curated poultry disease datasets (Infectious Coryza, Fowl Cholera, Fowl Pox, etc.)",
        "Smart Alert System: Automated rule-based engine providing health alerts and treatment recommendations",
        "Web Platform: Django + REST API dashboard for farmers and veterinarians with visual analytics and farm-wide diagnostics",
        "Data Pipeline: PostgreSQL for structured health logs, OpenCV & NumPy for efficient frame processing",
        "Future-Ready Design: Support for IoT integration, voice-based interfaces, and multilingual accessibility for rural deployment",
      ],
      techStack: ["Python", "Django", "Django REST Framework", "YOLOv8", "ResNet50", "BoT-SORT", "OpenCV", "PyTorch", "PostgreSQL", "NumPy", "Pandas"],
    },
    impact: {
      title: "Business Impact",
      description:
        "CHARM delivers measurable impact in agricultural efficiency, disease prevention, and food security by transforming traditional poultry management into a data-driven, automated health ecosystem.",
      metrics: [
        { label: "Disease Classification Accuracy", value: "92%", change: "+92%" },
        { label: "Early Disease Detection Improvement", value: "75%", change: "+75%" },
        { label: "Average Diagnostic Time", value: "<15 sec", change: "–95% vs Manual Checks" },
        { label: "Continuous Health Monitoring", value: "24/7", change: "Multi-Camera Coverage" },
        { label: "Scalable Deployment", value: "100%", change: "Edge + Cloud Compatible" },
      ],
    },
  },
  "sentiment-analysis": {
    title: "Customer Sentiment Analysis Platform",
    subtitle: "Understanding Customer Voice with Advanced NLP",
    image: "/sentiment-analysis-dashboard.jpg",
    client: "RetailMax Corporation",
    duration: "7 months",
    team: "6 specialists",
    tags: ["Data Science", "Generative AI"],
    problem: {
      title: "The Challenge",
      description:
        "RetailMax struggled to understand customer sentiment across multiple touchpoints. Manual analysis of feedback was slow, inconsistent, and couldn't scale with their growing customer base.",
      points: [
        "Processing only 5% of customer feedback due to manual limitations",
        "Average response time to negative feedback: 72 hours",
        "Inconsistent sentiment classification across different analysts",
        "Missing early warning signals for brand reputation issues",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We built a comprehensive sentiment analysis platform that processes customer feedback in real-time across all channels with advanced NLP and AI.",
      points: [
        "Multi-channel sentiment analysis (social media, reviews, support tickets)",
        "Real-time emotion detection and trend analysis",
        "Automated alert system for negative sentiment spikes",
        "Generative AI for personalized response recommendations",
      ],
      techStack: ["Python", "BERT", "spaCy", "Apache Kafka", "Elasticsearch", "Kibana", "FastAPI", "Vue.js"],
    },
    impact: {
      title: "Business Impact",
      description:
        "The sentiment analysis platform provided RetailMax with unprecedented insights into customer satisfaction and brand perception.",
      metrics: [
        { label: "Sentiment Analysis Accuracy", value: "89%", change: "+89%" },
        { label: "Feedback Processing Coverage", value: "100%", change: "+95%" },
        { label: "Response Time to Issues", value: "4 hours", change: "-94%" },
        { label: "Customer Satisfaction Score", value: "4.7/5", change: "+18%" },
      ],
    },
  },
  "automated-data-pipeline": {
    title: "Automated Data Pipeline",
    subtitle: "Scaling Data Processing with Modern Architecture",
    image: "/data-pipeline-architecture.jpg",
    client: "DataFlow Enterprises",
    duration: "9 months",
    team: "8 specialists",
    tags: ["Data Engineering", "Automation"],
    problem: {
      title: "The Challenge",
      description:
        "DataFlow's legacy data infrastructure couldn't handle growing data volumes. Manual ETL processes were error-prone, slow, and couldn't support real-time analytics requirements.",
      points: [
        "Processing capacity limited to 100K records per hour",
        "Data pipeline failures occurring 3-4 times per week",
        "Manual data quality checks taking 6+ hours daily",
        "No real-time analytics capabilities for business decisions",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We designed and implemented a modern, scalable data pipeline architecture with automated processing, quality monitoring, and real-time analytics capabilities.",
      points: [
        "Event-driven architecture with real-time stream processing",
        "Automated data quality monitoring and anomaly detection",
        "Scalable microservices architecture with containerization",
        "Real-time analytics dashboard with sub-second query performance",
      ],
      techStack: ["Apache Kafka", "Apache Spark", "Kubernetes", "PostgreSQL", "Redis", "Grafana", "Python", "Go"],
    },
    impact: {
      title: "Business Impact",
      description:
        "The new data pipeline transformed DataFlow's data processing capabilities, enabling real-time insights and operational excellence.",
      metrics: [
        { label: "Daily Processing Throughput", value: "10M records", change: "+2400%" },
        { label: "Query Response Time", value: "<100ms", change: "-99%" },
        { label: "Pipeline Reliability", value: "99.9%", change: "+99%" },
        { label: "Data Processing Costs", value: "60% reduction", change: "-60%" },
      ],
    },
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyMetrics metrics={caseStudy.impact.metrics} />
      <CaseStudyContent caseStudy={caseStudy} />
      <CaseStudyCta />
    </div>
  )
}
