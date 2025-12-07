"use client";

import Link from "next/link"
import { Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/LanguageContext"

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/menu", label: t.nav.menu },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">
          Moment Café
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-muted-foreground hover:text-foreground">
             <Globe className="h-4 w-4 mr-1" />
             {language === 'en' ? '中' : 'EN'}
          </Button>
          <Button asChild variant="default" size="sm">
            <Link href="https://www.opentable.com/" target="_blank">{t.nav.reserve}</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="px-2">
               {language === 'en' ? '中' : 'EN'}
            </Button>
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium">
                    {link.label}
                    </Link>
                ))}
                <Button asChild className="w-full">
                    <Link href="https://www.opentable.com/" target="_blank">{t.nav.reserve}</Link>
                </Button>
                </nav>
            </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  )
}
