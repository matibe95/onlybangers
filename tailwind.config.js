/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-primary': 'var(--color-primary)',
        'c-accent': 'var(--color-accent)',
        'c-dark': 'var(--color-dark)',
        'c-light': 'var(--color-light)',
        'c-lightgreen': 'var(--color-lightgreen)',
        'c-lime': 'var(--color-lime)',
        'c-orange': 'var(--color-orange)',
        'c-fuccia': 'var(--color-fuccia)',
        'c-pink': 'var(--color-pink)',
        'c-skyblue': 'var(--color-skyblue)',
        'c-green': 'var(--color-green)',
        'c-yellow': 'var(--color-yellow)',
        'c-red': 'var(--color-red)',
        'c-purple': 'var(--color-purple)',
        'c-blue': 'var(--color-blue)',
      }
    },
  },
  plugins: [],
}