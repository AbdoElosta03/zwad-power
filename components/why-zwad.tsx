import Image from 'next/image'
import { Backpack, BatteryCharging, Clock, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import type { Messages } from '@/lib/i18n'

const reasonIcons = [Backpack, GraduationCap, Clock, BatteryCharging]
const sceneImages = ['/zwad-cafe.jpg', '/zwad-mall.jpg', '/zwadBeatch.jpg']

export function WhyZwad({ messages: t }: { messages: Messages }) {
  return (
    <section className="bg-deep-gradient py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold text-neon">{t.whyZwad.eyebrow}</span>
          <h2 className="mt-2 font-display text-3xl font-black text-balance sm:text-4xl">
            {t.whyZwad.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/70 text-pretty">
            {t.whyZwad.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyZwad.reasons.map((r, i) => {
            const Icon = reasonIcons[i]
            return (
              <Reveal
                key={r.title}
                delay={i * 90}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.16]"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-neon/15 text-neon">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-4 font-display font-bold">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  {r.desc}
                </p>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120} className="mt-12 w-full min-w-0">
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0">
            {t.whyZwad.scenes.map((card, i) => (
              <div
                key={sceneImages[i]}
                className="aspect-square w-[78%] shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-2xl shadow-black/50 transition-transform duration-300 ease-out hover:-translate-y-1 sm:w-auto"
              >
                <Image
                  src={sceneImages[i]}
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
