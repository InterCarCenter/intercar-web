import React from 'react';
import { Clock, CheckCircle, Car } from 'lucide-react';

const Estadistica = () => {
  return (
    /* py-10: El equilibrio perfecto. Ni tan gordo como el primero, ni tan flaco como el segundo */
    <section className="bg-[#0f1115] py-10 border-y border-white/5 relative overflow-hidden">
      {/* Toque de luz sutil en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center group">
          <Clock size={36} className="mb-3 text-[#d4af37] transition-transform group-hover:scale-110 duration-300" />
          <h2 className="text-4xl font-black text-white leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            93%
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[11px] mt-3 font-bold">
            Puntualidad
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center md:border-x md:border-white/10 px-4 group">
          <Car size={36} className="mb-3 text-[#d4af37] transition-transform group-hover:scale-110 duration-300" />
          <h2 className="text-4xl font-black text-white leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            20.000
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[11px] mt-3 font-bold">
            Carros Tapizados
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center group">
          <CheckCircle size={36} className="mb-3 text-[#d4af37] transition-transform group-hover:scale-110 duration-300" />
          <h2 className="text-4xl font-black text-white leading-none drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            100%
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[11px] mt-3 font-bold">
            Confiabilidad
          </p>
        </div>

      </div>
    </section>
  );
};

export default Estadistica;