const facts = [
  { label: 'Outboards repaired', value: '5 motors, 1964 – 1996' },
  { label: 'Sourced from', value: 'Facebook Marketplace' },
  { label: 'Repaired for', value: 'My boats, resale & a customer' },
]

export function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Vintage Outboard Motor Repair
        </p>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Bringing written-off outboards back to the water.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {
            "Since the summer of 2024, I've been buying broken 2-stroke outboards, figuring out what's wrong with them, and rebuilding them until they run, for my own boats, for resale, and for a customer."
          }
        </p>
        <p className="mt-8 text-sm text-primary-foreground/70">
          By <span className="font-semibold text-primary-foreground">Graham Shepard</span>
          <span className="mx-2 text-accent" aria-hidden="true">
            /
          </span>
          Mechanical Engineering, Georgia Tech
        </p>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-md border border-white/15 bg-white/15 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-primary p-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-accent">
                {fact.label}
              </dt>
              <dd className="mt-2 text-base font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
