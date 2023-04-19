/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "logo": ["var(--logo), sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark":  "var(--primary-dark)",
        "primary-light":  "var(--primary-light)",
        "secondary-dark":  "var(--secondary-dark)",
        "secondary-light":  "var(--secondary-light)",
        "accent-color":  "var(--accent-color)",
        "dark-shade":  "var(--dark-shade)",
        "light-shade":  "var(--light-shade)",
        "white-shade": "var(--white-shade)",
        "button-color": "var(--button-color)",
      }
    },
  },
  plugins: [],
}

