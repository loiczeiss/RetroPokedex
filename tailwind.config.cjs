/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
    '50%': '50%',
    '16': '4rem',
  },
    fontFamily: {
      PKMN: ["PKMN", "sans-serif"],
     
    },
    
    extend: {
      colors: {
        pokemonRed: '#FF0000',
      black: '#000000',
    white: '#ffff',
    pokeGreen: '#67ad74'   }
        ,
    },
  },
  plugins: [],
}