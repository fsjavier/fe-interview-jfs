/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "rgb(0, 211, 127);",
          card: "rgb(251, 248, 244);",
        },
        text: {
          primary: "rgb(22, 40, 2)",
        },
      },
    },
  },
  plugins: [],
};
