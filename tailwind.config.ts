import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1240px',
      // => @media (min-width: 1240px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
        noto: ['Noto Sans Thai', 'sans-serif']
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing')
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require('preline/plugin'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#de9e36",
          "primary-content": "#EEE4D4",

          "secondary": "##DEB841",
          "secondary-content": "#F2E5C0",

          "accent": "#37323E",
          "accent-content": "#CAC9CD",

          "neutral": "#6D6A75",
          "neutral-content": "#D3D3D3",

          "base-100": "#BFBDC1",
          "base-content": "#313031",

          "info": "#0093ff",
          "info-content": "#ffffff",

          "success": "#00b885",
          "success-content": "#ffffff",

          "warning": "#ffa700",
          "warning-content": "#ffffff",

          "error": "#f4002d",
          "error-content": "#ffffff",
        },
      },
    ],
  },
}
export default config
