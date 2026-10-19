import { SectionHeading } from '@/components/section-heading'
import { MotorEntry } from '@/components/motor-entry'
import { motors } from '@/lib/motors'

export function MotorLog() {
  return (
    <section id="motors" aria-labelledby="motors-title" className="scroll-mt-14">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="motors-title"
            index="03"
            eyebrow="Motor log"
            title={"A few of the outboards I've worked on."}
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Most sourced from Facebook Marketplace. Open any motor to read the full repair journal.
          </p>
        </div>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {motors.map((motor) => (
            <MotorEntry key={motor.id} motor={motor} />
          ))}
        </ol>
      </div>
    </section>
  )
}
