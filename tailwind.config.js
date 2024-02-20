/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        brand: "var(--color-1)",
        secondary: "var(--color-2)",
        tertiary1: "var(--color-4)",
        tertiary2:"var(--color-6)"
      },
      backgroundColor: {
        brand: "var(--color-1)",
        theme1: "var(--color-3)",
        theme2: "var(--color-7)",
        theme3: "var(--color-5)",
        theme4: "var(--color-8)"
      },
      borderColor: {
        brand: "var(--color-1)"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
