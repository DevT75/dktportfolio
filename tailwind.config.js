/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pokeball-lg": "url('/assets/pokeball_lg.jpg')",
        "pokeball-sm": "url('/assets/pokeball_sm.jpg')",
      },
      boxShadow: {
        'custom': '6px 6px 5px 2px rgba(0, 0, 1, 0.3)',
        'bottom': '0 6px 3px 2px rgba(0, 0, 1, 0.3)',
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        orange: '#ed7c50',
        darkOrange: '#d96d43',
        darkGrey: '#595959',
        lightGrey: '#8a8a8a',
        green: '#43ae61',
        purple: '#8566f6',
        turks: '#a6e2e3',
        // red: '#e46060',
        black: '#282829',
        white: '#f5f4f5',
      },
    },
  },
  plugins: [],
};
