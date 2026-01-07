// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Tus colores personalizados
      colors: {
        primary: "#CFA14C", // dorado tapicería
        dark: "#0F0F0F",
      },
      
      // Tus fuentes personalizadas
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      
      // Las animaciones que quieres añadir
      animation: {
        fadeSlideIn: 'fadeSlideIn 1s ease-out',
      },
      keyframes: {
        fadeSlideIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-30px) rotate(8deg)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) rotate(8deg)' 
          },
        },
      },
    },
  },
  plugins: [],
};