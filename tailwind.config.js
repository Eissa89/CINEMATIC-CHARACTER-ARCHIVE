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
        racing: {
          red: 'var(--color-primary)',
          yellow: 'var(--color-secondary)',
          dark: 'var(--color-bg)',
          card: 'var(--color-card)',
          border: 'var(--color-border)',
        }
      }
    },
  },
  plugins: [],
}
