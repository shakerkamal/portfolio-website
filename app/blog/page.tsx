"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"
import { ParallaxElement } from "@/components/parallax-element"
import { FloatingShapes } from "@/components/floating-shapes"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect, useState } from "react"
import {useLanguage} from "@/context/language-context";
import {translations} from "@/lib/translations";

export default function BlogPage() {
  // Add this to handle theme hydration
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]


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

  // In a real application, this data would come from a database or CMS
  const posts = [
    {
      title: "What is “static” in OOP?",
      excerpt: "Learn about core concept of Object-Oriented Programming",
      date: "May 22, 2023",
      slug: "what-is-static-in-oop",
      image: "/blogs/static_in_oop.png?height=300&width=600",
    },
    // {
    //   title: "The Power of TypeScript",
    //   excerpt: "Why TypeScript is becoming the standard for modern web development.",
    //   date: "May 28, 2023",
    //   slug: "power-of-typescript",
    //   image: "/placeholder.svg?height=300&width=600",
    // },
    // {
    //   title: "Responsive Design Principles",
    //   excerpt: "Best practices for creating websites that work on any device.",
    //   date: "April 15, 2023",
    //   slug: "responsive-design-principles",
    //   image: "/placeholder.svg?height=300&width=600",
    // },
    // {
    //   title: "State Management in React",
    //   excerpt: "Comparing different state management solutions for React applications.",
    //   date: "March 22, 2023",
    //   slug: "state-management-in-react",
    //   image: "/placeholder.svg?height=300&width=600",
    // },
    // {
    //   title: "Building Accessible Web Applications",
    //   excerpt: "How to ensure your web applications are accessible to everyone.",
    //   date: "February 10, 2023",
    //   slug: "building-accessible-web-applications",
    //   image: "/placeholder.svg?height=300&width=600",
    // },
    // {
    //   title: "Introduction to Server Components",
    //   excerpt: "Understanding the new React Server Components paradigm.",
    //   date: "January 5, 2023",
    //   slug: "introduction-to-server-components",
    //   image: "/placeholder.svg?height=300&width=600",
    // },
  ]

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
        {/* Blog Header with Parallax */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
          <FloatingShapes count={6} color="var(--foreground)" />
          <div className="container px-4 md:px-6">
            <AnimatedSection
              animation="fadeIn"
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <Link href="/" className="inline-flex items-center transition-transform hover:scale-105">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Blog</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Thoughts, tutorials, and insights about web development and design.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="stagger" className="mx-auto grid max-w-5xl gap-8 lg:gap-12">
              {posts.map((post, index) => (
                <AnimatedItem key={index} index={index}>
                  <ParallaxElement speed={0.1} direction={index % 2 === 0 ? "left" : "right"}>
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
                      <div className="md:grid md:grid-cols-[1fr_300px] md:gap-6">
                        <div className="p-6">
                          <CardHeader className="p-0 pb-4">
                            <CardTitle className="text-2xl">{post.title}</CardTitle>
                            <CardDescription>{post.date}</CardDescription>
                          </CardHeader>
                          <CardContent className="p-0 pb-4">
                            <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="p-0">
                            <Link href={`/blog/${post.slug}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
                              >
                                Read More
                                <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </div>
                        <div className="order-first md:order-last overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={600}
                            height={300}
                            className="aspect-[2/1] h-full w-full object-cover md:aspect-auto transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </Card>
                  </ParallaxElement>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500">{t.copyright}</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
