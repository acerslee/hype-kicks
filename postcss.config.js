// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
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
};
