import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const contactLinks = [
  {
    label: 'Email',
    value: 'gshepard7@gatech.edu',
    href: 'mailto:gshepard7@gatech.edu',
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/graham-shepard-608046390',
    href: 'https://www.linkedin.com/in/graham-shepard-608046390',
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-14 bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Get in touch"
          id="contact-title"
        />
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {"Have questions about one of these motors, or want to talk engineering? I'd be glad to hear from you."}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-accent">
                    {link.external ? (
                      <span className="text-sm font-bold" aria-hidden="true">in</span>
                    ) : (
                      <Mail className="size-5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-wider text-[#857437]">
                      {link.label}
                    </span>
                    <span className="block truncate font-medium text-primary">{link.value}</span>
                  </span>
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-foreground"
                  aria-hidden="true"
                />
                {link.external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
