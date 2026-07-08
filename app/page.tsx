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

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <SiteHeader />
      <Hero />
      {/* <BenefitsBar /> */}
      <HowItWorks />
      <PrimoPayment />
      <Stations />
      <WhyZwad />
      <Faq />
      <FinalCta />
      <SiteFooter />
    </main>
  )
}
