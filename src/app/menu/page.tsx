"use client";

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/LanguageContext"
import { FadeIn } from "@/components/animations/FadeIn"

export default function MenuPage() {
  const { t, language } = useLanguage();

  const menu = [
    {
      category: t.menu.coffee,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
      items: [
        { name: language === 'en' ? "Espresso" : "濃縮咖啡", price: "$3.50", description: language === 'en' ? "Rich and bold single shot." : "濃郁厚實的單份濃縮。" },
        { name: language === 'en' ? "Americano" : "美式咖啡", price: "$4.00", description: language === 'en' ? "Espresso with hot water." : "濃縮咖啡加入熱水。" },
        { name: language === 'en' ? "Latte" : "拿鐵", price: "$5.00", description: language === 'en' ? "Espresso with steamed milk." : "濃縮咖啡加入蒸氣牛奶。" },
        { name: language === 'en' ? "Cappuccino" : "卡布奇諾", price: "$5.00", description: language === 'en' ? "Equal parts espresso, steamed milk, and foam." : "濃縮咖啡、牛奶與奶泡的完美比例。" },
        { name: language === 'en' ? "Pour Over" : "手沖咖啡", price: "$6.00", description: language === 'en' ? "Single origin beans, hand brewed." : "嚴選單品豆，手工沖煮。" },
        { name: language === 'en' ? "Cold Brew" : "冷萃咖啡", price: "$5.50", description: language === 'en' ? "Steeped for 24 hours for smoothness." : "24小時低溫萃取，口感滑順。" },
      ]
    },
    {
      category: t.menu.tea,
      image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?auto=format&fit=crop&w=800&q=80",
      items: [
        { name: language === 'en' ? "Matcha Latte" : "抹茶拿鐵", price: "$5.50", description: language === 'en' ? "Premium ceremonial matcha." : "選用高級儀式級抹茶粉。" },
        { name: language === 'en' ? "Earl Grey" : "伯爵茶", price: "$4.50", description: language === 'en' ? "Classic black tea with bergamot." : "經典佛手柑風味紅茶。" },
        { name: language === 'en' ? "Jasmine Green" : "茉莉綠茶", price: "$4.50", description: language === 'en' ? "Fragrant floral green tea." : "清香撲鼻的茉莉花茶。" },
        { name: language === 'en' ? "Chamomile" : "洋甘菊茶", price: "$4.50", description: language === 'en' ? "Soothing herbal infusion." : "舒緩身心的草本茶。" },
      ]
    },
    {
      category: t.menu.desserts,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      items: [
        { name: language === 'en' ? "Croissant" : "可頌", price: "$4.00", description: language === 'en' ? "Buttery and flaky, baked fresh." : "層次分明，每日現烤。" },
        { name: language === 'en' ? "Almond Croissant" : "杏仁可頌", price: "$5.00", description: language === 'en' ? "Filled with almond cream." : "內餡滿滿的杏仁奶油。" },
        { name: language === 'en' ? "Cheesecake" : "巴斯克乳酪蛋糕", price: "$6.50", description: language === 'en' ? "New York style or Matcha infused." : "濃郁綿密，可選原味或抹茶。" },
        { name: language === 'en' ? "Scone" : "司康", price: "$4.50", description: language === 'en' ? "Served with clotted cream and jam." : "搭配凝脂奶油與果醬。" },
        { name: language === 'en' ? "Brownie" : "布朗尼", price: "$4.00", description: language === 'en' ? "Rich dark chocolate with walnuts." : "濃郁黑巧克力搭配核桃。" },
      ]
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <FadeIn direction="up">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">{t.menu.title}</h1>
      </FadeIn>
      
      <div className="space-y-24">
        {menu.map((section, index) => (
          <div key={section.category} className={`flex flex-col gap-12 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-lg">
               <FadeIn direction={index % 2 === 0 ? "right" : "left"} className="h-full w-full">
                  <Image
                    src={section.image}
                    alt={section.category}
                    fill
                    className="object-cover"
                  />
               </FadeIn>
            </div>

            {/* List Section */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <h2 className="font-serif text-3xl font-semibold mb-8 border-b pb-4">{section.category}</h2>
                <div className="space-y-8">
                  {section.items.map((item) => (
                    <div key={item.name} className="group">
                      <div className="flex justify-between items-baseline mb-1">
                          <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{item.name}</h3>
                          <span className="text-lg font-semibold">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
         <FadeIn direction="up" delay={0.4}>
            <Separator className="mb-8" />
            <p className="text-muted-foreground text-sm">
              {t.menu.note}
            </p>
         </FadeIn>
      </div>
    </div>
  )
}
