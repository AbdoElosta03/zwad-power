import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo, Tajawal } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { getLocaleData } from '@/lib/i18n-server'
import './globals.css'

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['400', '600', '700', '800', '900'],
})

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  variable: '--font-tajawal',
  weight: ['400', '500', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const { messages } = await getLocaleData()
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    generator: 'v0.app',
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#04352a' },
  ],
  colorScheme: 'light dark',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { config } = await getLocaleData()

  return (
    <html
      lang={config.lang}
      dir={config.dir}
      className={`${cairo.variable} ${tajawal.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
