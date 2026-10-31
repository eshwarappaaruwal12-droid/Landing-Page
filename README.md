# Drift — Calm, ADHD-Friendly Planner

> **"Own your time without the stress"**  
> A calm, low-friction planner app designed for ADHD minds that turns scattered ideas into a clear path.

![Drift Banner](https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85)

---

## ✨ Features

- **Full-Screen Video Hero**: Immersive video backdrop with floating pill navbar, animated morphing hamburger menu, and bottom-aligned headline with *Instrument Serif* italic accents.
- **Calm Manifesto (About Section)**: Warm cream aesthetic (`#F6E4CF`) with custom pill action buttons, geometric dividers, and custom vector emblem.
- **Scroll-Driven Interactive Features**: Sticky left guide with live active-state highlighting (`IntersectionObserver`) paired with smooth sliding video preview cards.
- **Interactive Trial & FAQ**: Instant, noise-free task un-scrambler modal and FAQ accordion answering executive-function planner questions.
- **ADHD-Centric Design Principles**: Zero red badges, no urgency sirens, gentle pacing, and cognitive offloading.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts) & Instrument Serif

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/<your-username>/drift-planner.git
cd drift-planner
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` (or `http://localhost:5173`) in your browser.

### 3. Build for Production

```bash
npm run build
```

The production output will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
├── index.html               # Main HTML entry with SEO & OpenGraph tags
├── package.json             # Project dependencies and scripts
├── src/
│   ├── App.tsx              # Main page assembly (Hero, Modals, Footer)
│   ├── main.tsx             # React entry point
│   ├── index.css            # Font imports, Tailwind, and custom keyframes
│   └── components/
│       ├── AboutSection.tsx # Cream manifesto section with action pills
│       ├── FaqModal.tsx     # Calming FAQ dialog accordion
│       ├── FeaturesSection.tsx # Sticky scroll cards with video demonstrations
│       ├── Logo.tsx         # Custom geometric Drift SVG emblem
│       ├── Navbar.tsx       # Floating pill navbar with animated hamburger
│       └── StartFreeModal.tsx # Interactive task-clarity experience modal
└── tsconfig.json
```

---

## 📄 License

Apache-2.0
