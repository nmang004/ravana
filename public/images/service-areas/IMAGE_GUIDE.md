# Service Areas Image Sourcing Guide

This guide helps you source and optimize images for all service area pages.

## Image Requirements

### City Hero Images (5 images)
**Location**: `public/images/service-areas/cities/`
**Required Files**:
- `norfolk-hero.jpg` - Norfolk skyline or waterfront
- `virginia-beach-hero.jpg` - Virginia Beach boardwalk or oceanfront
- `chesapeake-hero.jpg` - Greenbrier area or city landscape
- `hampton-hero.jpg` - Hampton waterfront or NASA area
- `portsmouth-hero.jpg` - Olde Towne or downtown Portsmouth

**Specifications**:
- Dimensions: 1920x1080px (16:9 ratio)
- Format: WebP (with JPG fallback)
- File size: < 300KB after optimization
- Style: Professional, high-quality, daytime shots
- Mood: Vibrant, modern, welcoming

**Sources**:
- Unsplash: Search for "{city name} virginia" or "hampton roads"
- Pexels: Similar search terms
- Google Images: Filter by "Labeled for reuse"

---

### Landmark Images (20 images - 4 per city)
**Location**: `public/images/service-areas/landmarks/`
**Required Files**:

**Norfolk**:
- `norfolk-nauticus.jpg` - Nauticus museum and USS Wisconsin
- `norfolk-chrysler.jpg` - Chrysler Museum of Art
- `norfolk-waterside.jpg` - Waterside District entertainment area
- `norfolk-townpoint.jpg` - Town Point Park waterfront

**Virginia Beach**:
- `vb-boardwalk.jpg` - Oceanfront boardwalk
- `vb-firstlanding.jpg` - First Landing State Park
- `vb-towncenter.jpg` - Town Center shopping district
- `vb-aquarium.jpg` - Virginia Aquarium & Marine Science Center

**Chesapeake**:
- `chesapeake-greenbrier.jpg` - Greenbrier Mall or commercial area
- `chesapeake-swamp.jpg` - Great Dismal Swamp
- `chesapeake-citypark.jpg` - Chesapeake City Park
- `chesapeake-battlefield.jpg` - Battlefield Boulevard corridor

**Hampton**:
- `hampton-nasa.jpg` - NASA Langley Research Center
- `hampton-coliseum.jpg` - Hampton Coliseum
- `hampton-airspace.jpg` - Virginia Air & Space Center
- `hampton-fortmonroe.jpg` - Fort Monroe historic site

**Portsmouth**:
- `portsmouth-oldetowne.jpg` - Olde Towne historic district
- `portsmouth-museum.jpg` - Portsmouth Naval Shipyard Museum
- `portsmouth-highstreet.jpg` - High Street shops and galleries
- `portsmouth-riverpark.jpg` - Elizabeth River Park

**Specifications**:
- Dimensions: 800x600px (4:3 ratio)
- Format: WebP (with JPG fallback)
- File size: < 150KB after optimization
- Style: Attractive, representative of the landmark
- Alt text: Descriptive (e.g., "Nauticus Maritime Museum with USS Wisconsin battleship in Norfolk, Virginia")

---

### Open Graph Images (6 images)
**Location**: `public/images/service-areas/og/`
**Required Files**:
- `service-areas-og.jpg` - Generic Hampton Roads or regional map
- `norfolk-og.jpg` - Norfolk-branded social sharing image
- `virginia-beach-og.jpg` - Virginia Beach-branded social sharing image
- `chesapeake-og.jpg` - Chesapeake-branded social sharing image
- `hampton-og.jpg` - Hampton-branded social sharing image
- `portsmouth-og.jpg` - Portsmouth-branded social sharing image

**Specifications**:
- Dimensions: 1200x630px (exact)
- Format: JPG
- File size: < 200KB
- Include: City name + "Ravana Solutions" text overlay
- Background: City image with dark overlay for text readability
- Colors: Use Ravana brand colors (gold #FFD700 on dark)

**Design Tool Recommendations**:
- Canva (free templates for OG images)
- Figma (if you have design skills)
- Photopea (free Photoshop alternative)

---

## Image Optimization Process

### 1. Download Original Images
- Source high-quality images (minimum 1920px wide for hero images)
- Prefer photos licensed for commercial use
- Download highest resolution available

### 2. Resize Images
Use ImageMagick, Photoshop, or online tools:

```bash
# Hero images
convert input.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 output.jpg

# Landmark images
convert input.jpg -resize 800x600^ -gravity center -extent 800x600 output.jpg

# OG images
convert input.jpg -resize 1200x630^ -gravity center -extent 1200x630 output.jpg
```

### 3. Convert to WebP
```bash
# Convert JPG to WebP with quality 85
cwebp -q 85 input.jpg -o output.webp

# Or use online tools:
# - Squoosh.app
# - CloudConvert
# - TinyPNG
```

### 4. Optimize File Size
- Target: Hero images < 300KB, Landmarks < 150KB, OG images < 200KB
- Tools:
  - **TinyPNG/TinyJPG**: https://tinypng.com
  - **Squoosh**: https://squoosh.app
  - **ImageOptim** (Mac): Drag and drop optimization

### 5. Verify Quality
- Check images look sharp on desktop and mobile
- Ensure no artifacts or pixelation
- Test load times

---

## Recommended Search Terms

### Unsplash/Pexels Searches:
- "Norfolk Virginia skyline"
- "Virginia Beach boardwalk"
- "Chesapeake Virginia"
- "Hampton Roads Virginia"
- "Portsmouth Virginia historic"
- "Hampton NASA"
- "Virginia waterfront"
- "Hampton Roads harbor"

### Google Images (with license filter):
1. Search for landmark name + "Virginia"
2. Tools → Usage Rights → "Creative Commons licenses"
3. Verify license allows commercial use

---

## Implementation Checklist

- [ ] Download all 5 city hero images
- [ ] Download all 20 landmark images (4 per city)
- [ ] Create 6 OG images with text overlays
- [ ] Resize all images to specifications
- [ ] Convert hero and landmark images to WebP
- [ ] Optimize all images for web
- [ ] Keep JPG fallbacks for compatibility
- [ ] Add descriptive alt text to images in code
- [ ] Test images load correctly on all pages
- [ ] Verify mobile rendering

---

## Notes

- **Copyright**: Always verify image licenses allow commercial use
- **Attribution**: If required by license, add credits to site footer
- **Accessibility**: All images need descriptive alt text
- **Performance**: Lazy load below-the-fold images
- **SEO**: Use descriptive filenames (good: `norfolk-waterfront.jpg`, bad: `img123.jpg`)

---

## Placeholder Strategy

If you can't source specific images immediately:

1. Use Unsplash's random city images as temporary placeholders
2. Generate simple colored gradient backgrounds with text
3. Use generic Hampton Roads imagery until city-specific images available
4. Prioritize hero images first (most visible)
5. Update landmarks and OG images in subsequent phases

---

**Last Updated**: $(date)
**Next Review**: When all images are sourced and optimized
