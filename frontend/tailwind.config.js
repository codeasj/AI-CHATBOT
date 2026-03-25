/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        mist: "#f6f3ee",
        sand: "#e8dccd",
        ember: "#bf5a36",
        pine: "#254336",
      },
      boxShadow: {
        panel: "0 20px 45px rgba(17, 24, 39, 0.12)",
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [],
};
