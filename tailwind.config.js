/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A5D6C9',
        'primary-dark': '#94C1B4',
        accent: {
          sand: '#F4EDE4',
          leaf: '#B7CEB2',
          gray: '#F7F7F7',
        },
        text: '#333333',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        'noto-jp': ['"Noto Sans JP"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: '36px',
        h2: '28px',
        h3: '22px',
        base: '16px',
      },
    },
  },
  plugins: [],
};