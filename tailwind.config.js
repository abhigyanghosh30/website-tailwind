const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      full: '100%',
      screen: '100vh',
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      transparent: 'transparent',
      current: 'currentColor',
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
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
      glass: {
        100: '#65dfc9',
        300: '#6cdbeb',
      },
      'glass-white': {
        100: 'rgba(255,255,255,0.1)',
        300: 'rgba(255,255,255,0.3)',
        500: 'rgba(255,255,255,0.5)',
        700: 'rgba(255,255,255,0.7)',
        900: 'rgba(255,255,255,0.9)',
      },
    },
    fontFamily: {
      custom: ['URW Gothic L', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
