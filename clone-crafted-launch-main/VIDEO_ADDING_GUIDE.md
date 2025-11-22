# How to Add Videos to Your Website

You can add videos anywhere on your website! Here's how:

## Quick Video Embed Code

Use this code template to add a video anywhere:

```tsx
<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
  <video 
    controls 
    className="w-full h-auto"
    poster="/hero-video-poster.jpg"  // Optional: thumbnail image
  >
    <source src="/your-video-file.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

## Where Videos Are Currently Used

1. **Home Page Hero Section** - Demo video in a modal (click "See Demo" button)
2. **About Page** - Video section added after the hero

## How to Add Videos to Other Pages

### Option 1: Direct Video Embed
Place your video file in the `public/` folder, then reference it:

```tsx
<video controls src="/your-video.mp4" className="w-full rounded-lg" />
```

### Option 2: Video with Modal/Dialog
For a popup video (like the home page demo):

```tsx
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const [isVideoOpen, setIsVideoOpen] = useState(false);

<Button onClick={() => setIsVideoOpen(true)}>
  <Play className="mr-2" />
  Watch Video
</Button>

<Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
  <DialogContent className="max-w-4xl w-full p-0">
    <div className="p-6">
      <video controls className="w-full rounded-lg" src="/your-video.mp4" />
    </div>
  </DialogContent>
</Dialog>
```

### Option 3: YouTube/Vimeo Embed
For external videos:

```tsx
<iframe
  className="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

## Video File Requirements

- **Format**: MP4 (recommended), WebM, or OGG
- **Location**: Place files in the `public/` folder
- **Naming**: Use lowercase with hyphens (e.g., `demo-video.mp4`)
- **Size**: Optimize videos for web (compress if needed)

## Video Attributes

- `controls` - Shows play/pause controls
- `autoplay` - Auto-plays (usually muted)
- `muted` - Mutes audio (required for autoplay)
- `loop` - Loops the video
- `poster="image.jpg"` - Shows thumbnail before play
- `className="w-full"` - Makes video responsive

## Examples by Page

### Pricing Page
Add a video showing pricing features or testimonials

### Contact Page
Add a video explaining the contact process

### Checkout Page
Add a video about security or payment process

### Any Section
Videos can be added to any component or page!

## Need Help?

Just tell me:
1. Which page you want the video on
2. Where on that page (top, middle, bottom, specific section)
3. The video file name or if you want to use the existing demo video

I'll add it for you!


