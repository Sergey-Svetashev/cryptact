import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'shamrock': 'rgb(56 201 124)',
        'dodger-blue': 'rgb(39 110 241)',
        'selago': 'rgb(241, 245, 254)',
        'regent-gray': 'rgb(140 149 157)',
        'picton-blue': 'rgb(66 153 225)',
        'waikawa-gray': 'rgb(95 121 156)',
        'iron': 'rgb(222 225 227)',
        'humming-bird': 'rgb(217 235 249)',
        'white-half-transparent': 'rgb(255 255 255 / 0.5)',
      },
      textColor: {
        'fun-blue': 'rgb(30 84 183)'
      },
      fontSize: {
        '4/5xl': '2rem'
      },
      lineHeight: {
        '4/5': '1.125rem',
        '10/1': '2.625rem'
      },
      boxShadow: {
        'main': '0 1px 2px 0 rgb(0 0 0 / 0.16)',
        'focus': '0 0 4px 8px rgb(66 153 225)',
      }
    },
  },
  plugins: [],
}
export default config
