"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/components/language-context"
import { Menu, X, Bot } from "lucide-react"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">
              Don Cándido <span className="text-primary">IA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t.nav.benefits}
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Selector & CTA */}
          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={(val) => setLanguage(val as "en" | "es")}>
              <SelectTrigger className="w-24 h-9 text-sm bg-muted/50 border-primary/30 text-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-primary/30">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={() => scrollToSection("demo")}
              className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground glow-cyan"
            >
              {t.hero.cta1}
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                {t.nav.benefits}
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="text-muted-foreground hover:text-primary transition-colors text-sm text-left"
              >
                {t.nav.contact}
              </button>
              <Button
                onClick={() => scrollToSection("demo")}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground w-full mt-2"
              >
                {t.hero.cta1}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
