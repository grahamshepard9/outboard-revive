'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { YouTubeEmbed } from '@/components/youtube-embed'
import type { Motor } from '@/lib/motors'
const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ')

export function MotorEntry({ motor }: { motor: Motor }) {
  const [open, setOpen] = useState(false)
  const panelId = `${motor.id}-panel`
  const buttonId = `${motor.id}-button`

  return (
    <li>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className="group grid w-full gap-2 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:grid-cols-[10rem_1fr_auto_auto] md:items-baseline md:gap-8"
        >
          <span className="font-mono text-sm font-medium text-[#857437]">{motor.year}</span>
          <span>
            <span className="block text-xl font-semibold text-primary group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
              {motor.make} <span className="font-normal text-muted-foreground">{motor.hp}</span>
            </span>
            {motor.note && (
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                {motor.note}
              </span>
            )}
          </span>
          {motor.tag ? (
            <span className="w-fit rounded-sm bg-primary px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent">
              {motor.tag}
            </span>
          ) : (
            <span className="hidden md:block" aria-hidden="true" />
          )}
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground md:self-center">
            {open ? 'Close' : 'Read journal'}
            <ChevronDown
              className={cn('size-4 transition-transform duration-300', open && 'rotate-180')}
              aria-hidden="true"
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden" inert={!open}>
          <div className="grid gap-8 pb-10 md:grid-cols-[10rem_1fr] md:gap-8">
            <span className="hidden md:block" aria-hidden="true" />
            <div className="flex flex-col gap-8">
              <div className="flex max-w-prose flex-col gap-4 border-l-2 border-accent pl-5 text-pretty leading-relaxed text-foreground/85">
                {motor.journal.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {motor.videos.length > 0 && (
                <div className="flex flex-col gap-6">
                  {motor.videos.map((video, i) => (
                    <YouTubeEmbed key={i} url={video.url} title={video.title} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
