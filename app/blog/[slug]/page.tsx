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
import {CodeSnippet} from "@/components/code-snippet"
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
    title: "What is “static” in OOP?",
    date: "May 22, 2023",
    content: `
      <p>You must have come across the keyword "static" if you started your coding journey with a strongly typed language like Java or C#. It is a modifier that appears in the main method of your program. But what is the purpose of this modifier, and why do we need it?</p>
      <br>
      <p>To understand this special keyword, let’s assume you are familiar with the basics of Object-Oriented Programming. Classes and objects/instances are essential concepts to comprehend this keyword.</p>
      <br>
      <p>Think of a skyscraper. The first thing we need is a blueprint to construct it. In OOP, classes serve as blueprints for objects (instances of a class). You can only access the properties or methods of a class by instantiating it. Creating an object of a class brings the blueprint to life, occupying space in the memory. Enough theory; let’s look at an example:</p>
      <br>
      <div data-code-snippet="default">
      public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age{ get; set; }
    public string FullName{ 
        get{
            return FirstName+' '+ LastName;
        } 
    }
    
    public Person(string firstName, string lastName, int age)
    {
        FirstName = firstName;
        LastName = lastName;
        Age = age;
    }

    public void SayHello()
    {
        Console.WriteLine($"Hello, my name is {FullName}!");
    }

    public void CelebrateBirthday()
    {
        Age++;
        Console.WriteLine($"Happy birthday! I am now {Age} years old.");
    }

    public bool AnAdult()
    {
        return Age >= 18;
    }
}
      </div>
      <br>
      <p>We have created the blueprint of a <b>Person</b>. To create an actual person named <b>“Mehedi”</b> using this blueprint, we can do:</p>
      <br>
      <div data-code-snippet="default">
Person Mehedi = new Person(firstName: "Mehedi", lastName: "Hasan", age: 17);

Mehedi.SayHello(); //output: Hello, my name is Mehedi Hasan!

if(Mehedi.AnAdult()){
    Console.WriteLine("I am an adult");
}else{
    Console.WriteLine("I am still young");
}
//output: I am still young

Mehedi.CelebrateBirthday(); //output: Happy birthday! I am now 18 years old.

if(Mehedi.AnAdult()){
    Console.WriteLine("I am an adult now!");
}else{
    Console.WriteLine("I am still young!!");
}
//output: I am an adult
      </div>
      <br>
      <p>Now <b>“Mehedi”</b> is an actual person we can interact with. As an object, it occupies space in the memory. To access any property or method of the <b>Person</b> class, we must first create an object. The memory needs to be cleaned up when the object is destroyed, which is done by a garbage collector.</p>
      <br>
      <p>To address memory allocation issues, we use the <i>static</i> keyword. <b>When a class has static variables/properties or methods, you don’t need to initialize an instance of the class since they belong to the class itself</b>. How? We just saw an example of creating an object of the class Person to access its methods. Now, let’s modify the class to have a static method called “CelebrateBirthdayForAll” :</p>
      <div data-code-snippet="default">
      public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age{ get; set; }
    public string FullName{ 
        get{
            return FirstName+' '+ LastName;
        } 
    }

    public Person(string firstName, string lastName, int age)
    {
        FirstName = firstName;
        LastName = lastName;
        Age = age;
    }

    public static void Greet()
    {
        Console.WriteLine("Hello, Everyone!");
    }

    public void SayHello()
    {
        Console.WriteLine($"Hello, my name is {FullName}!");
    }

    public void CelebrateBirthday()
    {
        Age++;
        Console.WriteLine($"Happy birthday! I am now {Age} years old.");
    }

    public bool AnAdult()
    {
        return Age >= 18;
    }

    public static void CelebrateBirthdayForAll(Person[] people)
    {
        foreach (var person in people)
        {
            person.Age++;
            Console.WriteLine($"{person.FullName} celebrated a birthday and is now {person.Age} years old.");
        }
    }
}
    </div>
    <br>
    <p>Now, to call the static method, we don’t need to create an instance of Person. We can directly access the method:</p>
    <div data-code-snippet="default">
//calling the static method without instantiating the class
Person.Greet(); //output: Hello, Everyone!

Person Mehedi = new Person(firstName:"Mehedi", lastName: "Hasan", age: 17);
Person Hasib = new Person(firstName:"Hasib", lastName: "Bashar", age: 26);

Person[] people = {Mehedi, Hasib};

Person.CelebrateBirthdayForAll(people);
//output: Mehedi Hasan celebrated a birthday and is now 18 years old.
//output: Hasib Bashar celebrated a birthday and is now 27 years old.
    </div>
    <br>
    <p><i>In the aforementioned code, while using the method Greet() it was necessary to instantiate an object for accessing it. You cannot call the static method using an object like Mehedi or Hasib. Remember to access a property of the class within a static method, that property also needs to be static. If not, an error will occur during the build process.</i></p>
    <br>
    <p>To summarize, the static keyword is used to resolve memory allocation issues. When a class has static variables/properties or methods, you don’t need to create an instance of the class. This reduces memory usage and avoids unnecessary garbage collection.</p>
    <br>
    <p>Let’s briefly explore some scenarios where the static modifier has a significant impact, reducing the memory footprint of large applications.</p>
    <br>
    <p>The first scenario is <b>“Utility/Helper Methods”</b>. These methods typically don’t depend on the state of any instance variables. For example, consider a utility method that calculates the local time to match the client’s local timezone:</p>
    <div data-code-snippet="default">
    public static class LocalDate
{
    private static string timeZone = "Pacific Standard Time";
    public static DateTime GetLocalDate()
    {
        DateTime date = DateTime.UtcNow;
        TimeZoneInfo info = TimeZoneInfo.FindSystemTimeZoneById(timeZone);
        DateTime localDate = TimeZoneInfo.ConvertTimeFromUtc(date, info);
        return localDate;
    }
}
    </div>
    <br>
    <p>When calling the method <b>GetLocalDate()</b> from any service, you don't need to create an instance of the LocalDate class. This reduces memory usage and improves efficiency:</p>
    <br>
    <div data-code-snippet="default">
Console.WriteLine(LocalDate.GetLocalDate().ToLongDateString());
//output: Sunday, May 21, 2023
    </div>
    <br>
    <p>In programming, the <b>"Factory Design Pattern"</b> commonly utilizes the static modifier. The purpose of this pattern is to offer an interface for generating objects by concealing the object creation logic from the client. This allows the client to create objects without needing to instantiate them using the keyword. I will be delving into more factory methods in my forthcoming post on design patterns.</p>
    <br>
    <p>I hope this post provides you with a basic understanding of the static keyword’s concept and its significance in reducing memory usage.</p>
    <br>
    <p>For more information and detailed examples on using the static modifier refer to the following <a
    href="https://github.com/Shaker1664/StaticModifier"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cyan-600 hover:underline"
    >
  <u>GitHub</u> repo.
</a></p>
    `,
    image: "/blogs/static_in_oop.png?height=400&width=800",
  }

  // Process content to replace code snippets with CodeSnippet component
  const processContent = (content: string) => {
    const parts = content.split(/<div data-code-snippet="([^"]+)">([\s\S]*?)<\/div>/g)
    const result = []

    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Regular content
        result.push(<div key={i} dangerouslySetInnerHTML={{ __html: parts[i] }} />)
      } else if (i % 3 === 1) {
        // Code snippet type
        const type = parts[i]
        const code = parts[i + 1].trim()
        result.push(
            <CodeSnippet key={i} variant={type} title={type.charAt(0).toUpperCase() + type.slice(1)}>
              {code}
            </CodeSnippet>,
        )
        i++ // Skip the next part as we've already used it
      }
    }

    return result
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
            <div className="prose prose-gray max-w-none dark:prose-invert">{processContent(post.content)}</div>
            {/*<div*/}
            {/*  className="prose prose-gray max-w-none dark:prose-invert"*/}
            {/*  dangerouslySetInnerHTML={{ __html: post.content }}*/}
            {/*/>*/}
          </AnimatedSection>
        </article>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500">© 2025 Md Shaker Ibna Kamal. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
