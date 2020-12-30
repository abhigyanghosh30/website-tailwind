const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      silver: {
        100: '#fafafa',
        300: '#d4d4d4',
        500: '#abacae',
        700: '#7e8087',
        900: '#555761',
      },
      'regal-blue': {
        100: '#c9d0e8',
        300: '#8291ca',
        500: '#4459a1',
        700: '#263159',
        900: '#111628',
      },
      'regal-gold': '#bba559',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
