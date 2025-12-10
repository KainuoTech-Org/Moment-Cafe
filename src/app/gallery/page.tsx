"use client";

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { FadeIn } from "@/components/animations/FadeIn"

const photos = [
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000",
  "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1000",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000",
  "https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
]

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <FadeIn direction="up">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8">{t.gallery.title}</h1>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t.gallery.subtitle}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {photos.map((src, index) => (
          <FadeIn key={index} direction="up" delay={index * 0.05} className="h-full">
            <div className="relative aspect-square overflow-hidden rounded-lg group h-full w-full">
               <Image 
                 src={src} 
                 alt={`Gallery image ${index + 1}`}
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
