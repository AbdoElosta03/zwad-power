import Image from 'next/image'
import { Tag, Wallet, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { StoreBadges } from '@/components/store-badges'

const features = [
  { icon: Tag, title: 'تسعير واضح', desc: 'بدون رسوم خفية' },
  { icon: Wallet, title: 'رصيدك في أمان', desc: 'خصم من محفظتك فقط' },
  { icon: ShieldCheck, title: 'آمن وسريع', desc: 'معتمد من Primo' },
]

export function PrimoPayment() {
  return (
    <section id="primo" className="scroll-mt-24 bg-secondary py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-xl">
          <div
            className="absolute inset-4 rounded-[2.5rem] bg-emerald/20 blur-3xl animate-pulse-glow"
            aria-hidden="true"
          />
          <div className="relative animate-float-slow overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-2xl shadow-brand/10 sm:p-8">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <Image
                src="/primoBalanceMob.png"
                alt="شاشة رصيد Primo على الحاسوب"
                width={941}
                height={1672}
                className="h-64 w-auto object-contain sm:h-80"
              />
              <Image
                src="/primotech-iphone-cta.png"
                alt="شاشة رصيد Primo على الهاتف"
                width={860}
                height={1855}
                className="h-64 w-auto object-contain sm:h-80"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-card px-4 py-2 shadow-sm">
              <span className="font-display text-lg font-black text-[#1a4fd6]">
                Primo
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                طريقة الدفع الرسمية
              </span>
            </div>
            <h2 className="font-display text-3xl font-black text-foreground text-balance sm:text-4xl">
              الدفع يتم عبر تطبيق Primo
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground text-pretty">
              كل العمليات تتم داخل تطبيق Primo بكل أمان. امسح الرمز، اختر منفذاً،
              ادفع، واستلم الباوربانك في خطوات بسيطة وواضحة.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 100}
                className="rounded-2xl border border-border bg-card p-4"
              >
                <f.icon className="size-6 text-emerald" />
                <p className="mt-3 font-display font-bold text-foreground">
                  {f.title}
                </p>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <StoreBadges className="mt-8" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
