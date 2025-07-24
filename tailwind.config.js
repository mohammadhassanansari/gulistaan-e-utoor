/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "emerald-jewel": "#24B47E",
        "noble-crimson": "#D7263D",
        "imperial-gold": "#FFD700",
        "opulent-amethyst": "#8163A1",
        "silk-white": "#F4F6F8",
        "deep-sapphire": "#102542",
        "arctic-blue": "#6BCBEE",
        "peach-skin": "#FFD1BA",
        "graphite-black": "#22222B"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
