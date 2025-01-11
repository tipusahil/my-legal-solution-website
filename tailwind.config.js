/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

  
  module.exports = {
    theme: {
      extend: {
        dropShadow: {
          'lime': '0 4px 6px rgba(163, 230, 53, 0.5)', // lime-400 এর মতো শেড
        },
      },
    },
  };
  