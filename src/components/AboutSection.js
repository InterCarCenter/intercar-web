import React from 'react';
import { FaTools, FaAward, FaHeart, FaInstagram } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-5">
            <span className="border-b-2 border-yellow-500 pb-2.5">Nuestra Historia</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Más de dos décadas renovando sueños sobre ruedas
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Imagen con efecto hover */}
          <div className="lg:w-1/2 relative group">
            <img
              src="./img/taller-interior.jpg"
              alt="Taller de Tapicería InterCar"
              className="rounded-xl shadow-lg w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Contenido */}
          <div className="lg:w-1/2">
            <div className="space-y-6 text-black">
              <p className="text-lg leading-relaxed">
                En <span className="text-yellow-600 font-semibold">InterCar</span>, hemos transformado más de 3,000 vehículos con nuestro enfoque artesanal. Cada proyecto es tratado con el cuidado de una obra de arte.
              </p>

              {/* Valores con iconos */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <FaTools className="text-2xl text-yellow-600" />, text: "Técnica profesional" },
                  { icon: <FaAward className="text-2xl text-yellow-600" />, text: "Materiales premium" },
                  { icon: <FaHeart className="text-2xl text-yellow-600" />, text: "Atención personalizada" },
                  { icon: <FaInstagram className="text-2xl text-yellow-600" />, text: "Resultados fotográficos" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg border border-gray-200">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Instagram real con enlace */}
              <div className="mt-10 text-center lg:text-left">
                <a 
                  href="https://www.instagram.com/intercar_center/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
                >
                  <FaInstagram className="text-xl" />
                  Ver nuestro trabajo en Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;