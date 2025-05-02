"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/context/language-context"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()
    const [mounted, setMounted] = useState(false)

    // Only show UI after hydration to avoid mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")} className={language === "en" ? "bg-muted" : ""}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("de")} className={language === "de" ? "bg-muted" : ""}>
                    Deutsch
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
