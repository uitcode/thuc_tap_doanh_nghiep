const colors = require('tailwindcss/colors');

module.exports = isProd => ({
  prefix: '',
  purge: {
    enabled: isProd,
    content: ['**/*.html', '**/*.ts']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      titiny: '.5625rem',
      tiny: '.625rem',
      xxs: '.6875rem',
      xs: '.75rem',
      sm: '.875rem',
      smm: '.8125',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    colors: {
      primary: colors.red[800],
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      tealCustom: {
        100: 'rgb(236, 243, 241)'
      },
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.amber,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      black: colors.black,
      white: colors.white
    },
    screens: {
      xs: '425px',
      // small mobile

      sm: '576px',
      // mobile

      md: '768px',
      // tablet

      lg: '992px',
      // big tablet + small laptop

      xl: '1200px',
      // laptop

      xxl: '1500px'
      // big laptop + desktop
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      borderWidth: ['hover']
    }
  },
  plugins: []
});
