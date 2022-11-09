/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b0d17',
        secondary: '#d0d6f9',
        neutral: '#ffffff',
      },
      fontSize: {
        heading1: '9.375rem',
        heading2: '6.25rem',
        heading3: '3.5rem',
        heading4: '2rem',
        heading5: [
          '1.75rem',
          {
            letterSpacing: '4.75px',
          },
        ],
        subheading1: '1.75rem',
        subheading2: [
          '0.875rem',
          {
            letterSpacing: '2.35px',
          },
        ],
        'nav-text': [
          '1rem',
          {
            letterSpacing: '2.7px',
          },
        ],
      },
      fontFamily: {
        bellefair: ['Bellefair', 'serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
