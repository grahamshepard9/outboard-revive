const pillars = ['Hands-on skill', 'Passion for engineering', 'Problem solving']

export function WhyItMatters() {
  return (
    <section
      id="why"
      aria-labelledby="why-title"
      className="scroll-mt-14 bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span>04</span>
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Why it matters
        </p>
        <h2
          id="why-title"
          className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
        >
          I&apos;m studying mechanical engineering at Georgia Tech, and this is where theory meets
          the workbench.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
          This project shows what I bring beyond the classroom:
        </p>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-md border border-white/15 bg-white/15 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <li key={pillar} className="bg-primary p-6">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <p className="mt-3 text-lg font-medium">{pillar}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
