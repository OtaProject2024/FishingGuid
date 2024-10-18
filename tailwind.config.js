/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both",
        "fade-in": "fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
      },
      keyframes: {
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: "0"
          },
          to: {
            filter: "blur(0)",
            opacity: "1"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          to: {
            opacity: "1"
          }
        }
      }
    },
    plugins: []
  }
}

