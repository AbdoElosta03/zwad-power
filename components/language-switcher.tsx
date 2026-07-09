'use client'

import { useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  getAlternateLocale,
  LOCALE_COOKIE,
  type Locale,
} from '@/lib/i18n'

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale
  className?: string
}) {
  const router = useRouter()
  const next = getAlternateLocale(locale)
  const label = next.toUpperCase()

  const switchLocale = () => {
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-neon/30 bg-brand-deep/70 px-3 py-1.5 text-sm font-bold text-neon shadow-neon backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neon/60 hover:bg-neon/10 hover:text-white',
        className,
      )}
      aria-label={locale === 'ar' ? `Switch to English` : `التبديل إلى العربية`}
    >
      <Globe className="size-4 shrink-0" strokeWidth={2.25} />
      {label}
    </button>
  )
}
