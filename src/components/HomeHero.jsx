import React from 'react';
import { Phone, Globe, Instagram, Facebook } from 'lucide-react';
import { BsTiktok } from 'react-icons/bs';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* 1. Decoraciones de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#d4af37] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#d4af37] opacity-5 blur-[120px] rounded-full" />
      
      {/* 2. Letras de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.10]">
        <span className="text-[25vw] md:text-[20vw] font-black tracking-tighter text-blue-400 select-none">CENTER</span>
      </div>

{/* 3. Redes Sociales con hover colores */}
<div className="absolute left-2 md:left-10 top-[25%] md:top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-6 z-40 items-center scale-90 md:scale-100">
  <span className="[writing-mode:vertical-lr] text-[8px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.5em] mb-2 rotate-180">
    Síguenos
  </span>
  <div className="w-[1px] h-8 md:h-12 bg-[#d4af37]/30 mx-auto"></div>
  <a href="https://www.facebook.com/profile.php?id=100067838740960" target="_blank" rel="noopener noreferrer" className="group">
    <Facebook className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
  </a>
  <a href="https://www.instagram.com/intercar_center/" target="_blank" rel="noopener noreferrer" className="group">
    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300" />
  </a>
  <a href="https://www.tiktok.com/@el_del_taller" target="_blank" rel="noopener noreferrer" className="group">
    <BsTiktok className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
  </a>
</div>

      {/* 4. Contenedor Principal (GRID) */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center z-10 pt-24 md:pt-28">
        
        {/* Lado Texto - AJUSTA AQUÍ el contenedor */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 -mt-20 md:mt-0 -mt-12">
  <h2 className="text-sm md:text-xl font-bold tracking-[0.3em] text-[#d4af37] mb-2 uppercase">
    Find the Best
  </h2>
  <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4 text-white">
    INTER <br className="hidden md:block" />
    <span className="text-[#d4af37]">CAR</span>
    <span className="text-gray-500">CEN</span>
  </h1>
  {/* Párrafo SIN margen negativo */}
  <p className="text-sm md:text-xl font-medium text-gray-400 mb-6 md:mb-8 max-w-xs md:max-w-md italic border-l-2 border-[#d4af37] pl-4">
    LA EXCELENCIA EN CADA KILÓMETRO
  </p>


        </div>

        {/* Lado Imagen (Order 2 en móvil) */}
<div className="relative order-2 lg:order-1 flex justify-center lg:justify-start -mt-16 md:mt-0 lg:-mt-2">
  <div className="relative group md:-mt-24 lg:mt-0">
    <div className="absolute inset-0 bg-[#d4af37]/10 blur-[60px] rounded-full scale-75 animate-pulse" />
    <img 
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80" 
      alt="Car" 
      className="relative w-full max-w-[280px] md:max-w-2xl h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem]" 
    />
  </div>
</div>

      </div>

      {/* 5. Footer Info */}
      <div className="absolute bottom-6 md:bottom-8 left-4 md:left-12 flex flex-col gap-2 md:gap-4 z-40 scale-[0.8] md:scale-100 origin-bottom-left">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 text-white mb-1">
            <Phone className="w-5 h-5 text-[#d4af37]" />
            <span className="text-lg md:text-xl font-black tracking-tight">3208640997</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Globe className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] uppercase tracking-widest">WWW.INTERCAR.CO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;