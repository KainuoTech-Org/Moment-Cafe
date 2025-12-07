"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { FadeIn } from "@/components/animations/FadeIn"

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
          alt="Moment Café Interior"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="relative z-10 text-center text-white space-y-6 max-w-2xl px-4">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">
              {t.home.hero.title}
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-lg md:text-xl font-light text-white/90">
              {t.home.hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 border-none rounded-full px-8">
                <Link href="/menu">{t.home.hero.cta}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FadeIn direction="up">
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
              {t.home.philosophy.title}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
              &ldquo;{t.home.philosophy.quote}&rdquo;
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t.home.philosophy.desc}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Highlights / Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-16 items-center">
             <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop"
                  alt="Latte Art"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
             </div>
             <div className="p-8 md:p-0">
                <FadeIn direction="right">
                  <h3 className="font-serif text-3xl mb-4">{t.home.highlights.coffee_title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t.home.highlights.coffee_desc}
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/menu" className="group">
                      {t.home.highlights.coffee_btn} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </FadeIn>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-16 items-center mt-16 md:mt-24">
             <div className="order-2 md:order-1 p-8 md:p-0">
                <FadeIn direction="left">
                  <h3 className="font-serif text-3xl mb-4">{t.home.highlights.food_title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t.home.highlights.food_desc}
                  </p>
                   <Button asChild variant="outline">
                    <Link href="/menu" className="group">
                      {t.home.highlights.food_btn} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </FadeIn>
             </div>
             <div className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1000&auto=format&fit=crop"
                  alt="Pastries"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-700"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Info Section with Google Maps */}
      <section className="py-24 bg-zinc-900 text-white text-center">
         <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <h2 className="font-serif text-3xl mb-8">{t.home.info.title}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
               
               {/* Info Columns */}
               <FadeIn direction="right" className="w-full">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                    <div className="space-y-2">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400">{t.home.info.address_title}</h4>
                      <p className="whitespace-pre-line">{t.home.info.address_val}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400">{t.home.info.hours_title}</h4>
                      <p className="whitespace-pre-line">{t.home.info.hours_val}</p>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <h4 className="font-semibold uppercase tracking-wider text-zinc-400">{t.home.info.contact_title}</h4>
                      <p>(+852) 2345-6789<br/>hello@momentcafe.hk</p>
                    </div>
                 </div>
               </FadeIn>

               {/* Google Maps Embed */}
               <FadeIn direction="left" className="w-full">
                 <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.683407986793!2d114.1517413760411!3d22.28383837969848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007c6f050d4f%3A0x264188540306381!2s18%20Gough%20St%2C%20Central!5e0!3m2!1sen!2shk!4v1709820000000!5m2!1sen!2shk" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Moment Cafe Location"
                    ></iframe>
                 </div>
               </FadeIn>

            </div>
         </div>
      </section>
    </div>
  )
}
