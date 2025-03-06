"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Home, Clock, Dice5 } from "lucide-react"

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
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/aivid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Future-Vission</h1>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="flex items-center text-lg hover:underline">
              <Home className="mr-2 h-5 w-5" /> Home
            </Link>
            <Link href="/future" className="flex items-center text-lg hover:underline">
              <Clock className="mr-2 h-5 w-5" /> Future
            </Link>
            <Link href="/dicemilar" className="flex items-center text-lg hover:underline">
              <Dice5 className="mr-2 h-5 w-5" /> Dicemilar
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white focus:outline-none"
              onClick={() => {
                document.getElementById("mobile-menu")?.classList.toggle("hidden")
              }}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden flex flex-col mt-4 space-y-4 text-center">
          <Link href="/" className="block text-lg">Home</Link>
          <Link href="/future" className="block text-lg">Future</Link>
          <Link href="/dicemilar" className="block text-lg">Dicemilar</Link>
        </div>
      </nav>
    </div>
  )
}
