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
        'accent-bg': 'var(--accent-bg)',
      },
    },
  },
  plugins: [],
} 