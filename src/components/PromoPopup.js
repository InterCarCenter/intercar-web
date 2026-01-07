import React, { useState, useEffect } from 'react';

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Aparece después de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Opcional: Guardar en localStorage para no mostrar nuevamente
    localStorage.setItem('promoClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 animate-fadeIn">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative border-4 border-yellow-500 transform transition-all duration-300 hover:scale-[1.02]">
        {/* Botón cerrar */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-yellow-600 transition-colors text-2xl"
          aria-label="Cerrar promoción"
        >
          &times;
        </button>

        {/* Contenido */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="inline-block bg-yellow-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-2">
              OFERTA LIMITADA
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              ¡Combina Servicios y Ahorra!
            </h3>
            <p className="text-lg text-gray-600">
              Reserva hoy y obtén beneficios exclusivos
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
            <p className="font-bold text-gray-800 text-xl">
              💦 Lavado exterior <span className="text-yellow-600">-15%</span>
            </p>
            <p className="text-gray-600 mt-1">
              Al contratar cualquier servicio de tapicería
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-800">
              <span className="line-through text-gray-500 mr-2">$110.000 COP</span>
              <span className="text-2xl font-bold text-yellow-600">$89.999</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Precio especial por tiempo limitado
            </p>
          </div>

          <button
            onClick={() => {
              window.open('https://wa.me/573208640997?text=¡Hola!%20Quiero%20aprovechar%20la%20promo%20de%20lavado%20exterior%20con%2010%%20de%20descuento', '_blank');
              handleClose();
            }}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quiero el 10% de descuento
          </button>

          <p className="text-xs text-gray-400 text-center mt-2">
            Oferta válida hasta {new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;