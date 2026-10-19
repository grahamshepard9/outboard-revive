import { Gauge, Wrench, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const areas = [
  {
    icon: Gauge,
    title: 'Diagnose',
    summary: 'Find the real problem before spending money on parts.',
    items: [
      'Traced a dead cylinder to dirty ignition points and cleaned them back to strong spark',
      'Checked components against OEM resistance specs with a multimeter to find a failed trigger',
      'Ran compression tests to decide if a motor was worth saving: 120/120 PSI meant yes, an overheated powerhead meant no',
    ],
  },
  {
    icon: Wrench,
    title: 'Rebuild',
    summary: 'Restore the subsystems that keep a motor running.',
    items: [
      'Carburetors: rebuild kits, floats, gaskets, and air-fuel mixture tuning',
      'Lower units: reassembled from diagrams and swapped in a nearly obsolete driveshaft',
      'Power trim and tilt: replaced the seals and O-rings to fix hydraulic leak-down',
      'Water pumps, fuel pumps, filters, and fuel lines',
    ],
  },
  {
    icon: Zap,
    title: 'Retrofit',
    summary: 'Engineer around parts that are missing or faulty.',
    items: [
      'Rewired a rebuilt trim unit onto my boat using relays salvaged from a blown powerhead',
      'Designed a DPDT bypass switch for a faulty hydro-electric shifting interface',
    ],
  },
]

export function WorkPerformed() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="scroll-mt-14 border-y border-border bg-secondary"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          id="work-title"
          index="02"
          eyebrow="How I work"
          title="Diagnose first, then rebuild."
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area.title}
              className="flex flex-col rounded-md border border-border bg-card p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-md bg-primary text-accent">
                <area.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{area.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{area.summary}</p>
              <ul className="mt-5 space-y-3 border-t border-border pt-5">
                {area.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
