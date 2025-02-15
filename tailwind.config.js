module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1920px',
        'lxl': '1025px', 
        'mxl': '800px',
      },
    },
  },
  plugins: [],
};

