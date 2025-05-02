"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Check } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface SimpleCaptchaProps {
    onVerify: () => void
}

export function SimpleCaptcha({ onVerify }: SimpleCaptchaProps) {
    const { language } = useLanguage()
    const t = translations[language]

    const [captchaText, setCaptchaText] = useState("")
    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState(false)
    const [isVerifying, setIsVerifying] = useState(false)

    // Generate a simple captcha
    const generateCaptcha = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
        let result = ""
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setCaptchaText(result)
        setUserInput("")
        setError(false)
    }

    // Generate captcha on component mount
    useEffect(() => {
        generateCaptcha()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsVerifying(true)

        // Simulate verification delay
        setTimeout(() => {
            if (userInput === captchaText) {
                onVerify()
            } else {
                setError(true)
                generateCaptcha()
            }
            setIsVerifying(false)
        }, 500)
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center space-x-2 text-primary">
                    <Shield className="h-5 w-5" />
                    <h3 className="font-medium">{t.verifyHuman}</h3>
                </div>

                <div className="w-full bg-background border rounded-md p-3 text-center select-none">
          <span
              className="font-mono text-lg tracking-wider font-bold"
              style={{
                  letterSpacing: "0.25em",
                  fontStyle: "italic",
                  textDecoration: "line-through",
                  background: "repeating-linear-gradient(45deg, currentColor, transparent 2px)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "currentColor",
              }}
          >
            {captchaText}
          </span>
                </div>

                <form onSubmit={handleSubmit} className="w-full space-y-3">
                    <Input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={t.enterCaptcha}
                        className={`w-full ${error ? "border-destructive" : ""}`}
                        aria-label={t.enterCaptcha}
                    />

                    {error && <p className="text-sm text-destructive">{t.captchaError}</p>}

                    <div className="flex space-x-2">
                        <Button type="button" variant="outline" onClick={generateCaptcha} className="flex-1">
                            {t.refreshCaptcha}
                        </Button>
                        <Button type="submit" className="flex-1" disabled={isVerifying || userInput.length === 0}>
                            {isVerifying ? (
                                <span className="flex items-center">
                  <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                  >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                                    {t.verifying}
                </span>
                            ) : (
                                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                                    {t.verify}
                </span>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
