import { cn } from '@/lib/utils'
import type { Messages } from '@/lib/i18n'

const STORE_LINKS = {
  zwad: {
    googlePlay: 'https://play.google.com/store/apps/details?id=kh.standard.zwad',
    appStore: 'https://apps.apple.com/us/app/zwad/id6745175895?l=a',
  },
  primo: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.tabadull.souqprimo&hl=ar',
    appStore: 'https://apps.apple.com/om/app/primotech/id1459370779?l=ar',
  },
} as const

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
      <path fill="#00D2FF" d="M3.6 2.3 13.1 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1Z" />
      <path fill="#00E676" d="M3.6 2.3c.3-.2.7-.2 1 0l11.2 6.5-2.7 3.2L3.6 2.3Z" />
      <path fill="#FF3D00" d="m16.8 8.8 3.1 1.8c.8.5.8 1.7 0 2.2l-3.1 1.8L14.1 12l2.7-3.2Z" />
      <path fill="#FFC400" d="M3.6 21.7 13.1 12l2.7 3.2L4.6 21.7c-.3.2-.7.2-1 0Z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0 fill-current" aria-hidden="true">
      <path d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.1 0 1.9-1 2.6-2 .8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.5ZM14.3 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2Z" />
    </svg>
  )
}

export function StoreBadges({
  messages: t,
  app = 'zwad',
  className,
  variant = 'dark',
}: {
  messages: Messages
  app?: 'zwad' | 'primo'
  className?: string
  variant?: 'dark' | 'light'
}) {
  const links = STORE_LINKS[app]
  const badges = app === 'primo' ? t.primoStoreBadges : t.storeBadges
  const base =
    variant === 'dark'
      ? 'bg-black text-white hover:bg-black/85'
      : 'bg-white text-brand-deep ring-1 ring-black/10 hover:bg-white/90'

  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <a
        href={links.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-3 rounded-xl px-4 py-2.5 transition-transform duration-200 hover:-translate-y-0.5',
          base,
        )}
        aria-label={badges.googlePlayAria}
      >
        <GooglePlayIcon />
        <span className="text-start leading-tight">
          <span className="block text-[10px] opacity-70">{badges.googlePlayTop}</span>
          <span className="block font-display text-sm font-bold">{badges.googlePlayBottom}</span>
        </span>
      </a>
      <a
        href={links.appStore}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-3 rounded-xl px-4 py-2.5 transition-transform duration-200 hover:-translate-y-0.5',
          base,
        )}
        aria-label={badges.appStoreAria}
      >
        <AppleIcon />
        <span className="text-start leading-tight">
          <span className="block text-[10px] opacity-70">{badges.appStoreTop}</span>
          <span className="block font-display text-sm font-bold">{badges.appStoreBottom}</span>
        </span>
      </a>
    </div>
  )
}
