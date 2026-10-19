const facts = [
  { label: 'Engine type', value: '2-stroke outboards' },
  { label: 'Motors worked on', value: '1964 – 1996' },
  { label: 'Work for', value: 'Private clients & resale' },
]

export function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Hands-on engineering project
        </p>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
          Vintage Outboard Motor Repair
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Diagnosing and fully repairing 2-stroke outboard motors for private clients and market
          resale, from troubleshooting to complete rebuilds and custom electrical retrofits.
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
