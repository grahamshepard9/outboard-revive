import { SectionHeading } from '@/components/section-heading'

type Motor = {
  year: string
  make: string
  hp: string
  tag?: string
  note?: string
}

const motors: Motor[] = [
  { year: '1964', make: 'Johnson', hp: '9.5 HP' },
  {
    year: '1990 + 1996',
    make: 'Johnson',
    hp: '48 HP + 40 HP',
    tag: 'My boat',
    note: 'Frankensteined the two motors together to put on my current boat.',
  },
  { year: '1991', make: 'Evinrude', hp: '40 HP', tag: 'Flip' },
  { year: '1974', make: 'Johnson', hp: '50 HP', tag: 'Customer' },
]

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
            Most sourced from Facebook Marketplace. This is a selection, not the full list.
          </p>
        </div>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {motors.map((motor) => (
            <li
              key={`${motor.year}-${motor.hp}`}
              className="grid gap-2 py-6 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-8"
            >
              <span className="font-mono text-sm font-medium text-[#857437]">{motor.year}</span>
              <div>
                <h3 className="text-xl font-semibold text-primary">
                  {motor.make} <span className="font-normal text-muted-foreground">{motor.hp}</span>
                </h3>
                {motor.note && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{motor.note}</p>
                )}
              </div>
              {motor.tag && (
                <span className="w-fit rounded-sm bg-primary px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                  {motor.tag}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
