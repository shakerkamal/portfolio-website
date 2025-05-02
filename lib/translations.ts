export const translations = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        blog: "Blog",

        // Hero
        greeting: "Hi, I'm Shaker",
        heroSubtitle: "A passionate developer building a better future by solving real-world problems.",
        viewWork: "View My Work",
        contactMe: "Contact Me",

        // About
        aboutMe: "About Me",
        whoIAm: "Who I Am",
        aboutDescription:
            "I'm a passionate Software Engineer with hands-on experience in ASP.NET Core, scalable API development, and system optimization. I have a proven track record of building enterprise solutions, improving CI/CD pipelines, and enhancing application performance. I thrive in collaborative environments and am committed to delivering clean, efficient, and reliable code.",

        // Section Titles
        experience: "Experience",
        education: "Education",
        interests: "Interests",

        // Skills
        skillsTitle: "Skills",
        technologiesIWorkWith: "Technologies I Work With",
        skillsDescription: "Here are some of the technologies and tools I'm proficient in.",

        // Projects
        myProjects: "My Projects",
        projectsDescription: "Check out some of my recent work.",
        viewProject: "View Project",

        // Blog
        latestArticles: "Latest Articles",
        blogDescription: "Check out my latest thoughts and tutorials.",
        readMore: "Read More",
        viewAllPosts: "View All Posts",

        // Contact
        getInTouch: "Get In Touch",
        contactDescription: "Have a question or want to work together?",
        emailMe: "Email Me",
        copyEmail: "Copy Email",
        emailCopied: "Email copied!",
        verifyHuman: "Verify you're human",
        enterCaptcha: "Enter the text above",
        captchaError: "Incorrect captcha, please try again",
        refreshCaptcha: "Refresh",
        verify: "Verify",
        verifying: "Verifying...",
        emailProtected: "Email is protected",
        completeVerification: "Please complete the verification to view contact information",
        sendEmail: "Send Email",

        // Footer
        copyright: "© 2025 Md Shaker Ibna Kamal. All rights reserved.",

        // Print
        printResume: "Print Resume",
    },
    de: {
        // Navigation
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
        blog: "Blog",

        // Hero
        greeting: "Hallo, ich bin Shaker",
        heroSubtitle: "Ein leidenschaftlicher Entwickler, der durch die Lösung realer Probleme eine bessere Zukunft schafft.",
        viewWork: "Meine Arbeit",
        contactMe: "Kontaktiere mich",

        // About
        aboutMe: "Über mich",
        whoIAm: "Wer ich bin",
        aboutDescription:
            "Ich bin ein leidenschaftlicher Softwareingenieur mit praktischer Erfahrung in ASP.NET Core, skalierbarer API-Entwicklung und Systemoptimierung. Ich habe eine nachweisliche Erfolgsbilanz bei der Entwicklung von Unternehmenslösungen, der Verbesserung von CI/CD-Pipelines und der Verbesserung der Anwendungsleistung. Ich fühle mich in kollaborativen Umgebungen wohl und bin bestrebt, sauberen, effizienten und zuverlässigen Code zu liefern.",

        // Section Titles
        experience: "Berufserfahrung",
        education: "Ausbildung",
        interests: "Interessen",

        // Skills
        skillsTitle: "Fähigkeiten",
        technologiesIWorkWith: "Technologien, mit denen ich arbeite",
        skillsDescription: "Hier sind einige der Technologien und Tools, in denen ich versiert bin.",

        // Projects
        myProjects: "Meine Projekte",
        projectsDescription: "Schauen Sie sich einige meiner neuesten Arbeiten an.",
        viewProject: "Projekt ansehen",

        // Blog
        latestArticles: "Neueste Artikel",
        blogDescription: "Lesen Sie meine neuesten Gedanken und Tutorials.",
        readMore: "Weiterlesen",
        viewAllPosts: "Alle Beiträge anzeigen",

        // Contact
        getInTouch: "Kontakt aufnehmen",
        contactDescription: "Haben Sie eine Frage oder möchten Sie zusammenarbeiten?",
        emailMe: "E-Mail an mich",
        copyEmail: "E-Mail kopieren",
        emailCopied: "E-Mail kopiert!",
        verifyHuman: "Bestätigen Sie, dass Sie ein Mensch sind",
        enterCaptcha: "Geben Sie den Text oben ein",
        captchaError: "Falsches Captcha, bitte versuchen Sie es erneut",
        refreshCaptcha: "Aktualisieren",
        verify: "Bestätigen",
        verifying: "Überprüfung...",
        emailProtected: "E-Mail ist geschützt",
        completeVerification: "Bitte schließen Sie die Überprüfung ab, um Kontaktinformationen anzuzeigen",
        sendEmail: "E-Mail senden",

        // Footer
        copyright: "© 2025 Md Shaker Ibna Kamal. Alle Rechte vorbehalten.",

        // Print
        printResume: "Lebenslauf drucken",
    },
}

// German translations for experience data
export const experienceTranslations = {
    en: [
        {
            title: "Working Student",
            company: "NXP Semiconductors Germany",
            location: "Dresden, Germany",
            period: "06/2024-Present",
            description: [
                "Developed a Domain Specific Language (DSL) for API definition and code generation using JetBrains MPS.",
                "Automated Ant build generation process, leading to enhancements in the Continuous Integration/Continuous Deployment (CI/CD) pipeline.",
                "Conducted comprehensive process mappings and documentation to optimize operations and support informed decision-making.",
            ],
        },
        {
            title: "Software Engineer",
            company: "W4Solutions",
            location: "Sydney, Australia",
            period: "02/2019-01/2023",
            description: [
                "Built the backend of the Freight Broker System with REST APIs from the ground up with ASP.NET Core.",
                "Successfully designed UML diagrams to address various business requirements from the product owner.",
                "Implemented a rating engine that decreased human interaction, leading to a substantial increase in profit margin.",
                "Introduced complex stored procedures for batch operations on large datasets.",
                "Integrated an asynchronous design pattern for managing long-running tasks with Mass Transit, resulting in a scalable system.",
            ],
        },
        {
            title: "Consultant",
            company: "Decision Inc. Australia",
            location: "Sydney, Australia",
            period: "07/2022-10/2022",
            description: [
                "Developed Notification and Emailing System to automate push notifications.",
                "Refactored code of microservice based system to enhance reliability and scalability.",
                "Analyzed and evaluated requirements for application development.",
                "Enhanced database queries by 20% by simplifying complex queries.",
                "Conducted code review of microservice based system using MediatR and RabbitMQ to optimize application performance.",
            ],
        },
    ],
    de: [
        {
            title: "Werkstudent",
            company: "NXP Semiconductors Germany",
            location: "Dresden, Deutschland",
            period: "06/2024-Heute",
            description: [
                "Entwicklung einer domänenspezifischen Sprache (DSL) für API-Definition und Code-Generierung mit JetBrains MPS.",
                "Automatisierung des Ant-Build-Generierungsprozesses, was zu Verbesserungen in der Continuous Integration/Continuous Deployment (CI/CD)-Pipeline führte.",
                "Durchführung umfassender Prozessmappings und Dokumentation zur Optimierung von Abläufen und zur Unterstützung fundierter Entscheidungsfindung.",
            ],
        },
        {
            title: "Software-Entwickler",
            company: "W4Solutions",
            location: "Sydney, Australien",
            period: "02/2019-01/2023",
            description: [
                "Aufbau des Backends des Freight Broker Systems mit REST-APIs von Grund auf mit ASP.NET Core.",
                "Erfolgreiche Gestaltung von UML-Diagrammen zur Erfüllung verschiedener Geschäftsanforderungen des Produkteigentümers.",
                "Implementierung einer Bewertungs-Engine, die menschliche Interaktion reduzierte und zu einer erheblichen Steigerung der Gewinnmarge führte.",
                "Einführung komplexer gespeicherter Prozeduren für Batch-Operationen auf großen Datensätzen.",
                "Integration eines asynchronen Designmusters für die Verwaltung lang laufender Aufgaben mit Mass Transit, was zu einem skalierbaren System führte.",
            ],
        },
        {
            title: "Berater",
            company: "Decision Inc. Australia",
            location: "Sydney, Australien",
            period: "07/2022-10/2022",
            description: [
                "Entwicklung eines Benachrichtigungs- und E-Mail-Systems zur Automatisierung von Push-Benachrichtigungen.",
                "Refaktorierung des Codes eines mikroservicebasierten Systems zur Verbesserung der Zuverlässigkeit und Skalierbarkeit.",
                "Analyse und Bewertung von Anforderungen für die Anwendungsentwicklung.",
                "Verbesserung von Datenbankabfragen um 20% durch Vereinfachung komplexer Abfragen.",
                "Durchführung von Code-Reviews eines mikroservicebasierten Systems mit MediatR und RabbitMQ zur Optimierung der Anwendungsleistung.",
            ],
        },
    ],
}

// German translations for education data
export const educationTranslations = {
    en: [
        {
            degree: "Masters' in Automotive Software Engineering",
            institution: "Chemnitz University of Technology",
            year: "2021-Present",
            description: "Specialized in Software components for Automotive sector.",
        },
        {
            degree: "Bachelors' in Computer Science and Engineering",
            institution: "State University",
            year: "2015-2018",
            description: "Studied with Scholarship. Focus on programming and algorithms.",
        },
    ],
    de: [
        {
            degree: "Master in Automotive Software Engineering",
            institution: "Technische Universität Chemnitz",
            year: "2021-Heute",
            description: "Spezialisiert auf Softwarekomponenten für den Automobilsektor.",
        },
        {
            degree: "Bachelor in Informatik und Ingenieurwesen",
            institution: "Staatliche Universität",
            year: "2015-2018",
            description: "Studierte mit Stipendium. Schwerpunkte: Programmierung und Algorithmen.",
        },
    ],
}

// German translations for interests data
export const interestsTranslations = {
    en: [
        "Open source contribution and community involvement",
        "Hiking and outdoor photography",
        "Reading technical books and attending conferences",
        "Learning new programming languages and frameworks",
        "Teaching and mentoring junior developers",
    ],
    de: [
        "Beitrag zu Open-Source-Projekten und Community-Engagement",
        "Wandern und Outdoor-Fotografie",
        "Lesen technischer Bücher und Teilnahme an Konferenzen",
        "Erlernen neuer Programmiersprachen und Frameworks",
        "Unterrichten und Mentoring von Junior-Entwicklern",
    ],
}
