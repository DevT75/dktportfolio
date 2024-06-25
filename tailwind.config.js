/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')
const toColorValue = require('tailwindcss/src/util/toColorValue')

module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xlg': '1400px',
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      strokeWidth: {
        '1': '1',
        '2': '2',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pokeball-lg": "url('/assets/pokeball_lg.jpg')",
        "pokeball-sm": "url('/assets/pokeball_sm.jpg')",
      },
      boxShadow: {
        'custom': '6px 6px 5px 2px rgba(0, 0, 1, 0.3)',
        'bottom': '0 6px 5px 1px rgba(0, 0, 1, 0.3)',
        'text-box': '6px 6px 5px 2px rgba(0, 0, 1, 0.3), inset 12px 0 4px 0 rgba(245, 0, 0, 1),inset -12px 0 4px 0 rgba(245, 0, 0, 1),inset 0 3px 3px 0 rgba(245, 0, 0, 0.3)',
        'top': 'inset 0 6px 2px 0 rgba(240, 0, 0, 0.8)',
        'friend': 'inset 0 6px 2px 0 rgba(240, 0, 0, 0.8),6px 6px 5px 2px rgba(0, 0, 1, 0.3)',
        'tab': '0 6px 5px 1px rgba(0, 0, 1, 0.3), inset 0 6px 5px 1px rgba(0, 0, 1, 0.3)',
        'sidebar-left': 'inset -30px 0 5px 0 rgba(0, 0, 1, 0.2)',
        'sidebar-right': 'inset 50px 0 5px 0 rgba(0, 0, 1, 0.2)',
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
  variants: {
    extend: {
      textStroke: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, e, config, theme }) {
      const textBorderSize = `--tw${config('prefix')}-text-border-size`

      matchUtilities(
        {
          'text-border': (value) => ({
            'text-shadow': `-2px 0  ${toColorValue(value)},0 1px 2px ${toColorValue(value)},
            0 -1px 2px ${toColorValue(value)},2px 0 1px ${toColorValue(value)}
            `,
          }),
        },
        {
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(theme('borderColor')),
          ),
          type: 'color',
        },
      )

      matchUtilities(
        {
          'text-border-size': (value) => ({
            [textBorderSize]: value
          }),
        },
        { values: theme('borderWidth') }
      )
    }),
  ]
};
