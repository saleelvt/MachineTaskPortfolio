/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode based on class
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files in src
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
