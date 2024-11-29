/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Ensures Tailwind scans all JS, JSX, TS, and TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
