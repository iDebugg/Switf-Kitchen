/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#09645B',
        secondary: '#F28205',
        gray: {
          100: '#00000080',
        },
        
      },
    },
  },
  plugins: [],
};
