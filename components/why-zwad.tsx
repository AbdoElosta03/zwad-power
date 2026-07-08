import Image from 'next/image'
import { Backpack, BatteryCharging, Clock, GraduationCap, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Backpack,
    title: 'لا حاجة لحمل الباوربانك',
    desc: 'استأجر عند الحاجة فقط دون أن تحمل جهازك الخاص طوال الوقت.',
  },
  {
    icon: GraduationCap,
    title: 'مثالي للجميع',
    desc: 'للطلاب والمسافرين والموظفين وكل من هو دائم التنقل.',
  },
  {
    icon: Clock,
    title: 'استلام سريع وإرجاع مرن',
    desc: 'خذ الباوربانك في ثوانٍ وأعده في أي محطة تناسبك.',
  },
  {
    icon: BatteryCharging,
    title: 'تجربة شحن ذكية',
    desc: 'ابقَ متصلاً ومشحوناً أثناء تنقلك في كل مكان.',
  },
]

const scenes = [
  {
    src: '/zwad-cafe.jpg',
    alt: 'أشخاص يستخدمون باوربانك ZWAD في مقهى',
  },
  {
    src: '/zwad-mall.jpg',
    alt: 'محطة ZWAD داخل مركز تجاري',
  },
  {
    src: '/zwadBeatch.jpg',
    alt: 'أشخاص يستخدمون باوربانك ZWAD في الشاطئ',
  },
]

export function WhyZwad() {
  return (
    <section className="bg-deep-gradient py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold text-neon">لماذا ZWAD؟</span>
          <h2 className="mt-2 font-display text-3xl font-black text-balance sm:text-4xl">
            الشحن الذكي أثناء التنقل
          </h2>
          <p className="mt-4 leading-relaxed text-white/70 text-pretty">
            صُممت خدمة ZWAD لتمنحك حرية الحركة دون قلق من نفاد البطارية، بأسلوب
            عصري يناسب إيقاع حياتك اليومي.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 90}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.16]"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-neon/15 text-neon">
                <r.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-display font-bold">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                {r.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 w-full min-w-0">
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
            {scenes.map((card) => (
              <div
                key={card.src}
                className="aspect-square w-[78%] shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/50 transition-transform duration-300 ease-out hover:-translate-y-1 sm:w-auto"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
