/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        navColor: "#080c17",
        primary: "#0f1624",
      },
      gridTemplateColumns: {
        'nav': '1fr 10fr 0.5fr',
      },
      animation: {
        'pulse-fast': 'pulseFast 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulseFast: {
          "50%": { opacity: 0.5 },
          "0%, 100%": { opacity: 1 },
        },
      }
    }
  },
  plugins: [],
}
