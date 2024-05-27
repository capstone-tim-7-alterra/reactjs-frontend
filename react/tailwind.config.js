/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        merah: "#C00C25",
        hitam: "#020617",
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
};
