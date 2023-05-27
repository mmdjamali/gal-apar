/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins : {
    preflight : false,
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        common : { black : "#212121", white : "#FFFFFF" },
        lt : {
          primary : {
            main : "#ff3e15",
            dark : "#6b1a09"
          },
          secondary : {
            main : "#f1f1f1",
            dark : "#676767"
          },
          accent : {
            main : "#00143b",
            dark : "#000819"
          }
        },
        dt : {
          primary : {

          },
          secondary : {

          },
          accent : {

          }
        }
      }
    },
  },
  plugins: [],
  future : {
    hoverOnlyWhenSupported : true
  }
}
