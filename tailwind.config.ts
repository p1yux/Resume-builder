import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bricolage-grotesque)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-inter)', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config 