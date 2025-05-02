"use client"

import { useState } from "react"
import { Check, Copy, CodeIcon, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vs, atomDark, materialLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useTheme } from "next-themes"

interface CodeSnippetProps {
    children: string
    language?: string
    title?: string
    variant?: "default" | "terminal" | "json" | "html" | "css" | "javascript" | "typescript" | "jsx" | "tsx"
    showLineNumbers?: boolean
}

export function CodeSnippet({
                                children,
                                language = "javascript",
                                title,
                                variant = "default",
                                showLineNumbers = true,
                            }: CodeSnippetProps) {
    const [copied, setCopied] = useState(false)
    const { theme, setTheme } = useTheme()
    const [codeTheme, setCodeTheme] = useState<"dark" | "light">("dark")

    // Map variant to language for syntax highlighter
    const getLanguage = () => {
        switch (variant) {
            case "terminal":
                return "bash"
            case "json":
                return "json"
            case "html":
                return "html"
            case "css":
                return "css"
            case "javascript":
                return "javascript"
            case "typescript":
                return "typescript"
            case "jsx":
                return "jsx"
            case "tsx":
                return "tsx"
            default:
                return language || "javascript"
        }
    }

    // Get theme style based on current theme
    const getThemeStyle = () => {
        if (codeTheme === "dark") {
            return variant === "terminal" ? atomDark : oneDark
        } else {
            return variant === "terminal" ? vs : materialLight
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    const toggleCodeTheme = () => {
        setCodeTheme(codeTheme === "dark" ? "light" : "dark")
    }

    return (
        <div className="my-6 rounded-lg overflow-hidden border">
            {/* Header with language and copy button */}
            <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b">
                <div className="flex items-center gap-2">
                    <CodeIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">{title || variant}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={toggleCodeTheme}
                        aria-label={`Switch to ${codeTheme === "dark" ? "light" : "dark"} theme`}
                    >
                        {codeTheme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-xs"
                        onClick={copyToClipboard}
                        aria-label="Copy code"
                    >
                        {copied ? (
                            <>
                                <Check className="h-3.5 w-3.5 mr-1" />
                                <span>Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-3.5 w-3.5 mr-1" />
                                <span>Copy</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {/* Code content with syntax highlighting */}
            <div className="text-sm">
                <SyntaxHighlighter
                    language={getLanguage()}
                    style={getThemeStyle()}
                    showLineNumbers={showLineNumbers}
                    wrapLines={true}
                    customStyle={{
                        margin: 0,
                        padding: "1rem",
                        borderRadius: 0,
                    }}
                >
                    {children}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}
