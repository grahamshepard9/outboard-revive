export function SiteFooter() {
  return (
    <footer className="border-t-4 border-accent bg-[#00213c] text-primary-foreground/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-primary-foreground">Graham Shepard</span>
          {' · '}Mechanical Engineering, Georgia Tech
        </p>
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          Vintage Outboard Motor Repair
        </p>
      </div>
    </footer>
  )
}
