import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { LightningDecor } from '@/components/lightning-decor'
import { Reveal } from '@/components/reveal'
import { StoreBadges } from '@/components/store-badges'
import { HeroLink } from '@/components/hero-link'
import type { Messages } from '@/lib/i18n'

export function FinalCta({ messages: t }: { messages: Messages }) {
  return (
    <section id="download" className="scroll-mt-24 px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-hero-gradient px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <LightningDecor className="opacity-70" />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-neon/20 blur-[100px] animate-pulse-glow"
          aria-hidden="true"
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <h2 className="font-display text-3xl font-black leading-tight text-white text-balance sm:text-4xl">
              {t.finalCta.title} <br /> {t.finalCta.titleLine2}{' '}
              <span className="text-neon text-neon-glow">{t.finalCta.titleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-white/75 text-pretty">
              {t.finalCta.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StoreBadges app="zwad" messages={t} />
              <HeroLink
                href="#stations"
                className="flex h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <MapPin className="size-5" />
                {t.finalCta.findStation}
              </HeroLink>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-xs pb-8 sm:max-w-sm">
            <div className="relative animate-float-slow">
              <div
                className="absolute inset-10 rounded-full bg-neon/20 blur-3xl animate-pulse-glow"
                aria-hidden="true"
              />
              <Image
                src="/phone_station_transparent_HQ.png"
                alt={t.finalCta.phoneImageAlt}
                width={686}
                height={828}
                className="relative mx-auto h-auto w-[85%] object-contain drop-shadow-2xl"
              />
            </div>

            <div className="absolute -bottom-1 start-4 w-24 overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-neon backdrop-blur-sm sm:start-2 sm:w-28">
              <Image
                src="/finalcta_transparent.png"
                alt={t.finalCta.qrImageAlt}
                width={600}
                height={450}
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
