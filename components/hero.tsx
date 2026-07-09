import Image from 'next/image'
import { ArrowLeft, ArrowRight, Download } from 'lucide-react'
import { LightningDecor } from '@/components/lightning-decor'
import { HeroLink } from '@/components/hero-link'
import { getLocaleConfig, type LocaleProps } from '@/lib/i18n'

export function Hero({ locale, messages: t }: LocaleProps) {
  const dir = getLocaleConfig(locale).dir
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <LightningDecor />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-emerald/20 blur-[120px] animate-pulse-glow"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="text-center lg:text-start">
          <span className="reveal in-view inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-semibold text-neon">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-4xl font-black leading-[1.15] text-white text-balance sm:text-5xl lg:text-6xl">
            {t.hero.title}
            <br />
            <span className="text-neon text-neon-glow">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 text-pretty lg:mx-0 lg:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <HeroLink
              href="#download"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald px-7 py-3.5 font-bold text-white shadow-neon transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Download className="size-5" />
              {t.common.downloadApp}
            </HeroLink>
            <HeroLink
              href="#how"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {t.common.learnHow}
              <Arrow className="size-5" />
            </HeroLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative animate-float-slow">
            <div
              className="absolute inset-6 rounded-[2.5rem] bg-neon/25 blur-3xl animate-pulse-glow"
              aria-hidden="true"
            />
            <Image
              src="/zwadHeroSec.png"
              alt={t.hero.imageAlt}
              width={1200}
              height={880}
              priority
              className="relative h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
