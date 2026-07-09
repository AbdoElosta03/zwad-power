'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import type { Messages } from '@/lib/i18n'

export function Faq({ messages: t }: { messages: Messages }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="text-center">
        <span className="text-sm font-bold text-emerald">{t.faq.eyebrow}</span>
        <h2 className="mt-2 font-display text-3xl font-black text-foreground text-balance sm:text-4xl">
          {t.faq.title}
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {t.faq.items.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.q} delay={i * 70}>
              <div
                className={cn(
                  'overflow-hidden rounded-2xl border bg-card transition-colors',
                  isOpen ? 'border-emerald/40' : 'border-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-emerald transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
