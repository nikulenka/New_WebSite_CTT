# Design System for CTT EDI (EPAM Style)

## 1. Core Visual Language
A premium, tech-forward, and high-impact design inspired by `epam.com`. Focus on dark themes, vibrant accents, and minimalist structural integrity.

## 2. Color Palette
- **Primary Background:** Deep Black `#000000` or Slate-950 `#020617`.
- **Secondary Background:** Dark Grey `#0c0c0c` for content blocks.
- **Accent 1 (Primary):** Electric Green `#0FA85F` (Brand color).
- **Accent 2 (Highlight):** Vibrant Gradient (Cyan to Lime or Magenta to Orange) for high-impact visual areas.
- **Text:** Crisp White `#FFFFFF` for headings, Slate-300 for body text.
- **Dividers:** 1px borders in Slate-800 or transparent overlays.

## 3. Typography
- **Headers:** DM Sans Bold (or modern equivalent like Inter). Large weights, tight tracking for headings.
- **Body:** Inter Regular. High legibility, generous line height (1.6).
- **UI Elements:** All-caps buttons with increased letter spacing for a sophisticated look.

## 4. Layout & Spacing
- **Grids:** Spacious 12-column grid. Generous "breathing room" (section padding 120px+).
- **Cards:** Glassmorphism or flat dark cards with thin 1px borders. No heavy shadows.
- **Visuals:** High-quality abstract tech imagery, blurred neon gradients, 3D elements representing connectivity.

## 5. Components
- **Header:** Transparent, becoming sticky with a backdrop blur.
- **Buttons:** 
  - Primary: Solid Accent 1 with hover glow.
  - Secondary: Ghost buttons (border only) with hover fill.
- **Navigation:** Underline micro-animations on hover.

## 6. Design System Notes for Stitch Generation
[STITCH_CONFIG]
{
  "theme": "dark",
  "style": "modern_tech",
  "primaryColor": "#0FA85F",
  "secondaryColor": "#0F172A",
  "typography": {
    "headings": "DM Sans",
    "body": "Inter"
  },
  "visuals": {
    "backgroundType": "gradient_mesh",
    "borderRadius": "none",
    "borders": "thin"
  }
}
[/STITCH_CONFIG]
