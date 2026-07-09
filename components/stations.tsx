import { Navigation } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { StationsMap } from '@/components/stations-map-loader'
import type { Messages } from '@/lib/i18n'

export function Stations({ messages: t }: { messages: Messages }) {
  return (
    <section id="stations" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-bold text-emerald">{t.stations.eyebrow}</span>
          <h2 className="mt-2 font-display text-3xl font-black text-foreground text-balance sm:text-4xl">
            {t.stations.title}
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground text-pretty">
            {t.stations.description}
          </p>
          <a
            href="#download"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-deep px-6 py-3.5 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Navigation className="size-5 text-neon" />
            {t.stations.cta}
          </a>
        </Reveal>

        <Reveal delay={120}>
          <StationsMap
            stations={t.stations.mapStations}
            activeCount={t.stations.activeCount}
            activeLabel={t.stations.activeLabel}
          />
        </Reveal>
      </div>
    </section>
  )
}
