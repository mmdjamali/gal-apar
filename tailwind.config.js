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

          },
          secondary : {
            
          }
        },
        dt : {
          primary : {

          },
          secondary : {

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
