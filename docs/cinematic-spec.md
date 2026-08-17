# Technical Specification & Architecture — Cinematic Character Archive

## 1. Technical Stack
* **Framework:** React 18 + Vite 6
* **Styling:** Tailwind CSS 3.4 + Semantic CSS Variables
* **Animation:** Framer Motion 11 + GSAP 3 (ScrollTrigger)
* **Fonts:** Bebas Neue (EN Display), Cairo (AR Display), Inter (Body UI)
* **Deployment Platform:** Cloudflare Pages (`base: '/'`, build: `npm run build`, output: `dist`)

## 2. Character Data Architecture Schema
```typescript
export interface CharacterTheme {
  primaryColor: string;    // e.g. '#e10600'
  secondaryColor: string;  // e.g. '#facc15'
  surfaceColor: string;    // e.g. '#0d0d12'
  bgColor: string;         // e.g. '#050507'
  borderColor: string;     // e.g. 'rgba(225, 6, 0, 0.25)'
  accentGlow: string;      // e.g. 'rgba(225, 6, 0, 0.35)'
}

export interface CharacterStat {
  label: string;
  labelAr: string;
  value: string;
  valueAr: string;
  detail?: string;
  detailAr?: string;
  numericValue?: number; // For GSAP count-up
  suffix?: string;
}

export interface CharacterTimelineEvent {
  year: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export interface IconicMoment {
  id: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  quote: string;
  quoteAr: string;
  tag: string;
}

export interface CharacterData {
  id: string;
  nameEn: string;
  nameAr: string;
  taglineAr: string;
  taglineEn: string;
  racingNumber: string;
  identityEn: string;
  identityAr: string;
  coreThemes: string[];
  coreThemesAr: string[];
  image: string;
  bioEn: string;
  bioAr: string;
  theme: CharacterTheme;
  stats: CharacterStat[];
  timeline: CharacterTimelineEvent[];
  iconicMoments: IconicMoment[];
  sponsorsEn: string[];
  sponsorsAr: string[];
}
```

## 3. CSS Variable Mapping & Dynamic Theming
CSS variables are set on `:root` and updated dynamically when `activeCharacter` changes:
* `--character-primary`
* `--character-secondary`
* `--character-surface`
* `--character-bg`
* `--character-border`
* `--character-glow`

## 4. Accessibility & Performance Constraints
* **WCAG AA Compliance:** High contrast text (>4.5:1 ratio), visible focus outlines (`focus-visible:ring-2`).
* **Keyboard Navigation:** Full focus trap avoidance, interactive buttons with `aria-label`, `onKeyDown` handlers.
* **Prefers-Reduced-Motion:** Standard CSS `@media (prefers-reduced-motion: reduce)` disables GSAP scrub and Framer Motion layout animations.
* **Zero Console Errors / Zero Network Failures:** Rigorously verified via Playwright tests.
