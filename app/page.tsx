import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Overview } from '@/components/overview'
import { WorkPerformed } from '@/components/work-performed'
import { MotorLog } from '@/components/motor-log'
import { WhyItMatters } from '@/components/why-it-matters'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <WorkPerformed />
        <MotorLog />
        <WhyItMatters />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
