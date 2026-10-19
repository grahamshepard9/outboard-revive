const links = [
  { href: '#overview', label: 'Story' },
  { href: '#work', label: 'Work' },
  { href: '#motors', label: 'Motors' },
  { href: '#why', label: 'Why' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          Graham Shepard
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 text-sm text-primary-foreground/75">
            {links.map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a href="#motors" className="transition-colors hover:text-accent">
                Motors
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
