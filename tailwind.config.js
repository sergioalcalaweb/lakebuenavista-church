/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
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
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background:'#F9F9F9',
          primary: {
            DEFAULT: '#FFD700'
          },
          secondary: {
            DEFAULT: '#C0C0C0'
          }
        }
      },
      dark: {
        colors: {
          background: '#1E1E1E',
          content1: '#454545',
          foreground: '#dcdcdc',
          primary: {
            foreground: '#8f7806',
            DEFAULT: '#FFD700'
          },
          secondary: {
            DEFAULT: '#c49216'
          },
          warning: {
            DEFAULT: '#DBD40D'
          },
          danger: {
            DEFAULT: '#D33017'
          },
          success: {
            DEFAULT: '#52AF1F'
          }          
        }
      }
    }
  })]
}
