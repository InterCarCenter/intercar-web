import React from 'react';

const visa = './img/logovisa.png';
const payu = './img/nequi.png';
const amex = './img/bancolombia.png';
const diners = './img/daviplata.png';

const Footer = () => {
  return (
    // Fondo oscuro para hacer match con el inicio
    <footer className="bg-[#0a0a0a] text-gray-400 py-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Columna 1 */}
        <div className="space-y-3">
          <p className="font-black text-xl text-white tracking-tighter uppercase">
            INTERCAR <span className="text-[#d4af37]">CENTER</span>
          </p>
          <p className="font-medium text-gray-300">Tapicería Automotriz</p>
          <p className="text-gray-500">Más de 20 años de experiencia en confort y diseño. Tapizamos todo tipo de vehículos.</p>
        </div>

        {/* Columna 2 */}
        <div className="space-y-2">
          <p className="text-white font-bold uppercase tracking-widest text-xs mb-3">Información</p>
          <p><span className="text-[#d4af37] font-semibold">Cel / WhatsApp:</span> 320 864 0997</p>
          <p><span className="text-[#d4af37] font-semibold">Email:</span> jrtapiceria90@gmail.com</p>
          <p className="text-gray-500">Bogotá, Colombia</p>
        </div>

        {/* Columna 3 - Medios de pago (Sin efectos, tal cual los pediste) */}
        <div className="flex flex-col gap-4">
          <p className="text-white font-bold uppercase tracking-widest text-xs">Medios de pago</p>
          <div className="flex flex-wrap items-center justify-start gap-4">
            <img src={visa} alt="Visa" className="h-8" />
            <img src={payu} alt="Nequi" className="h-8" />
            <img src={amex} alt="Bancolombia" className="h-8" />
            <img src={diners} alt="Daviplata" className="h-8" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-[10px] uppercase tracking-widest text-gray-600">
        © {new Date().getFullYear()} Intercar Center - Bogotá, Colombia
      </div>
    </footer>
  );
};

export default Footer;