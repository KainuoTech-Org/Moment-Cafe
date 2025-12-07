"use client";

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { FadeIn } from "@/components/animations/FadeIn"

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <div className="space-y-16">
        <section className="text-center space-y-6">
          <FadeIn direction="up">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h1>
            <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
              {t.about.founded}
            </p>
          </FadeIn>
        </section>

        <section className="relative aspect-video w-full overflow-hidden rounded-xl">
           <FadeIn direction="up" delay={0.2} className="h-full w-full">
             <Image
               src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2000"
               alt="Coffee Brewing"
               fill
               className="object-cover"
             />
           </FadeIn>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <FadeIn direction="right">
               <h2 className="font-serif text-3xl font-semibold">{t.about.philosophy_title}</h2>
               <p className="text-muted-foreground leading-relaxed mt-4">
                 {t.about.p1}
               </p>
               <p className="text-muted-foreground leading-relaxed mt-4">
                 {t.about.p2}
               </p>
             </FadeIn>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <FadeIn direction="left" delay={0.2} className="h-full w-full">
              <Image
               src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1000"
               alt="Minimalist Cafe Corner"
               fill
               className="object-cover"
             />
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  )
}
