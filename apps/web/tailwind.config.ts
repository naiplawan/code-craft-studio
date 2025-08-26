import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a',
        },
        teal: {
          50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a',
        },
        'craft-bg-primary': '#0a0e0e',
        'craft-bg-secondary': '#0d1415',
        'craft-bg-tertiary': '#134e4a',
        'craft-border-color': 'rgba(20, 184, 166, 0.2)',
        'craft-text-primary': '#f0fdfa',
        'craft-text-secondary': '#99f6e4',
        'craft-text-tertiary': '#5eead4',
      },
    },
  },
  plugins: [],
}
export default config
