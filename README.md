# CINEMATIC CHARACTER ARCHIVE

An interactive, high-performance cinematic character portfolio showcasing **Lightning McQueen** (برق بنزين) and legendary racing figures. Built with React, Vite, Framer Motion, and Tailwind CSS, featuring a bilingual identity system (English & Arabic with RTL support).

---

## 🛠️ Technology Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages (Git Integration)

---

## 🏛️ Project Architecture

```
CINEMATIC-CHARACTER-ARCHIVE/
├── src/
│   ├── assets/          # Static artwork (e.g. mcqueen.jpg)
│   ├── components/      # React UI components (Hero, BilingualCharacterName, etc.)
│   ├── data/            # Character dataset and interfaces
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # React entrypoint
│   └── index.css        # Global Tailwind CSS styles
├── public/
│   ├── favicon.svg      # Favicon asset
│   └── .nojekyll        # Static file bypass marker
├── tests/               # Playwright test specs
├── scripts/             # Verification & QA runner scripts
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Local Development

### 1. Install Dependencies
```bash
npm ci
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
This compiles TypeScript and outputs the production bundle to `dist/`.

### 4. Local Production Preview
```bash
npm run preview
```
Serves the production build locally at `http://localhost:4173/`.

---

## ☁️ Cloudflare Pages Deployment Configuration

This project is deployed to **Cloudflare Pages** via native Cloudflare Git integration.

### Deployment Settings in Cloudflare Pages Console

- **Framework preset:** `Vite`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Production branch:** `main`
- **Node.js version:** Default (Node 18+)

> **Note:** GitHub Pages deployment has been decommissioned. The Vite base path is configured to `'/'` for domain-root serving.

---

## 🧪 Testing & QA Verification

To run end-to-end Playwright tests against the local production build:

```bash
npm run build
node scripts/verify-dist.cjs
```
