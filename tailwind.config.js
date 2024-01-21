/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueColor: "#175CD3",
        lightGrey: "#F2F4F7",
        darkGrey: "#D0D5DD",
      },
      fontFamily: {
        inter: ["Inter", "sans - serif"],
      },
      screens: {
        mw: "1728px",
      },
    },
  },
  plugins: [],
};
