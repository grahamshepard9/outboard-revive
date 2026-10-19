'use client'

import { useState } from 'react'
import { Play, Video } from 'lucide-react'

function getYouTubeId(url: string): string | null {
  const trimmed = url.trim()
  if (!trimmed) return null
  try {
    const parsed = new URL(trimmed)
    const host = parsed.hostname.replace(/^www\.|^m\./, '')
    if (host === 'youtu.be') return parsed.pathname.slice(1).split('/')[0] || null
    if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      const v = parsed.searchParams.get('v')
      if (v) return v
      const match = parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)
      return match?.[1] ?? null
    }
  } catch {
    return null
  }
  return null
}

type YouTubeEmbedProps = {
  url: string
  title: string
}

export function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const videoId = getYouTubeId(url)

  if (!videoId) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-md border border-dashed border-primary/30 bg-primary/5 text-center">
        <Video className="size-6 text-[#857437]" aria-hidden="true" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Video coming soon
        </p>
        <p className="px-6 text-sm text-muted-foreground">{title}</p>
      </div>
    )
  }

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-md bg-primary">
        <iframe
          className="size-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-md bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="size-full object-cover transition-opacity group-hover:opacity-80"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent text-primary shadow-lg transition-transform group-hover:scale-110">
          <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent px-4 pb-3 pt-8 text-left text-sm font-medium text-primary-foreground">
        {title}
      </span>
    </button>
  )
}
