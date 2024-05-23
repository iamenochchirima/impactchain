/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#4FEF64',
        'custom-gray': '#191919',
        'light-green': '#A3FEAC'
      },
      fontFamily: {
        NeueMachinalight: ['NeueMachina-light', 'sans-serif'],
        NeueMachinaRegular: ['NeueMachina-regular', 'sans-serif'],
        NeueMachinaUltrabold: ['NeueMachina-ultra-bold', 'sans-serif'],
        PoppinsRegular: ['Poppins-Regular', 'sans-serif'],
        TelegraphBold: ['Telegraph-bold', 'sans-serif'],
        TelegraphRegular: ['Telegraph-regular', 'sans-serif'],
        TelegraphUltraLight: ['Telegraph-ultra-light', 'sans-serif']

      },
    },
    screens: {
      ts: "360px",
      xs: "375px",
      ss: "620px",
      sm: "770px",
      md: "900px",
      lg: "1200px",
      llg:"1300px",
      xl: "1700px",
    },
  },
  plugins: [],
}