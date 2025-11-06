"use client"

import { motion } from "framer-motion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  image: string
  content: string
}

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const handleShare = (platform: string) => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return
    
    const url = window.location.href
    const text = `${post.title} - ${post.excerpt}`
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank')
        break
      default:
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url)
        }
        break
    }
  }

  return (
    <article className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <ScrollAnimation direction="up">
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover:bg-primary/10">
              <Link href="/blogs" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </ScrollAnimation>

        {/* Featured Image */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="relative mb-12 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </ScrollAnimation>

        {/* Content */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="glass p-8 md:p-12 rounded-2xl">
            {/* Article Content */}
            <div 
              className="prose prose-xl prose-slate dark:prose-invert max-w-none
                prose-headings:gradient-text prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-tight
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-8 prose-p:text-lg
                prose-ul:text-muted-foreground prose-ul:mb-8 prose-ul:text-lg prose-ul:leading-relaxed
                prose-ol:text-muted-foreground prose-ol:mb-8 prose-ol:text-lg prose-ol:leading-relaxed
                prose-li:mb-3 prose-li:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-pre:bg-muted prose-pre:border prose-pre:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />


            {/* Share Section */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                  <p className="text-muted-foreground text-sm">Help others discover insights about predictive analytics</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <motion.button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </motion.button>
                  
                  <motion.button
                    onClick={() => handleShare('copy')}
                    className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Share2 className="w-4 h-4" />
                    Copy Link
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  Ready to Transform Your <span className="gradient-text">Retail Operations?</span>
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Let DataFuzeo help you implement predictive analytics solutions that drive real business results. 
                  Our team of experts specializes in retail forecasting and demand optimization.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground pulse-glow"
                  >
                    <Link href="/contact">
                      Start Your Project
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </article>
  )
}
