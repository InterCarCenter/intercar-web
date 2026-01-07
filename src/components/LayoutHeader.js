import React, { useState, useEffect } from 'react';

const LayoutHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [year, setYear] = useState('2025');
  const [phase, setPhase] = useState('idle'); 

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      // Detectamos el scroll
      setIsScrolled(window.scrollY > 20);
    };
    
    // Ejecutar al cargar por si la página ya inicia con scroll
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const run = () => {
      setPhase('split');
      setTimeout(() => setPhase('fall'), 500);
      setTimeout(() => {
        setYear(prev => (prev === '2025' ? '2026' : '2025'));
        setPhase('enter');
      }, 900);
      setTimeout(() => setPhase('glow'), 1400);
      setTimeout(() => setPhase('idle'), 2200);
    };
    run();
    const loop = setInterval(run, 5000);
    return () => clearInterval(loop);
  }, []);

  const textColorClass = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    // Se agregó pointer-events-auto y un z-index alto para asegurar el click
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 pointer-events-auto ${
      isScrolled 
        ? 'bg-gray-50/95 shadow-md py-1' 
        : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-6 flex justify-between items-center h-20">

        {/* Logo */}
        <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
          <img 
            src="./img/logo2.png" 
            alt="Intercar" 
            className={`h-10 transition-all duration-500 ${!isScrolled ? 'brightness-0 invert' : ''}`} 
          />
        </div>

        {/* Menu Desktop */}
        <ul className={`hidden md:flex items-center space-x-10 flex-grow justify-center font-semibold transition-colors duration-300 ${textColorClass}`}>
          
          <li>
            <button 
              onClick={() => handleNavClick('home')}
              className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Inicio
            </button>
          </li>
          
          <li>
            <button 
              onClick={() => handleNavClick('services')}
              className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Servicios
            </button>
          </li>

          {/* 🎯 AÑO ESPECIAL */}
          <li className="relative w-28 h-10 overflow-hidden text-center select-none">
            <span
              className={`
                absolute inset-0 flex items-center justify-center font-black text-2xl tracking-widest
                transition-all duration-500
                ${year === '2026' ? 'text-yellow-500' : textColorClass}
                ${phase === 'split' && 'tracking-[0.4em]'}
                ${phase === 'fall' && 'translate-y-12 opacity-0'}
                ${phase === 'enter' && '-translate-y-4 opacity-0'}
                ${phase === 'glow' && 'drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]'}
                ${phase === 'idle' && 'translate-y-0 opacity-100'}
              `}
            >
              {year}
            </span>
          </li>

          <li>
            <button 
              onClick={() => handleNavClick('about')}
              className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Nosotros
            </button>
          </li>
          
          <li>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Contacto
            </button>
          </li>

        </ul>

        {/* Perfecto para móvil - tamaño mediano */}
<div className={`md:hidden p-2 ${textColorClass}`}>
  <div className="relative w-14 h-11 overflow-hidden text-center select-none">
    <span
      className={`
        absolute inset-0 flex items-center justify-center font-black text-xl tracking-wide
        transition-all duration-500
        ${year === '2026' ? 'text-yellow-500' : textColorClass}
        ${phase === 'split' && 'tracking-[0.2em]'}
        ${phase === 'fall' && 'translate-y-8 opacity-0'}
        ${phase === 'enter' && '-translate-y-3 opacity-0'}
        ${phase === 'glow' && 'drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]'}
        ${phase === 'idle' && 'translate-y-0 opacity-100'}
      `}
    >
      {year}
    </span>
  </div>
</div>


      </nav>

      <style>
        {`
          @keyframes wiggle {
            0%,100% { transform: rotate(0deg); }
            25% { transform: rotate(2deg); }
            75% { transform: rotate(-2deg); }
          }
          /* Asegura que los botones tengan prioridad de click */
          button {
            cursor: pointer;
            position: relative;
            z-index: 110;
          }
        `}
      </style>
    </header>
  );
};

export default LayoutHeader;