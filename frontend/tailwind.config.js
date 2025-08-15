/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1280px',
        xl: '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      colors: {
        'headerbuton': '#cd853f',
        'headertext': '#828282',
        'headertext2': '#4f4f4f',
        'textgray': '#475569',
      },
    },
  },
  plugins: [],
}
