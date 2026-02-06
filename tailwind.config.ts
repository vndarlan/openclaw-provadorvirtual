import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nova paleta - Estilo Seedream Red
        primary: '#E31B23',
        primaryDark: '#B71C1C',
        primaryLight: '#FF4D4D',
        background: '#FFFFFF',
        backgroundAlt: '#FAFAFA',
        surface: '#FFFFFF',
        textDark: '#1A1A1A',
        textLight: '#FFFFFF',
        textMuted: '#666666',
        black: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #E31B23 0%, #B71C1C 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(227, 27, 35, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-white': '0 0 30px rgba(255, 255, 255, 0.4)',
        'glow-white-lg': '0 0 60px rgba(255, 255, 255, 0.5)',
        'glow-red': '0 0 30px rgba(227, 27, 35, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
