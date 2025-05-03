"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, FileText, Github, Linkedin, Mail, Twitter, User, Briefcase, GraduationCap, Heart, MapPin, Copy, Check, ExternalLink } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHackerrank } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { PrintButton } from "@/components/print-button"
import { AnimatedSection, AnimatedItem } from "@/components/animated-section"
import { ParallaxElement } from "@/components/parallax-element"
import { ParallaxBackground } from "@/components/parallax-background"
import { FloatingShapes } from "@/components/floating-shapes"
import { ScrollTrigger } from "@/components/scroll-trigger"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useTheme } from "next-themes"
import { useLanguage } from "@/context/language-context"
import { translations, experienceTranslations, educationTranslations, interestsTranslations } from "@/lib/translations"
import { useEffect, useState, useMemo } from "react"
import { SimpleCaptcha } from "@/components/ui/simple-captcha"
import { ContentSlider } from "@/components/content-slider"

export default function Home() {
  // Add this to handle theme hydration
  const [mounted, setMounted] = useState(false)
  useTheme()
  const { language } = useLanguage()
  const t = useMemo(() => translations[language] || translations["en"], [language]);

  // Only show UI after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or a loading spinner
  }

  // Navigation items for both desktop and mobile
  const navigationItems = [
    { href: "#top", label: t.home, isScrollLink: true },
    { href: "#about", label: t.about, isScrollLink: true },
    { href: "#skills", label: t.skills, isScrollLink: true },
    { href: "#projects", label: t.projects, isScrollLink: true },
    { href: "#contact", label: t.contact, isScrollLink: true },
    { href: "/blog", label: t.blog },
  ]

  // Get translated data
  const experiences = experienceTranslations[language]
  const education = educationTranslations[language]
  const interests = interestsTranslations[language]

  // Project data with links
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration.",
      image: "/e-shop-dotnet.png?height=300&width=400",
      githubUrl: "https://github.com/shakerkamal/e-shop-dotnet",
      liveUrl: "https://ecommerce-platform-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description: "A productivity app with drag-and-drop interface.",
      image: "/e-shop-dotnet.png?height=300&width=400",
      githubUrl: "https://github.com/shakerkamal/e-shop-dotnet",
      liveUrl: "https://task-management-demo.vercel.app",
    },
  ]

  // Blog post data
  const blogPosts = [
    {
      title: "What is “static” in OOP?",
      excerpt: "Learn about core concept of Object-Oriented Programming",
      date: "May 22, 2023",
      slug: "what-is-static-in-oop",
    },
  ]

  function ContactWithCaptcha() {
    const { language } = useLanguage()
    const t = translations[language]
    const [verified, setVerified] = useState(false)
    const [copied, setCopied] = useState(false)
    const email = "shakerkamal@outlook.com"

    // Copy email to clipboard
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-6">
          {verified ? (
              <div className="flex flex-col items-center space-y-4 animate-in fade-in-50 duration-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href={`mailto:${email}`} className="text-xl font-medium hover:text-primary transition-colors">
                    {email}
                  </a>
                </div>
                <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground print:hidden"
                >
                  {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        {t.emailCopied}
                      </>
                  ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        {t.copyEmail}
                      </>
                  )}
                </Button>
              </div>
          ) : (
              <div className="space-y-4 w-full">
                <div className="bg-muted/50 p-4 rounded-lg text-center mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-medium">{t.emailProtected}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.completeVerification}</p>
                </div>
                <SimpleCaptcha onVerify={() => setVerified(true)} />
              </div>
          )}
        </div>
    )
  }
  // Project card component
  interface Project {
    title: string
    description: string
    image: string
    githubUrl?: string
    liveUrl?: string
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group w-full">
        <div className="overflow-hidden">
          <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105 w-full"
              loading="lazy" // Add lazy loading
          />
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex gap-2 justify-between">
          {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
          )}
          {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button
                    variant="outline"
                    size="sm"
                    className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t.viewProject}
                </Button>
              </a>
          )}
        </CardFooter>
      </Card>
  )

  // Blog post card component
  interface BlogPost {
    title: string
    excerpt: string
    date: string
    slug: string
  }

  const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => (
      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 w-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/blog/${post.slug}`}>
            <Button
                variant="outline"
                size="sm"
                className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
            >
              {t.readMore}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
  )

  // Skill card with fill animation
  const SkillCard = ({ skill, index }) => (
      <Card className="skill-card relative flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.03] hover:border-primary/50 overflow-hidden group">
        <div className="skill-fill absolute bottom-0 left-0 w-full bg-primary/10 transform translate-y-full transition-transform duration-500 ease-out h-full group-hover:translate-y-0 z-0"></div>
        <CardHeader className="relative z-10">
          <CardTitle>{skill.name}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-foreground transition-colors duration-300">
            {skill.level}
          </p>
        </CardContent>
      </Card>
  )

  return (
    <div className="min-h-screen bg-background" id="top">
      {/* Add ScrollTrigger component to handle scroll animations */}
      <ScrollTrigger />

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="mr-4 hidden md:flex">
            <Link
              href="#top"
              className="mr-6 flex items-center space-x-2 transition-transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#top")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navigationItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  onClick={(e) => {
                    if (item.isScrollLink) {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between md:justify-end space-x-2">
            <MobileMenu items={navigationItems} />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <ParallaxBackground className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative print:py-8">
          <FloatingShapes count={8} color="var(--foreground)" className="print:hidden" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <AnimatedSection animation="slideRight" duration={0.7}>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t.greeting}</h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">{t.heroSubtitle}</p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row print:hidden">
                    <Link
                        href="#projects"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector("#projects")?.scrollIntoView({
                            behavior: "smooth",
                          })
                        }}
                    >
                      <Button className="transition-transform hover:scale-105 hover:shadow-md">{t.viewWork}</Button>
                    </Link>
                    <Link
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault()
                          document.querySelector("#contact")?.scrollIntoView({
                            behavior: "smooth",
                          })
                        }}
                    >
                      <Button
                          variant="outline"
                          className="transition-transform hover:scale-105 hover:shadow-md hover:bg-muted/50"
                      >
                        {t.contactMe}
                      </Button>
                    </Link>
                    <PrintButton />
                  </div>
                  <div className="flex items-center space-x-4 mt-6">
                    <Link href="https://www.linkedin.com/in/shaker-ibna-kamal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:text-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://github.com/shakerkamal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:text-primary"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://twitter.com/Shakerkamal12" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Button
                          variant="ghost"
                          size="icon"
                          className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:text-primary"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://www.hackerrank.com/profile/shakerkamal" target="_blank" rel="noopener noreferrer" aria-label="Hackerrank">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:text-primary">
                        <FontAwesomeIcon icon={faHackerrank} className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={0.2} duration={0.7} className="print:hidden">
                <ParallaxElement speed={0.3} direction="up">
                  <div className="flex items-center justify-center">
                    <Image
                        src="/main.jpg?height=400&width=400"
                        alt="Hero Image"
                        width={400}
                        height={400}
                        className="rounded-full object-cover transition-all duration-500 hover:shadow-xl"
                        priority
                    />
                  </div>
                </ParallaxElement>
              </AnimatedSection>
            </div>
          </div>
        </ParallaxBackground>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative">
          <FloatingShapes count={6} color="var(--foreground)" />
          <div className="container px-4 md:px-6">
            <AnimatedSection
                animation="fadeIn"
                className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left"
            >
              {/* About Me Picture */}
              <div className="flex-1 order-1">
                <ParallaxElement speed={0.2} direction="right">
                  <Image
                      src="/aboutme.jpg?height=400&width=400"
                      alt="About Me"
                      width={400}
                      height={400}
                      className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
                  />
                </ParallaxElement>
              </div>

              {/* About Me Text */}
              <div className="flex-1 order-2 space-y-6">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <User className="mr-2 inline-block h-4 w-4" /> {t.aboutMe}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.whoIAm}</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.aboutDescription}
                </p>
              </div>
            </AnimatedSection>

            {/* Experience, Education, Interests */}
            <div className="mx-auto grid max-w-7xl items-start gap-20 py-20">
              <AnimatedSection animation="slideRight" delay={0.2}>
                <div className="space-y-20">

                  {/* Experience Section */}
                  <div className="space-y-10">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold">{t.experience}</h3>
                    </div>
                    <div className="relative pl-6 space-y-16">
                      {experiences.map((exp, index) => (
                          <div key={index} className="relative space-y-4">
                            <div className="flex justify-between items-center">
                              <h4 className="text-xl font-semibold">{exp.title}</h4>
                              <div className="flex items-center space-x-1 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                            <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 space-y-2">
                              {exp.description.map((item, i) => (
                                  <li key={i} className="relative">
                                    <span className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-primary"></span>
                                    {item}
                                  </li>
                              ))}
                            </ul>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Education Section */}
                  <div className="space-y-10">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold">{t.education}</h3>
                    </div>
                    <div className="relative pl-6 space-y-16">
                      {education.map((edu, index) => (
                          <div key={index} className="space-y-4">
                            <h4 className="text-xl font-semibold">{edu.degree}</h4>
                            <p className="text-sm text-muted-foreground">{edu.institution} | {edu.year}</p>
                            <ul className="mt-2 list-disc pl-6 text-gray-500 dark:text-gray-400">
                              <li>{edu.description}</li>
                            </ul>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Interests Section */}
                  <div className="space-y-10">
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold">{t.interests}</h3>
                    </div>
                    <div className="relative pl-6 space-y-16">
                      <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400 space-y-4">
                        {interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 relative print:py-8">
          <div className="container px-4 md:px-6">
            <AnimatedSection
                animation="fadeIn"
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm print:hidden">
                  <Code className="mr-2 inline-block h-4 w-4" />
                  {t.skillsTitle}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.technologiesIWorkWith}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.skillsDescription}
                </p>
              </div>
              <AnimatedSection
                  animation="stagger"
                  className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 print:py-4"
              >
                {[
                  { name: "C#" },
                  { name: "ASP.NET Core" },
                  { name: "TypeScript" },
                  { name: "JavaScript" },
                  { name: "Java" },
                  { name: "Python" },
                  { name: "Docker" },
                  { name: "Kubernetes" },
                  { name: "SQL Server" },
                  { name: "MySQL" },
                  { name: "MongoDB" },
                  { name: "Redis" },
                  { name: "Azure" },
                ].map((skill, index) => (
                    <AnimatedItem key={skill.name} index={index}>
                      <ParallaxElement speed={0.1} direction={index % 2 === 0 ? "up" : "down"}>
                        <SkillCard skill={skill} index={index} />
                      </ParallaxElement>
                    </AnimatedItem>
                ))}
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative print:py-8 print:hidden">
          <FloatingShapes count={5} color="var(--foreground)" />
          <div className="container px-4 md:px-6">
            <AnimatedSection
                animation="fadeIn"
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.myProjects}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.projectsDescription}
                </p>
              </div>
              <AnimatedSection animation="fadeIn" delay={0.2} className="w-full max-w-5xl mx-auto py-12">
                <ContentSlider itemsPerSlide={1} autoPlay={true} autoPlayInterval={6000}>
                  {projects.map((project, index) => (
                      <ProjectCard key={index} project={project} index={index} />
                  ))}
                </ContentSlider>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Preview Section with Slider */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative print:hidden">
          <div className="container px-4 md:px-6">
            <AnimatedSection
                animation="fadeIn"
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <FileText className="mr-2 inline-block h-4 w-4" />
                  {t.blog}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.latestArticles}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.blogDescription}
                </p>
              </div>
              <AnimatedSection animation="fadeIn" delay={0.2} className="w-full max-w-5xl mx-auto py-12">
                <ContentSlider itemsPerSlide={2} autoPlay={true} autoPlayInterval={8000}>
                  {blogPosts.map((post, index) => (
                      <BlogPostCard key={index} post={post} index={index} />
                  ))}
                </ContentSlider>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={0.3}>
                <Link href="/blog">
                  <Button className="transition-transform hover:scale-105 hover:shadow-md group">
                    {t.viewAllPosts}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </AnimatedSection>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 relative print:py-8">
          <FloatingShapes count={4} color="var(--foreground)" className="print:hidden" />
          <div className="container px-4 md:px-6">
            <AnimatedSection
                animation="fadeIn"
                className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm print:hidden">
                  <Mail className="mr-2 inline-block h-4 w-4" />
                  {t.contact}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t.getInTouch}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.contactDescription}
                </p>
              </div>
              <AnimatedSection
                  animation="slideUp"
                  delay={0.2}
                  className="mx-auto grid w-full max-w-lg gap-6 py-12 print:py-4"
              >
                <ContactWithCaptcha />
              </AnimatedSection>
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
