import React from 'react';

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/573208640997?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20tapicer%C3%ADa%20automotriz.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
      aria-label="WhatsApp"
    >
      {/* Ícono de WhatsApp */}
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.48a11.98 11.98 0 0 0-16.96 0 11.96 11.96 0 0 0-3.1 11.83L0 24l8.7-2.27a12 12 0 0 0 11.82-3.1 12 12 0 0 0 0-16.95zm-8.9 16.43a9.92 9.92 0 0 1-5.07-1.37l-.36-.22-5.17 1.35 1.38-5.04-.23-.38A9.96 9.96 0 1 1 11.62 19.9zm5.46-7.63c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15s-.76.95-.93 1.14c-.17.2-.34.22-.63.07s-1.23-.45-2.35-1.42a8.78 8.78 0 0 1-1.62-2.01c-.17-.3-.02-.46.13-.6.14-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53s-.66-1.6-.91-2.2c-.24-.6-.49-.5-.67-.5l-.57-.01a1.1 1.1 0 0 0-.8.37 3.34 3.34 0 0 0-1.06 2.5c0 1.47 1.05 2.9 1.2 3.1.15.2 2.07 3.15 5.02 4.41.7.3 1.25.48 1.68.61.7.22 1.35.19 1.86.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
