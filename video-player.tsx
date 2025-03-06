"use client"

import { useEffect, useRef } from "react"

export default function AutoPlayVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current!.play()
        } catch (error) {
          console.error("Auto-play failed:", error)
        }
      }

      videoRef.current.addEventListener("canplaythrough", playVideo)
      return () => videoRef.current?.removeEventListener("canplaythrough", playVideo)
    }
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg aspect-video">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/aivid.mp4" type="video/mp4" />
        <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
