module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
