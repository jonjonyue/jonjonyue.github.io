/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'secondary-text': 'var(--secondary-text)',
        border: 'var(--border)',
        'card-bg': 'var(--card-bg)',
        highlight: 'var(--highlight)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
      },
      boxShadow: {
        'card': 'var(--card-shadow)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [],
} 