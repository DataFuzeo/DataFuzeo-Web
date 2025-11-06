"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  slug?: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blogs/${post.slug || post.id}`}>
      <Card className="group cursor-pointer h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="h-full">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">{post.category}</Badge>
          </div>

          <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
            {/* Meta info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-balance group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3 text-pretty">
              {post.excerpt}
            </p>

            {/* Read more */}
            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-200">
              Read More
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </motion.div>
      </Card>
    </Link>
  )
}
