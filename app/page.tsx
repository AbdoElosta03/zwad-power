import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { BenefitsBar } from '@/components/benefits-bar'
import { HowItWorks } from '@/components/how-it-works'
import { PrimoPayment } from '@/components/primo-payment'
import { Stations } from '@/components/stations'
import { WhyZwad } from '@/components/why-zwad'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { getLocaleData } from '@/lib/i18n-server'

export default async function Page() {
  const { locale, messages } = await getLocaleData()

  return (
    <main className="overflow-x-hidden">
      <SiteHeader locale={locale} messages={messages} />
      <Hero locale={locale} messages={messages} />
      {/* <BenefitsBar messages={messages} /> */}
      <HowItWorks locale={locale} messages={messages} />
      <PrimoPayment messages={messages} />
      <Stations messages={messages} />
      <WhyZwad messages={messages} />
      <Faq messages={messages} />
      <FinalCta messages={messages} />
      <SiteFooter messages={messages} />
    </main>
  )
}
