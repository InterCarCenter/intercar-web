import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const PreguntasFrecuentes = () => {
  const preguntas = [
    {
      pregunta: "¿Qué tipo de tapicería ofrecen?",
      respuesta: "Especialistas en cuero automotriz de alta gama, cueros sintéticos de alto tráfico y textiles europeos."
    },
    {
      pregunta: "¿Cuánto tiempo demora un trabajo de tapicería?",
      respuesta: "Cada proyecto es único. El tiempo promedio oscila entre 1 a 2 semanas para garantizar acabados de fábrica."
    },
    {
      pregunta: "¿Ofrecen garantía por el trabajo realizado?",
      respuesta: "Nuestra promesa es la excelencia. Ofrecemos respaldo total por cualquier detalle técnico en confección o montaje."
    },
    {
      pregunta: "¿Tienen servicio a domicilio?",
      respuesta: "Para su comodidad, gestionamos la logística de recogida y entrega de su vehículo en puntos estratégicos de la ciudad."
    },
    {
      pregunta: "¿Hacen restauración de timones?",
      respuesta: "Somos especialistas. Restauramos timones conservando el tacto original y mejorando la ergonomía."
    }
  ];

  const [activo, setActivo] = useState(null);

  return (
    <section className="relative py-24 px-6 bg-[#F9F9F9] overflow-hidden">
      
      {/* --- CAPA DE CARRITOS (FONDO) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Carrito 1: PORSCHE (Arriba e Izquierda) */}
        <img 
          src="/img/porshelindo.png" 
          alt="" 
          className="
            absolute
            /* Forzamos que suba incluso por encima del padding */
            -top-[5%] 
            -left-[10%] 
            /* Tamaño impactante */
            w-[600px] md:w-[950px] 
            object-contain 
            /* Opacidad alta para que se vea claro */
            opacity-[0.45] 
            grayscale-0 
            rotate-[-12deg]
            max-w-none
          "
        />

        {/* Carrito 2: (Derecha - Preparado para cuando lo necesites) */}
        <img 
          src="/img/bmw.png" 
          alt="" 
          className="
            absolute
            /* Posición vertical */
            top-[50%] 
            /* Lo metemos bien adentro para que se note el cuerpo del carro */
            right-[2%] 
            /* Tamaño grande */
            w-[650px] md:w-[950px] 
            object-contain 
            /* Opacidad alta para que sea muy notorio */
            opacity-[0.6] 
            grayscale-0 
            /* Casi nada de rotación para que se vea 'derecho' */
            rotate-[2deg]
            /* Espejado */
            scale-x-[-1]
            max-w-none
            /* Un pequeño resplandor para que resalte del fondo blanco */
            drop-shadow-[-20px_10px_30px_rgba(0,0,0,0.1)]
          "
        />
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ENCABEZADO ESTILO EDITORIAL */}
        <div className="text-center mb-20">
          <span className="text-amber-600 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">
            Información Exclusiva
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-4">
            Dudas <span className="text-gray-300 italic">Comunes</span>
          </h2>
          <div className="h-[3px] w-16 bg-black mx-auto"></div>
        </div>

        {/* ACORDEÓN ELEGANTE */}
        <div className="space-y-4">
          {preguntas.map((item, index) => {
            const isOpen = activo === index;
            return (
              <div 
                key={index} 
                className={`group transition-all duration-500 border-b border-black/5 ${isOpen ? 'bg-white shadow-2xl shadow-black/5' : ''}`}
              >
                <button
                  onClick={() => setActivo(isOpen ? null : index)}
                  className="w-full text-left py-7 px-6 flex justify-between items-center"
                >
                  <span className={`text-sm md:text-lg font-extrabold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-amber-600' : 'text-gray-800'}`}>
                    {item.pregunta}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-amber-600 text-white rotate-180' : 'text-gray-300'}`}>
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-8 text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
                    {item.respuesta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTÓN DE CONTACTO */}
        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/573208640997" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-amber-600 transition-all rounded-full shadow-2xl"
          >
            Hablar con un experto
          </a>
        </div>
      </div>

      {/* Espacio extra para que los carros fluyan al final */}
      <div className="h-32"></div>

    </section>
  );
};

export default PreguntasFrecuentes;