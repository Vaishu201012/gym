/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beastred: "#E22125",
        beastdark: "#161616",
        beastgray: "#6B6B6B",
      },
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}

