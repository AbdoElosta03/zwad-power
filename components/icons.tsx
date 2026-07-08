import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function base(props: IconProps) {
  const { className, ...rest } = props
  return {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    ...rest,
  }
}

/** وصول / طاقة سريعة */
export function BoltIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 6.5 13.2h4.8L11 22l6.5-11.2h-4.8L13 2Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** محطة / موقع */
export function StationPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-6.5-5.2-6.5-10a6.5 6.5 0 1 1 13 0c0 4.8-6.5 10-6.5 10Z" />
      <circle cx="12" cy="11" r="2.2" />
      <path d="M12 9.2v1.8M10.8 11h2.4" strokeWidth="1.3" />
    </svg>
  )
}

/** دفع آمن */
export function SecurePayIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6.2v5.1c0 4.3 2.9 7.2 7 8.7 4.1-1.5 7-4.4 7-8.7V6.2L12 3Z" />
      <path d="M9.2 11.6 11.1 13.5l3.7-3.9" />
    </svg>
  )
}

/** منافذ شحن */
export function PortsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="14" rx="2.5" />
      <path d="M8 5v-1.5M16 5v-1.5" />
      <path d="M8.5 10.5h2M13.5 10.5h2M8.5 14h2M13.5 14h2" strokeWidth="2" />
    </svg>
  )
}

/** QR */
export function ScanQrIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8" />
      <path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8" />
      <path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16" />
      <path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <rect x="7" y="7" width="4.5" height="4.5" rx="0.8" />
      <rect x="12.5" y="7" width="4.5" height="4.5" rx="0.8" />
      <rect x="7" y="12.5" width="4.5" height="4.5" rx="0.8" />
      <path d="M13 13h2v2h-2zM16 13h1.5M13 16.5h1.5M16 15.5h1.5v2.5H15" />
    </svg>
  )
}

/** هاتف / تطبيق */
export function PhoneAppIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M10 5h4M11 18.5h2" />
    </svg>
  )
}

/** باوربانك */
export function PowerBankIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="3" width="12" height="18" rx="2.2" />
      <path d="M9.5 6.5h5" />
      <path d="M10 11.5h4v5h-4z" fill="currentColor" stroke="none" opacity="0.85" />
      <path d="M11.2 10.2 12 8.8l.8 1.4" />
    </svg>
  )
}

/** إرجاع */
export function ReturnStationIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 7H5.5A1.5 1.5 0 0 0 4 8.5v9A1.5 1.5 0 0 0 5.5 19h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 18.5 7H16" />
      <path d="M15 4.5 12 7.5 9 4.5" />
      <path d="M12 7.5V14" />
    </svg>
  )
}

/** حقيبة / بدون حمل */
export function HandsFreeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 9V7.2A4 4 0 0 1 12 3.2 4 4 0 0 1 16 7.2V9" />
      <rect x="4.5" y="9" width="15" height="11.5" rx="2.2" />
      <path d="M4.5 13.5h15" />
      <circle cx="12" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** للجميع */
export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="16" cy="9" r="2" />
      <path d="M3.8 18.5c.4-3 2.5-4.7 5.2-4.7s4.8 1.7 5.2 4.7" />
      <path d="M13.5 18.2c.25-1.9 1.5-3.2 3.5-3.2 1.7 0 3 1 3.4 2.8" />
    </svg>
  )
}

/** وقت سريع */
export function QuickTimeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.2 2" />
      <path d="M16.8 4.2 19 2.5M7.2 4.2 5 2.5" />
    </svg>
  )
}

/** تجربة ذكية */
export function SmartChargeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="8" width="17" height="10" rx="2" />
      <path d="M7 8V6.5A2 2 0 0 1 9 4.5h6A2 2 0 0 1 17 6.5V8" />
      <path d="M10.2 13.8 12 10.5l1.8 3.3h-1.1L12 15.5l-.7-1.7z" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** سعر / تسعير */
export function PriceTagIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3.5 12.2 11.8 3.9a1.5 1.5 0 0 1 1.1-.4h5.6A1.5 1.5 0 0 1 20 5v5.6a1.5 1.5 0 0 1-.4 1.1L11.2 20a1.5 1.5 0 0 1-2.1 0L3.5 14.4a1.5 1.5 0 0 1 0-2.2Z" />
      <circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** محفظة */
export function WalletIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h13v12.5a2 2 0 0 1-2 2h-11A2.5 2.5 0 0 1 4 18V8.5Z" />
      <path d="M19.5 11.5H15a1.5 1.5 0 0 0 0 3h4.5" />
      <circle cx="15.8" cy="13" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** سهم / تنقل */
export function NavigateIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3.5 19.5 19l-7.5-3.2L4.5 19 12 3.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** تحميل */
export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v10.5" />
      <path d="m8 11.5 4 4 4-4" />
      <path d="M5 19.5h14" />
    </svg>
  )
}

/** سهم خلفي (RTL معرفة المزيد) */
export function ArrowBackIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M19 12H5" />
      <path d="m10 7-5 5 5 5" />
    </svg>
  )
}

/** قائمة FAQ */
export function ChevronIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/** بريد */
export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 6 7.5-6" />
    </svg>
  )
}

/** هاتف اتصال */
export function PhoneCallIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8.2 3.8c.4-.4 1-.5 1.5-.3l2.1.8c.6.2 1 .8.9 1.4l-.3 2a1.2 1.2 0 0 1-.7 1l-1.3.5a9.5 9.5 0 0 0 4.2 4.2l.5-1.3c.2-.4.6-.6 1-.7l2-.3c.6-.1 1.2.3 1.4.9l.8 2.1c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.5.5-1.2.7-1.9.5A15 15 0 0 1 5.5 6.9c-.2-.7 0-1.4.5-1.9l1.2-1.2Z" />
    </svg>
  )
}

/** قائمة موبايل */
export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

/** إغلاق */
export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
