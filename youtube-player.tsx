import { YouTubeEmbed } from "@next/third-parties/google"

export default function AutoPlayYouTube() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <YouTubeEmbed videoid="dQw4w9WgXcQ" height={400} params="autoplay=1&mute=1" />
    </div>
  )
}

