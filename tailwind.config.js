/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: "#454122",                            // Retained as-is
        page: "#595431",                           // Main color
        card: "#3D3E28",                           // Tinted version of 'page'
        "card-hover": "#A3A378",                   // Darker tone of 'page'
        "default-text": "#E7E5CA",                 // Lighter tint of 'page'
        "button-accent": "#318250",                // Complementary color of 'page'
        "button-accent-hover": "#318255"           // Slightly altered 'button-accent'
      }
      
      
    },
  },
  plugins: [],
}
