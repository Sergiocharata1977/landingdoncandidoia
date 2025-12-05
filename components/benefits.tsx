"use client"

import { useLanguage } from "@/components/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, UserCheck, Rocket, FileCheck, Layers, Globe } from "lucide-react"

const icons = [Building2, UserCheck, Rocket, FileCheck, Layers, Globe]

export function Benefits() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/attachments-gen-images-public-images-don-candido-hero.jpg"
          alt=""
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.benefits.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.benefits.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.items.map((item, index) => {
            const Icon = icons[index]
            const isEven = index % 2 === 0
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${isEven ? "from-primary/20 to-accent/20" : "from-secondary/20 to-primary/20"} border ${isEven ? "border-primary/20" : "border-secondary/20"} flex items-center justify-center mb-5 transition-all group-hover:scale-110`}
                  >
                    <Icon className={`w-7 h-7 ${isEven ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
