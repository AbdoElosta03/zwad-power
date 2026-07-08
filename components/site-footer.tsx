import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { HeroLink } from '@/components/hero-link'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H17V4.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.47-4.05 4.17v2.33H7.8V14h2.7v8h3z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'كيف تعمل', href: '#how' },
  { label: 'محطاتنا', href: '#stations' },
  { label: 'التطبيق والدفع', href: '#primo' },
]

const infoLinks = [
  { label: 'عن ZWAD', href: '#hero' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="relative block h-12 w-40 overflow-hidden rounded-lg">
            <Image
              src="/zwad.png"
              alt="ZWAD"
              fill
              className="scale-[1.3] object-cover object-center"
            />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            شبكة ذكية لاستئجار الباوربانك في ليبيا. طاقة تدوم، أينما كنت. زوّد
            وإنطلق.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: InstagramIcon, label: 'Instagram' },
              { icon: FacebookIcon, label: 'Facebook' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-xl bg-white/10 text-white/80 transition-colors hover:bg-emerald hover:text-white"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-white">روابط سريعة</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <HeroLink
                  href={l.href}
                  className="text-sm text-white/60 transition-colors hover:text-neon"
                >
                  {l.label}
                </HeroLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white">معلومات</h3>
          <ul className="mt-4 space-y-2.5">
            {infoLinks.map((l) => (
              <li key={l.label}>
                <HeroLink
                  href={l.href}
                  className="text-sm text-white/60 transition-colors hover:text-neon"
                >
                  {l.label}
                </HeroLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white">تواصل معنا</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-neon" />
              <span dir="ltr">support@zwad.ly</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-neon" />
              <span dir="ltr">+218-0931744110</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-neon" />
              <span>ليبيا طرابلس - طريق الشط </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/50 sm:px-6 lg:px-8">
          © 2024 ZWAD. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}
