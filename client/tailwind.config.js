/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Navy blue
          dark: '#1e293b',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#dc2626', // Red
          dark: '#991b1b',
          light: '#ef4444',
        },
      },
    },
  },
  plugins: [],
}
