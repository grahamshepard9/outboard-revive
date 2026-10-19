import { SectionHeading } from '@/components/section-heading'

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="scroll-mt-14">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
        <SectionHeading
          id="overview-title"
          index="01"
          eyebrow="What it is"
          title="Old motors, brought back to running condition."
        />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I buy old outboard motors from Facebook Marketplace, diagnose what&apos;s wrong, and
            fully repair them, either for private clients or for resale on the market.
          </p>
          <p>
            The work covers the full system: tracking down electrical faults, cylinder compression
            loss, and air-fuel mixture imbalance, then rebuilding lower units, power trim systems, water
            pumps, and carburetors. Along the way I engineered custom electrical retrofits for
            faulty systems.
          </p>
        </div>
      </div>
    </section>
  )
}
