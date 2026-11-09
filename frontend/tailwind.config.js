/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        untan: { 50: '#eef3fb', 100: '#d9e4f5', 600: '#1f3d8f', 700: '#183073', 900: '#0f1d47' },
        emas: { 400: '#f6c343', 500: '#eab308' },
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
