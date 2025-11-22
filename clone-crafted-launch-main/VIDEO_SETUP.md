# Video Setup Instructions

## Demo Video Integration

The hero section and demo modal are configured to use the following video file:

**Video File:** `/mnt/data/lv_0_20251122115057.mp4`

### Steps to Complete:

1. **Copy the video file to the public folder:**
   - Copy `lv_0_20251122115057.mp4` from `/mnt/data/` to `clone-crafted-launch-main/public/`
   - The file should be accessible at `/lv_0_20251122115057.mp4` when the app is running

2. **Create a poster image (optional but recommended):**
   - Create a poster image for mobile fallback
   - Save it as `hero-video-poster.jpg` in the `public/` folder
   - This image will be shown on mobile devices instead of autoplaying video

3. **Video Features:**
   - Desktop: Autoplays muted in the hero section
   - Mobile: Shows poster image (fallback)
   - "Watch 30s Demo" button opens the video in a modal/lightbox

### File Locations:
- Video: `public/lv_0_20251122115057.mp4`
- Poster: `public/hero-video-poster.jpg` (create this)

### Calendly Integration:
- Update the Calendly URL in `src/pages/Contact.tsx`
- Replace `YOUR_CALENDLY_URL` with your actual Calendly username/event URL












