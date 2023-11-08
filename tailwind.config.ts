import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#469ed3',  // първи цвят в логото
          'secondary': '#e29334', // втори цвят в логото
          'accent': '#e29334',    // използвам втория цвят в логото за акцент
          'neutral': '#323232',   // цвят на текст
          'base-100': '#f7f7f7',  // предоставих примерен цвят, променете го ако искате
          'info': '#469ed3',
          'success': '#4caf50',   // предоставих примерен цвят, променете го ако искате
          'warning': '#ff9800',   // предоставих примерен цвят, променете го ако искате
          'error': '#f44336'      // предоставих примерен цвят, променете го ако искате 
        }
      },
    ]
  },
  plugins: [require("daisyui")],
}
export default config
