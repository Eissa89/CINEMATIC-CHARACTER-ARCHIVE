/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        character: {
          primary: 'var(--character-primary)',
          secondary: 'var(--character-secondary)',
          bg: 'var(--character-bg)',
          surface: 'var(--character-surface)',
          card: 'var(--character-card)',
          border: 'var(--character-border)',
          glow: 'var(--character-glow)',
          focus: 'var(--character-focus)',
        }
      }
    },
  },
  plugins: [],
}
