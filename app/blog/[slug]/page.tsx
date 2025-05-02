"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { ParallaxElement } from "@/components/parallax-element"
import { FloatingShapes } from "@/components/floating-shapes"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect, useState } from "react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Add this to handle theme hydration
  const [mounted, setMounted] = useState(false)

  // Only show UI after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading spinner
  }

  // Navigation items for mobile menu
  const navigationItems = [
    { href: "/#top", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ]

  // In a real application, this data would come from a database or CMS based on the slug
  const post = {
    title: "Getting Started with Next.js",
    date: "June 12, 2023",
    content: `
      <p>Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.</p>
      
      <p>To start a new Next.js project, you can use the following command:</p>
      
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will create a new Next.js application in the my-next-app directory. You can then navigate to that directory and start the development server:</p>
      
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <p>Next.js provides a number of features out of the box:</p>
      
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>CSS and Sass support</li>
        <li>Fast refresh</li>
        <li>File-system routing</li>
        <li>API routes</li>
        <li>Built-in image optimization</li>
      </ul>
      
      <p>One of the most powerful features of Next.js is its routing system. Next.js has a file-system based router built on the concept of pages. When a file is added to the pages directory, it's automatically available as a route.</p>
      
      <p>For example, if you create a file at pages/about.js, it will be accessible at /about.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link href="/#top" className="mr-6 flex items-center space-x-2 transition-transform hover:scale-105">
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/#about"
                className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Projects
              </Link>
              <Link
                href="/#contact"
                className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between md:justify-end">
            <MobileMenu items={navigationItems} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 relative">
        {/* Blog Post */}
        <article className="container max-w-3xl px-4 py-12 md:py-20 relative">
          <FloatingShapes count={3} color="var(--foreground)" />
          <AnimatedSection animation="fadeIn">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center mb-4 transition-transform hover:scale-105 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>
              <p className="mt-4 text-gray-500">{post.date}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={0.2}>
            <ParallaxElement speed={0.15} direction="up">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="rounded-lg object-cover mb-8 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </ParallaxElement>
          </AnimatedSection>

          <AnimatedSection animation="fadeIn" delay={0.4}>
            <div
              className="prose prose-gray max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </article>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500">© 2023 Portfolio. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
