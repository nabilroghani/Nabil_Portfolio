export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // <--- Confirm karein ye lazmi ho
  theme: {
    extend: {
      colors: {
        secondary: "#64ffda", // Sirf accent color rakhein
        // Baki static colors yahan se hata dein
      },
    },
  },
  plugins: [],
};