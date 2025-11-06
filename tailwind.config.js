

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
    purge: {
    enabled: true,
    content: [
     './www/pages/**/*.html',
     './www/**/*.html',
     './src/pages/**/*.js','./pages-choc/**/*.html',
     './www/pages-choc/**/*.js','./pages/**/*.svelte',
     './src/pages/**/*.svelte',
'./www/pages-med/**/*.js','./pages-med/**/*.svelte'
    ],

    options: {
      //whitelist: ['mode-dark']

    }
  },
   
    theme: {
        darkSelector: '.theme-dark',
        extend: {
            screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      },
      colors: {
          transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      bluegray: '#607d8b',
      'bluegray': {
100: '#EFF2F3',
200: '#D7DFE2',
300: '#BFCBD1',
400: '#90A4AE',
500: '#607D8B',
600: '#56717D',
700: '#3A4B53',
800: '#2B383F',
900: '#1D262A',
},

'my-green': {
50: '#F2FAFA',
100: '#E6F5F4',
200: '#C0E7E4',
300: '#99D8D3',
400: '#4DBAB3',
500: '#019D92',
600: '#018D83',
700: '#015E58',
800: '#004742',
900: '#002F2C',
}
    },
        },
        screens: {
            'xs': '375px',
            'xsl': '480px',
            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'mdl': '992px',

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }
        }
    },
    variants: {
      extend: {
 //     backgroundColor: ['responsive', 'hover', 'focus', 'active','dark'],
 // textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover','dark']
  // borderColor: ['dark', 'dark-focus', 'dark-focus-within']
}
  

    },
     plugins: [require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),]
}



// min-width: 480px    Mobile-landscape (and larger)
// min-width: 768px    Tablet-portrait (and larger)
// min-width: 992px    Tablet-landscape (and larger)
// min-width: 1200px   Laptops (and langer)

// npm install tailwindcss-dark-mode --save-dev

// npm install @tailwindcss/ui

// sudo npx tailwindcss build -i styles.css -o output.css --minify --jit




