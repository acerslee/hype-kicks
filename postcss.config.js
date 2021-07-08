// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
<<<<<<< HEAD
  plugins: [
     'postcss-import',
     'tailwindcss',
     'autoprefixer'
    ]
  //   tailwindcss: {},
  //   autoprefixer: {},
  //   ...(process.env.NODE_ENV === 'production'
  //     ? {
  //         '@fullhuman/postcss-purgecss': {
  //           content: [
  //             './components/**/*.js',
  //             './pages/**/*.js'
  //           ],
  //           defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  //         }
  //       }
  //     : {})
  // }
=======
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './components/**/*.tsx',
              './pages/**/*.tsx'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }
        }
      : {})
  }
>>>>>>> 94fa4e6d6a99353be43708339295d9891ecc7989
};
