"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export function PrintButton() {
    const { language } = useLanguage()
    const t = translations[language]

    const handlePrint = () => {
        window.print()
    }

    return (
        <Button
            onClick={handlePrint}
            variant="outline"
            className="print:hidden transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
        >
            <Printer className="mr-2 h-4 w-4" />
            {t.printResume}
        </Button>
    )
}
