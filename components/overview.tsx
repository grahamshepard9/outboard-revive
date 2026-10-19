import { SectionHeading } from '@/components/section-heading'

export function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-title" className="scroll-mt-14">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
        <SectionHeading
          id="overview-title"
          index="01"
          eyebrow="How it started"
          title={"It started with a motor a mechanic said wasn't worth fixing."}
        />
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Before my first semester at Georgia Tech, some friends and I bought a Jon boat that came
            with a 1964 Johnson in pieces. The marine mechanic at Lake Lanier said it was too old to
            bother with. I rebuilt it anyway, and it fired right up.
          </p>
          <p>
            That one motor turned into a habit. I wanted a bigger boat to pull friends on water
            skis, which meant combining two broken Johnsons into one working motor. Then I started
            buying parts motors on Marketplace, fixing them, and flipping them for a profit.
            Eventually, a buyer trusted me to work on his own motor.
          </p>
          <p className="text-foreground">
            Every motor showed up with a different problem, and each one taught me something I used
            on the next.
          </p>
        </div>
      </div>
    </section>
  )
}
