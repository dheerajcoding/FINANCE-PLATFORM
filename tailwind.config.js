/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './client/index.html',
    './client/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a',
          dark: '#1e293b',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#dc2626',
          dark: '#991b1b',
          light: '#ef4444',
        },
      },
    },
  },
  plugins: [],
}
