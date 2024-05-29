import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
    "./src/assets/fonts/fonts.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        capstonetheme: {
          primary: "#C00C25", // Warna Primer
          "primary-focus": "#95091D", // Warna saat mendapatkan fokus.
          "primary-content": "#FFFFFF", // Warna teks pada elemen dengan latar belakang warna induk.

          secondary: "#CFCFCF", // Warna Sekunder
          "secondary-focus": "#B1B1B1",
          "secondary-content": "#8B8B8B",

          accent: "#2B3440", // Warna Aksen untuk menonjolkan elemen-elemen penting dan interaktif
          "accent-focus": "#1D2530",
          "accent-content": "#D7DDE4",

          neutral: "#2B3440", // Warna netral yang digunakan untuk elemen-elemen sekunder atau pelengkap, seperti border atau ikon.
          "neutral-focus": "#1D2530",
          "neutral-content": "#D7DDE4",

          "base-100": "#FFFFFF", // Warna Latar Belakang 
          "base-200": "#F2F2F2",
          "base-300": "#E5E5E5",
          "base-content": "#000000",

          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
};