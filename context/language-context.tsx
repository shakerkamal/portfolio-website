"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "de"

interface LanguageContextType {
    language: Language
    setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Try to get the language from localStorage, default to "en"
    const [language, setLanguage] = useState<Language>("en")

    // Update localStorage when language changes
    useEffect(() => {
        try {
            localStorage.setItem("language", language)
        } catch (error) {
            console.error("Error setting language in localStorage:", error)
        }
    }, [language])

    // Initialize language from localStorage on mount
    useEffect(() => {
        try {
            const savedLanguage = localStorage.getItem("language") as Language
            if (savedLanguage && (savedLanguage === "en" || savedLanguage === "de")) {
                setLanguage(savedLanguage)
            }
        } catch (error) {
            console.error("Error getting language from localStorage:", error)
        }
    }, [])

    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
