

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh"
		  },
      textColor: {
        'orange-main-page': '#ffa20a'
      },
      inset:{
        "55/100": "55%"
      },
      screens: {
        'phone': '740px',
        'laptop': '1024px',
        'desktop': '1280px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
