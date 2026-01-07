import React, { useState } from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    car: '',
    service: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, car, service, phone } = formData;

    const mensaje = `Hola, mi nombre es ${name}%0AMi número es: ${phone}%0AMarca y modelo: ${car}%0AServicio de interés: ${service}`;
    const numeroWhatsApp = "573208640997"; // <-- Reemplázalo por tu número si es otro
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

  // Limpiar formulario si quieres
  setFormData({ name: '', car: '', service: '', phone: '' });
};

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <span className="border-b-2 border-yellow-500 pb-2">Contáctanos</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y te responderemos en menos de 24 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulario */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-black mb-6 flex items-center gap-2">
              <FaPaperPlane className="text-yellow-600" />
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-800 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="car" className="block text-lg font-medium text-gray-800 mb-2">Marca y Modelo de tu Auto</label>
                <input
                  type="text"
                  id="car"
                  name="car"
                  value={formData.car}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-lg font-medium text-gray-800 mb-2">Servicio de Interés</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Tapizado">Tapizado (Piel/Vinilo)</option>
                  <option value="Limpieza">Limpieza Profunda</option>
                  <option value="Techos">Techos</option>
                  <option value="Timones">Timones</option>
                  <option value="Tapetes">Tapetes</option>
                  <option value="Baúl">Baúl</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-800 mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-black mb-6 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-600" />
              Nuestra Ubicación
            </h3>
            <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden shadow-md">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7953.1734081730765!2d-74.06903098598329!3d4.66753533309607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b2ff6f9bff9%3A0x5aaf54ca5e45ee75!2sCAR%20DETAILING%20DELUXE!5e0!3m2!1ses-419!2sco!4v1752793905834!5m2!1ses-419!2sco"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de InterCar"
              className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-600 mt-1" />
                <p className="text-gray-800">
                  <span className="font-semibold">Dirección:</span> Carrera 23 #76-44, Bogota.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-yellow-600 mt-1" />
                <p className="text-gray-800">
                  <span className="font-semibold">Horarios:</span> L-V: 8AM - 7PM | Sáb: 9AM - 3PM
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-yellow-600 mt-1" />
                <p className="text-gray-800">
                  <span className="font-semibold">Teléfono:</span> +57 320 864 0997
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;