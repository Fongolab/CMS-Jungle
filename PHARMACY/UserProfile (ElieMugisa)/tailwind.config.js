/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        my_black: '#111',
        filtered_black: '#33333317',
        // secondary: 'rgba(7, 227, 238, 0.8)',
        secondary: '#30b9bf',
        // primary: 'rgba(0, 222, 192, 0.8)',
        primary: '#22af91',
        // success: 'rgba(252, 18, 57, 0.8)',
        success: '#ea5662',
      },
      spacing: {
        large: '40rem',
        vh110: '120vh',
        'ten-Pourcent': '10%',
        'sixty-Pourcent': '60%',
        'thirty-Pourcent': '30%',
      },
    },
  },
  plugins: [],
};
