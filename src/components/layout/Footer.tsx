"use client";

import Link from "next/link"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Moment Café</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.footer.visit}</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {t.home.info.address_val}
            </p>
            <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line">
              {t.home.info.hours_val}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t.footer.connect}</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
