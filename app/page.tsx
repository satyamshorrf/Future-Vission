import AutoPlayVideo from "@/video-player"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-8">
      <h1 className="text-3xl font-bold tracking-tight">Welcome to Video Player</h1>
      <p className="text-muted-foreground max-w-2xl">
        This is a demo of an auto-playing video with a custom navigation bar.
      </p>
      <div className="mt-6 w-full max-w-3xl">
        <AutoPlayVideo />
      </div>
    </div>
  )
}
