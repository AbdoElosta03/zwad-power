'use client'

import type { ReactNode } from 'react'
import { smoothScrollTo } from '@/lib/smooth-scroll'

export function HeroLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (href.startsWith('#')) {
          e.preventDefault()
          smoothScrollTo(href, 80)
          history.replaceState(null, '', href)
        }
      }}
    >
      {children}
    </a>
  )
}
