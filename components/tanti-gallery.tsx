"use client"

import { useEffect, useState, useMemo, useRef } from "react"
import Image from "next/image"

type MediaItem = {
  path: string
  type: "image" | "video"
}

// Lazy video component with Intersection Observer
function LazyVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            setShouldLoad(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: "50px", // Start loading 50px before video enters viewport
        threshold: 0.1,
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load()
    }
  }, [shouldLoad])

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      className="w-full h-full object-cover"
      controls
      preload={isInView ? "metadata" : "none"}
      playsInline
    />
  )
}

export default function TantiGallery() {
  const [items, setItems] = useState<MediaItem[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    // Use AbortController for better cancellation
    const controller = new AbortController()
    
    // Start fetching immediately with prefetch hint
    fetch("/api/tanti-media", {
      signal: controller.signal,
      cache: 'force-cache', // Use cached data when available
      headers: {
        'Accept': 'application/json',
      }
    })
      .then(async (r) => {
        // Safely read body to avoid JSON parse errors on empty/invalid payloads
        const text = await r.text().catch(() => "")
        let data: unknown = {}
        try {
          data = text ? JSON.parse(text) : {}
        } catch {
          data = {}
        }
        return data as any
      })
      .then((data) => {
        if (cancelled) return
        const list = Array.isArray(data?.items) ? (data.items as MediaItem[]) : []
        console.log("Tanti Gallery: Loaded", list.length, "items")
        setItems(list)
        setLoading(false)
      })
      .catch((err) => {
        if (cancelled) return
        console.error("Tanti Gallery: Error loading media", err)
        setError("Failed to load media")
        setLoading(false)
      })
    return () => {
      cancelled = true
      controller.abort() // Cancel fetch on unmount
    }
  }, [])

  const grouped = useMemo(() => {
    const images = items.filter((i) => i.type === "image")
    const videos = items.filter((i) => i.type === "video")
    return { images, videos }
  }, [items])

  return (
    <section className="relative py-12 sm:py-16" style={{ backgroundColor: '#F5F5F0' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-white">
          Tanti Portfolio
        </h2>

        {loading ? (
          <div className="text-white/70 text-center py-8">Loading portfolio...</div>
        ) : error ? (
          <div className="text-red-400 text-sm">{error}</div>
        ) : (
          <div className="space-y-10">
            {grouped.images.length > 0 && (
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white/90 mb-4">Images</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {grouped.images.map((item, index) => (
                    <figure key={item.path} className="relative bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <Image
                        src={item.path}
                        alt="Tanti image"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        priority={index < 5}
                        loading={index < 5 ? undefined : index < 10 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        quality={85}
                      />
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {grouped.videos.length > 0 && (
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white/90 mb-4">Videos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {grouped.videos.map((item) => (
                    <div key={item.path} className="relative aspect-video bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                      <LazyVideo src={item.path} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}


