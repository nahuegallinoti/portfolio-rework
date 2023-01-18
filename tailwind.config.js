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
        projectTitle: "#9cc9e3",
        projectBackground: "#3c3a4433",
        hamburger: "#3C4048"
      },
      gridTemplateColumns: {
        'nav': '1fr 10fr 0.5fr',
      },
      gridTemplateRows: {
        'cardProject': '15% auto 30% 10% 1fr',
      },
      animation: {
        'pulse-fast': 'pulseFast 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',        
      },
      keyframes: {
        pulseFast: {
          "50%": { opacity: 0.5 },
          "0%, 100%": { opacity: 1 },
        },
        boxShadow: {
          'imageShadow': 'inset 2px 2px 17px 0px rgb(156 141 141 / 50%)',
        }
      }
    }
  },
  plugins: [],
}
