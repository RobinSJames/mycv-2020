/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        orange: '#ff9f00',
        red: '#ff0000',
        yellow: '#fdc029',
        'dark-gray': '#333333',
        'off-white': '#eeeeee'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%'
      },
      spacing: {
        'x-tiny': '0.1rem',
        tiny: '0.15rem',
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '180': '45rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '5pec': '5%'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],

    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
