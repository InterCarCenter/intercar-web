import React, { useState } from 'react';

const GallerySection = () => {
  const categories = ['Todos', 'Tapizado', 'Limpieza', 'Techos', 'Timones', 'Tapetes', 'Baúl'];
  const images = [
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Tapizado+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Tapizado+Despues', category: 'Tapizado' },
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Limpieza+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Limpieza+Despues', category: 'Limpieza' },
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Techos+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Techos+Despues', category: 'Techos' },
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Timones+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Timones+Despues', category: 'Timones' },
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Tapetes+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Tapetes+Despues', category: 'Tapetes' },
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Baul+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Baul+Despues', category: 'Baúl' },
    { src: 'https://via.placeholder.com/600x400/121212/D4AF37?text=Tapizado+2+Antes', srcAfter: 'https://via.placeholder.com/600x400/D4AF37/121212?text=Tapizado+2+Despues', category: 'Tapizado' },
  ];

  const [filter, setFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAfter, setShowAfter] = useState(false);

  const filteredImages = filter === 'Todos' ? images : images.filter(img => img.category === filter);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowAfter(false); // Reset to 'before' when new image is selected
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowAfter(false);
  };

  return (
    <section id="gallery" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gold mb-12">Galería de Proyectos</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`py-2 px-6 rounded-full text-lg transition-all duration-300 ${filter === cat ? 'bg-gold text-black shadow-md' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group" onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.category} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">Ver Proyecto</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
            <div className="relative bg-gray-800 rounded-xl shadow-2xl p-6 max-w-3xl w-full" onClick={e => e.stopPropagation()}>
              <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white text-3xl hover:text-gold transition-colors">
                &times;
              </button>
              <img
                src={showAfter ? selectedImage.srcAfter : selectedImage.src}
                alt="Proyecto"
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`py-2 px-6 rounded-full text-lg transition-all duration-300 ${!showAfter ? 'bg-gold text-black' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                  Antes
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`py-2 px-6 rounded-full text-lg transition-all duration-300 ${showAfter ? 'bg-gold text-black' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                >
                  Después
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;