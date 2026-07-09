import { ArrowLeft, ArrowRight, BatteryCharging, QrCode, RotateCcw, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { getLocaleConfig, type LocaleProps } from '@/lib/i18n'

const stepIcons = [QrCode, Smartphone, BatteryCharging, RotateCcw]

export function HowItWorks({ locale, messages: t }: LocaleProps) {
  const dir = getLocaleConfig(locale).dir
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-emerald">{t.howItWorks.eyebrow}</span>
        <h2 className="mt-2 font-display text-3xl font-black text-foreground text-balance sm:text-4xl">
          {t.howItWorks.title}
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty">
          {t.howItWorks.subtitle}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.howItWorks.steps.map((step, i) => {
          const Icon = stepIcons[i]
          return (
            <Reveal key={step.title} delay={i * 110} className="relative">
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/40 hover:shadow-xl hover:shadow-emerald/10">
                <div className="flex items-center justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-emerald/12 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
                    <Icon className="size-7" />
                  </div>
                  <span className="grid size-9 place-items-center rounded-full bg-brand-deep font-display text-sm font-bold text-neon">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
              {i < t.howItWorks.steps.length - 1 && (
                <Arrow
                  className="absolute -start-5 top-1/2 hidden size-6 -translate-y-1/2 text-emerald/40 lg:block"
                  aria-hidden="true"
                />
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
