"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface Translations {
  nav: {
    howItWorks: string
    benefits: string
    pricing: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    cta1: string
    cta2: string
  }
  howItWorks: {
    title: string
    subtitle: string
    features: {
      title: string
      description: string
    }[]
  }
  benefits: {
    title: string
    subtitle: string
    items: {
      title: string
      description: string
    }[]
  }
  demo: {
    title: string
    subtitle: string
    form: {
      name: string
      email: string
      company: string
      employees: string
      message: string
      submit: string
      success: string
    }
  }
  footer: {
    rights: string
    privacy: string
    terms: string
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: "How It Works",
      benefits: "Benefits",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      badge: "ISO 9001 Specialist",
      title: "The Ultimate AI for Business Excellence.",
      subtitle:
        "An organizational intelligence that learns from your company to help you organize tasks, measure performance, and achieve international quality standards.",
      cta1: "Request Demo",
      cta2: "Learn More",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "AI analyzes your company like an auditor, but with a coach mentality.",
      features: [
        {
          title: "Listen & Learn",
          description:
            "Analyzes the structure, departments, roles, processes, objectives, and goals of your organization.",
        },
        {
          title: "Identify Gaps",
          description: "Detects lack of definitions, evidence, or responsibilities needed in your company.",
        },
        {
          title: "Suggest Actions",
          description:
            "Defines processes, procedures, and collaborators: quality manual, internal audits, ISO procedures.",
        },
        {
          title: "Measure Maturity",
          description: "Evaluates organization management and proposes improvements based on global frameworks.",
        },
        {
          title: "Accompany You",
          description: "Provides advice, follows up with reminders, alerts, and guidance throughout your journey.",
        },
        {
          title: "Continuous Improvement",
          description: "Monitors KPIs, measures trends, reviews, and updates automatically and systematically.",
        },
      ],
    },
    benefits: {
      title: "Real Benefits",
      subtitle: "Transform your company into a world-class organization.",
      items: [
        {
          title: "Intelligent Organization",
          description: "Structure, automate tasks, resources, and processes strategically.",
        },
        {
          title: "Role Clarity",
          description: "Each person knows what they do, why, and how to contribute with clarity.",
        },
        {
          title: "Continuous Improvement",
          description: "AI identifies problems and generates action plans for continuous advancement.",
        },
        {
          title: "Total Traceability",
          description: "Every action is documented according to the full scope of ISO 9001.",
        },
        {
          title: "Comprehensive Management",
          description: "Unifies quality criteria encompassing organizational processes and resources.",
        },
        {
          title: "International Standard",
          description: "Based on ISO 9001:2015, we provide you with everything to certify your company.",
        },
      ],
    },
    demo: {
      title: "Request a Demo",
      subtitle: "Discover how Don Cándido IA can transform your organization's quality management.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        employees: "Number of Employees",
        message: "Tell us about your needs",
        submit: "Request Demo",
        success: "Thank you! We'll contact you soon.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  es: {
    nav: {
      howItWorks: "Cómo Funciona",
      benefits: "Beneficios",
      pricing: "Precios",
      contact: "Contacto",
    },
    hero: {
      badge: "Especialista en ISO 9001",
      title: "La IA Definitiva para la Excelencia Empresarial.",
      subtitle:
        "Una inteligencia organizacional que aprende de tu empresa para ayudarte a ordenar tareas, medir desempeño y alcanzar estándares internacionales de calidad.",
      cta1: "Solicitar Demo",
      cta2: "Ver Demostración",
    },
    howItWorks: {
      title: "Cómo Funciona",
      subtitle: "La IA analiza tu empresa como lo haría un auditor, pero con mentalidad de coach.",
      features: [
        {
          title: "Escucha y Aprende",
          description: "Analiza la estructura, departamentos, roles, procesos, objetivos y metas de tu organización.",
        },
        {
          title: "Identifica Vacíos",
          description: "Detecta falta de definiciones, evidencias o responsabilidades difusas en tu empresa.",
        },
        {
          title: "Sugiere Orden",
          description:
            "Define procesos, procedimientos y colaboradores: manual de calidad, auditorías internas, procedimientos ISO.",
        },
        {
          title: "Mide Madurez",
          description: "Evalúa la gestión de organización y propone mejoras basándose en marcos globales.",
        },
        {
          title: "Te Acompaña",
          description: "Ofrece asesoría, seguimiento con recordatorios, alertas y guía durante todo tu camino.",
        },
        {
          title: "Mejora Continua",
          description: "Monitorea KPIs, mide tendencias, revisa y actualiza de forma automática y sistemática.",
        },
      ],
    },
    benefits: {
      title: "Beneficios Reales",
      subtitle: "Transforma tu empresa en una organización de clase mundial.",
      items: [
        {
          title: "Organización Inteligente",
          description: "Estructura, automatiza tareas, recursos y procesos de forma inteligente y estratégica.",
        },
        {
          title: "Claridad de Roles",
          description: "Cada persona sabe qué hace, por qué y cómo contribuir con total claridad.",
        },
        {
          title: "Mejora Continua",
          description: "La IA detecta brechas y genera planes de acción para avanzar continuamente.",
        },
        {
          title: "Trazabilidad Total",
          description: "Cada acción queda documentada, desde el alcance de la ISO 9001 al integrar tu empresa.",
        },
        {
          title: "Gestión Integral",
          description: "Consolida los criterios de calidad con los procesos organizacionales y humanos.",
        },
        {
          title: "Estándar Internacional",
          description: "Basado en ISO 9001:2015, el estándar más usado y respetado globalmente.",
        },
      ],
    },
    demo: {
      title: "Solicita una Demo",
      subtitle: "Descubre cómo Don Cándido IA puede transformar la gestión de calidad de tu organización.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        company: "Nombre de la Empresa",
        employees: "Número de Empleados",
        message: "Cuéntanos sobre tus necesidades",
        submit: "Solicitar Demo",
        success: "¡Gracias! Te contactaremos pronto.",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
