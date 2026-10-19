type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  id: string
}

export function SectionHeading({ index, eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
        <span className="text-[#857437]">{index}</span>
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl"
      >
        {title}
      </h2>
    </div>
  )
}
