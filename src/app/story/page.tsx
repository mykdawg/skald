import { StoryComposePanel } from "@/components/StoryComposePanel";
import { StoryReadPanel } from "@/components/StoryReadPanel";

export default function StoryPage() {
  return (
    <main>
      <h1>Story</h1>
      <StoryReadPanel subject="story" />
      <StoryComposePanel url={process.env.SKALD_API_URL ?? ''} />
    </main>
    
  )
}