"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { DemoForm } from "@/components/demo-form"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <HowItWorks />
          <Benefits />
          <DemoForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
