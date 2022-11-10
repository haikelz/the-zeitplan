/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
        sanspro: "Source Sans Pro",
        patua: "Patua One",
        ibm: "IBM Plex Mono",
        poppins: "Poppins",
        inter: "Inter",
      },
      colors: {
        primary: "#FE5E44",
        spacing: "#FFE600",
        dark: "#0E144A",
      },
      width: {
        xl: "72rem",
      },
    },
  },
  plugins: [],
};
