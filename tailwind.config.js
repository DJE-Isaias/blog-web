/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Azul oscuro
        secondary: "#F59E0B", // Naranja suave
        background: "#F3F4F6", // Gris claro
        textMain: "#111827", // Negro
        textSubtle: "#6B7280", // Gris oscuro
      },
    },
  },
  plugins: [],
};
