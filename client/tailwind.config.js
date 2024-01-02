/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'minism': '300px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1220px',
      '2xl': '1440px'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'bgColor': '#fff',
        'bgColor2': '#F1F5F9',
        'textColor': '#0f172a',
        'borderColor': '#1e293b',
        'btnColor': '#0F172A'
      },
      width: {
        '6/13': '45%',
      },
    }
  },
}