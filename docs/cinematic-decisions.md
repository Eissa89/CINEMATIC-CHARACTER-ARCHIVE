# Cinematic Decisions — Character Archive Quality Blueprint

## 1. Core Thesis
> "Every character is not a profile. Every character is a visual world."

The Cinematic Character Archive moves away from generic portfolio grids, card-heavy SaaS dashboards, and repetitive AI template patterns. It treats every character as an immersive visual exhibition, where art direction, composition, motion, and color adapt dynamically to express the character's core identity.

## 2. Character Thesis — Lightning McQueen
* **Identity:** 7-Time Piston Cup Champion // `#95` // `برق بنزين`
* **Core Qualities:** SPEED, FOCUS, COMPETITION, LEGACY, MOTION
* **Tagline:** «تركيز. سرعة. أنا صاروخ.» / «Focus. Speed. I'm a rocket.»
* **Emotional Direction:** High velocity, mechanical precision, raw adrenaline, racing heat, legendary craftsmanship.
* **Visual Metaphor:** The racing circuit — asymmetric speed lines, diagonal telemetry geometry, dark obsidian asphalt with fiery crimson & amber telemetry accents.

## 3. Composition Strategy
* **Anti-SaaS Layout:** Abandon traditional centered "text-left / image-right" card grids.
* **Editorial Asymmetry:** Heavy typography scale, overlapping image-led canvases, diagonal framing, and generous negative space.
* **Signature Hero:** A cinematic hero composition where the character artwork interacts with off-grid background numbers (`95`) and asymmetric speed lines.
* **Sectional Variance:** Every scene has a distinct layout structure to create visual rhythm across vertical scroll.

## 4. Typography Hierarchy
* **English Display:** `Bebas Neue` — Bold, condensed, racing-style display typography for primary numbers, headers, and telemetry labels.
* **Arabic Display:** `Cairo` (Weights 700/800/900) — Sculpted, native Arabic display typography matching the weight and impact of the English headers.
* **Body & Supporting UI:** `Inter` (Weights 300/400/500/600) — Neutral, highly legible sans-serif for narratives, specifications, and metadata.

## 5. Semantic Color System
Semantic CSS variables map to active character themes:
* `--character-primary`: Core racing tone (e.g. Crimson `#e10600` for McQueen)
* `--character-secondary`: Accent telemetry tone (e.g. Amber `#facc15` for McQueen)
* `--character-bg`: Deep obsidian dark room (`#050507`)
* `--character-surface`: High-contrast dark asphalt surface (`#0d0d12`)
* `--character-border`: Subtle structural boundary (`rgba(255, 255, 255, 0.1)`)
* `--character-glow`: Ambient heat emission (`rgba(225, 6, 0, 0.25)`)
* `--character-focus`: High visibility accessibility focus outline (`#facc15`)

## 6. Motion & Interaction System
* **Framer Motion:** Handles interactive state switches (bilingual name toggle), component transitions, micro-interactions, and viewport reveals.
* **GSAP + ScrollTrigger:** Powers scroll-linked cinematic sequences (telemetry counter acceleration, diagonal velocity wipes, career timeline scrubbing).
* **Interactive Bilingual Toggle:** The title switch (`LIGHTNING McQUEEN` ↕ `برق بنزين`) is integrated directly into the hero typography as an interactive brand experience.
* **Prefers-Reduced-Motion:** Full compliance where motion is replaced with clean, instant opacity reveals and static visual layouts.

## 7. Anti-AI-Slop & Quality Directives
* NO generic purple/blue gradients or random floating blobs.
* NO over-glassmorphism or excessive rounded borders.
* NO endless looping decorative animations or scroll hijacking.
* Every visual line, badge, and metric must serve a narrative purpose.
