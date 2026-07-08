import { MapPin, Plug, ShieldCheck, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const benefits = [
  {
    icon: Zap,
    title: 'وصول سريع',
    desc: 'باوربانك جاهز خلال ثوانٍ',
  },
  {
    icon: MapPin,
    title: 'محطات قريبة منك',
    desc: 'آلاف المحطات في ليبيا',
  },
  {
    icon: ShieldCheck,
    title: 'دفع سهل وآمن',
    desc: 'عبر تطبيق Primo',
  },
  {
    icon: Plug,
    title: 'شحن متعدد المنافذ',
    desc: 'منافذ متعددة لأجهزتك',
  },
]

export function BenefitsBar() {
  return (
    <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-4 rounded-3xl border border-border bg-card p-4 shadow-xl shadow-brand/5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal
            key={b.title}
            delay={i * 90}
            className="flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-accent"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-emerald/12 text-emerald">
              <b.icon className="size-6" />
            </div>
            <div>
              <p className="font-display font-bold text-foreground">{b.title}</p>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
