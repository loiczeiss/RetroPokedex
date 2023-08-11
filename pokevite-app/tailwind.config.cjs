/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      PKMN: ["PKMN", "sans-serif"],
     
    },
    colors: {
    pokemonRed: '#FF0000',
  black: '#000000',
white: '#ffff',
pokeGreen: '#67ad74'   }
    ,
    extend: {},
  },
  plugins: [],
}