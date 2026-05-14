import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#f0f5f3',
          100: '#d9e8e2',
          200: '#b3d1c5',
          300: '#82b3a1',
          400: '#559180',
          500: '#2C4A3E',
          600: '#254035',
          700: '#1d342a',
          800: '#162820',
          900: '#0e1b15',
        },
        terra: {
          50:  '#fdf5ef',
          100: '#f9e4d0',
          200: '#f2c49e',
          300: '#e8a06a',
          400: '#dc8041',
          500: '#C4774A',
          600: '#a8633a',
          700: '#8a4e2c',
          800: '#6d3a1f',
          900: '#4f2a14',
        },
        linen: {
          50:  '#fdfcf9',
          100: '#F5EFE4',
          200: '#EDE3D4',
          300: '#E6D4C0',
          400: '#d9c3a8',
          500: '#ccb28f',
          600: '#b89371',
          700: '#9a7558',
          800: '#7d5c42',
          900: '#5f4330',
        },
        sage: '#8B9E8C',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'wide-xl': '0.15em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'line-grow': 'lineGrow 1.2s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
