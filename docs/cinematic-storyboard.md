# Cinematic Storyboard — Narrative Sequence

The experience unfolds as a 7-scene cinematic exhibition. Each scene features distinct editorial layout structures and motion triggers.

---

### SCENE 01 — HERO / CHARACTER WORLD
* **Composition:** Editorial asymmetric canvas. Massive off-grid racing number `#95` in background, flanked by diagonal telemetry speed lines.
* **Focus:** High-impact bilingual character title (`LIGHTNING McQUEEN` ↕ `برق بنزين`) with interactive language swap trigger (`EN ⇄ ع`).
* **Visuals:** Signature hero artwork framed with subtle red/amber glow effects and telemetry badges (`#95 // RACING LEGEND`).
* **Motion:** Entry stagger reveal via Framer Motion; background number parallax on scroll via GSAP ScrollTrigger.

---

### SCENE 02 — THE LEGEND NARRATIVE
* **Composition:** Full-width dark asphalt surface with asymmetric quote geometry and official partner badges.
* **Focus:** Highlighting the character's legacy, 7 Piston Cup victories, and Route 66 transformation.
* **Motion:** Text blur reveal with border expansion on scroll.

---

### SCENE 03 — TELEMETRY & NUMBERS
* **Composition:** Asymmetric 4-column telemetry grid displaying key racing stats (Top Speed, Piston Cups, Acceleration, Team).
* **Focus:** Technical specs formatted like telemetry data monitors.
* **Motion:** GSAP ScrollTrigger number counter acceleration animation on scroll enter.

---

### SCENE 04 — CAREER MILESTONES (TIMELINE)
* **Composition:** Vertical progression timeline with alternating year badges (2006 Rookie, 2011 World Grand Prix, 2017 Mentor Legacy).
* **Focus:** Key evolution points of Lightning McQueen's racing career.
* **Motion:** ScrollTrigger linked vertical telemetry line growth and milestone reveal.

---

### SCENE 05 — SIGNATURE MOMENTS
* **Composition:** Editorial quote cards featuring iconic quotes ("Turn Left to Go Right", "Piston Cup Sacrifice") with location markers and tags.
* **Focus:** Moral and tactical defining moments.
* **Motion:** Micro hover scale with ambient glow accent expansion.

---

### SCENE 06 — OFFICIAL PARTNERS & SPONSORS
* **Composition:** Clean telemetry badge row displaying official sponsors (Rust-Eze, Dinoco, Hudson Hornet Motors, Lightyear).
* **Focus:** Authentic racing ecosystem partners.
* **Motion:** Subtle staggered hover illumination.

---

### SCENE 07 — CHARACTER ARCHIVE NAVIGATOR
* **Composition:** Reusable interactive character collection displaying all characters in the archive (Lightning McQueen, Doc Hudson, Cruz Ramirez).
* **Focus:** Selecting a character dynamically updates the entire site's theme variables (`--character-primary`, `--character-secondary`, `--character-bg`, etc.).
* **Motion:** Theme color smooth transition across root container.
