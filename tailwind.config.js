module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    color: {
      primary: '#db222a',
      secondary: '#31302d',
      black: '#000000',
      grey: '#898780',
      white: '#ffffff',
      textDark: '#31302d',
      textLight: '#eeeeee',
      background: '#EFEFEF',
    },
    fontSize: {
      xl: '5rem',
      l: '3.5rem',
      m: '2.2rem',
      s: '2.1rem',
      xs: '1.7rem',
      xxs: '1.6rem',
    },
    fontWeight: {
      bold: 700,
      medium: 500,
      thin: 300,
    },
    fontFamily: {
      name: '"Poppins", sans-serif',
    },
    screens: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
      xxxl: '1920px',
    },
    extend: {},
  },
  plugins: [],
}
