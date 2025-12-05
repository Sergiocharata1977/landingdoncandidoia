"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Robot with holograms */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/attachments-gen-images-public-images-don-candido-hero.jpg"
          alt="Don Cándido IA - Futuristic AI Business Advisor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/60 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse delay-700" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-8 glow-cyan">
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            {t.hero.title.split(".")[0]}
            <span className="text-primary text-glow">.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("demo")}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground px-8 py-6 text-lg glow-cyan"
            >
              {t.hero.cta1}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="px-8 py-6 text-lg border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              <Play className="mr-2 w-5 h-5" />
              {t.hero.cta2}
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ISO 9001:2015
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-300" />
              AI-Powered
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-500" />
              24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
