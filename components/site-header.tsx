'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CloseIcon, DownloadIcon, MenuIcon } from '@/components/icons'
import { cn } from '@/lib/utils'
import { smoothScrollTo } from '@/lib/smooth-scroll'

const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'كيف تعمل', href: '#how' },
  { label: 'محطاتنا', href: '#stations' },
  { label: 'التطبيق والدفع', href: '#primo' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'تواصل معنا', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    smoothScrollTo(href, 80)
    history.replaceState(null, '', href)
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-deep/85 shadow-lg shadow-black/20 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="flex items-center"
          aria-label="ZWAD الصفحة الرئيسية"
        >
          <span className="relative block h-9 w-28 overflow-hidden rounded-lg sm:h-10 sm:w-32">
            <Image
              src="/zwad.png"
              alt="ZWAD"
              fill
              priority
              className="scale-[1.35] object-cover object-center"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:right-0 after:h-0.5 after:w-0 after:bg-neon after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <a
            href="#download"
            onClick={(e) => handleNav(e, '#download')}
            className="hidden items-center gap-2 rounded-xl bg-emerald px-5 py-2.5 text-sm font-bold text-white shadow-neon transition-transform duration-200 hover:-translate-y-0.5 sm:flex"
          >
            <DownloadIcon className="size-4" />
            حمّل التطبيق
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg text-white lg:hidden"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-brand-deep/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={(e) => handleNav(e, '#download')}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald px-5 py-3 text-sm font-bold text-white"
          >
            <DownloadIcon className="size-4" />
            حمّل التطبيق
          </a>
        </nav>
      </div>
    </header>
  )
}
