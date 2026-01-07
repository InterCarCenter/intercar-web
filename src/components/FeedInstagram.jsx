import { FaInstagram } from 'react-icons/fa';

const FeedInstagram = () => {
  return (
    <section className="py-12 px-4 bg-white">
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-5 text-center">
        <span className="border-b-2 border-yellow-500 pb-2.5">SÍGUENOS EN INSTAGRAM</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-center">
        Descubre más de 20 años de trabajo transformando interiores automotrices, con detalles únicos y pasión por cada proyecto.
      </p>

      {/* Info de la cuenta */}
      <a
        href="https://www.instagram.com/intercar_center/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 mb-8 px-4 sm:px-16 hover:opacity-90 transition"
      >
        <img src="./img/logo1.jpg" alt="Logo IntercarCenter" className="h-12 w-auto" />
        <div>
          <p className="text-lg font-bold text-black">IntercarCenter</p>
          <p className="text-gray-600 text-sm">Tapicería Automotriz Especializada</p>
        </div>
      </a>


      {/* Galería */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-16 mt-8">
        {[
          { src: './img/insta1.png' },
          { src: './img/insta2.png' },
          { src: './img/insta3.png' },
          { src: './img/insta4.png' },
          { src: './img/insta5.png' },
          { src: './img/insta6.png' },
          ].map((item, index) => (
          <a
            href="https://www.instagram.com/intercar_center/"
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="block"
          >
            <img
            src={item.src}
            alt={`Instagram post ${index + 1}`}
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
          </a>
  ))}
      </div>

      {/* Botón Instagram real con enlace */}
      <div className="mt-10 text-center">
        <a 
          href="https://www.instagram.com/intercar_center/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg transition-all"
        >
          <FaInstagram className="text-xl" />
          Ver nuestro trabajo en Instagram
        </a>
      </div>
    </section>
  );
};

export default FeedInstagram;