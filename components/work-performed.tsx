import { Gauge, Wrench, Zap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const areas = [
  {
    icon: Gauge,
    title: 'Troubleshooting',
    summary: 'Diagnosing why a motor won’t run right.',
    items: ['Electrical faults', 'Cylinder compression loss', 'Air-fuel mixture imbalance'],
  },
  {
    icon: Wrench,
    title: 'Rebuilds',
    summary: 'Restoring major subsystems to working order.',
    items: ['Lower units', 'Power trim systems', 'Water pumps', 'Carburetors'],
  },
  {
    icon: Zap,
    title: 'Custom electrical retrofits',
    summary: 'Engineering around failed or faulty systems.',
    items: [
      'Rewired a power trim unit via relays',
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
          eyebrow="Work performed"
          title="Diagnose, rebuild, retrofit."
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
