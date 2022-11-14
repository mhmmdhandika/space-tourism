/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        default: '130vh',
      },
      colors: {
        primary: '#0b0d17',
        secondary: '#d0d6f9',
        neutral: '#ffffff',
      },
      fontSize: {
        'heading-1': '9.375rem',
        'heading-2': '6.25rem',
        'heading-3': '3.5rem',
        'heading-4': '2rem',
        'heading-5': [
          '1.75rem',
          {
            letterSpacing: '4.75px',
          },
        ],
        'subheading-1': '1.75rem',
        'subheading-2': [
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
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      backgroundImage: {
        // home
        'home-mobile': "url('./assets/images/home/background-home-mobile.jpg')",
        'home-tablet': "url('./assets/images/home/background-home-tablet.jpg')",
        'home-desktop':
          "url('./assets/images/home/background-home-desktop.jpg')",
        // destination
        'destination-mobile':
          "url('./assets/images/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('./assets/images/destination/background-destination-tablet.jpg')",
        'destination-desktop':
          "url('./assets/images/destination/background-destination-desktop.jpg')",
        // crew
        'crew-mobile': "url('./assets/images/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('./assets/images/crew/background-crew-tablet.jpg')",
        'crew-desktop':
          "url('./assets/images/crew/background-crew-desktop.jpg')",
        // technology
        'technology-mobile':
          "url('./assets/images/technology/background-technology-mobile.jpg')",
        'technology-tablet':
          "url('./assets/images/technology/background-technology-tablet.jpg')",
        'technology-desktop':
          "url('./assets/images/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
