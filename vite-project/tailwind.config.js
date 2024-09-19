/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coral-red": "#FF6452",
        "hero-green": "#9EEB47"
      }
    },
  },
  plugins: [],
}

