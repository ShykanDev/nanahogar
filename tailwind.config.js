/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';
export default {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
      // Fuentes personalizadas

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'parkinsans': ['Parkinsans', 'sans-serif'],
        // lilita one
        'lilita-one': ['Lilita One', 'cursive'],
      },
  },
  },
  plugins: [
    tailwindcssAnimated
  ],
}
