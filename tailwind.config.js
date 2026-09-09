/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // P999 icon palette — deep forest green (no blue navy)
        primary: '#07160C',
        secondary: '#0C1F14',
        accent: '#2DD46F',
      },
    },
  },
  plugins: [],
}
