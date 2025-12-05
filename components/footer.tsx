"use client"

import { useLanguage } from "@/components/language-context"
import { Bot } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">
              Don Cándido <span className="text-primary">IA</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.terms}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Don Cándido IA. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
