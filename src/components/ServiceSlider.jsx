import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { MessageCircle, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const servicios = [
  {
    titulo: 'Tapizado Automotriz',
    descripcion: 'Tapizados en materiales europeos con costuras artesanales de nivel premium.',
    imagen: './img/insta2.png',
    precio: '$Desde 700.000',
  },
  {
    titulo: 'Limpieza de Interior',
    descripcion: 'Limpieza profunda del interior, restaurando la apariencia y el confort original.',
    imagen: './img/limpieza.jpg',
    precio: '$Desde 150.000',
  },
  {
    titulo: 'Tapetes y Alfombras',
    descripcion: 'Fabricación y reemplazo de tapetes y alfombras a medida para cada vehículo.',
    imagen: './img/insta6.png',
    precio: '$250.000',
  },
  {
    titulo: 'Fabricación de Carpas',
    descripcion: 'Especialistas en techos caídos, carpas y restauración de paneles de puertas.',
    imagen: './img/insta1.png',
    precio: '$Desde 900.000',
  },
  {
    titulo: 'Restauración Funcional de Asientos',
    descripcion: 'Corrección de desgaste por uso: costuras abiertas, ruidos internos y espuma vencida.',
    imagen: './img/demas.png',
    precio: '$Desde 80.000',
  },
  {
    titulo: 'Timones Personalizados',
    descripcion: 'Personalización de timones en materiales de calidad.',
    imagen: './img/timon2.jpeg',
    precio: '$Desde 150.000',
  }
];

const brandLogos = [
  './img/alfa romeo.png',
  './img/porsche.png',
  '/img/alfa romo.png',
  '/img/alfa roeo.png',
  '/img/alfa rmeo.png',
  '/img/alfa rmeo.png',
];

const ServiceSlider = () => {
  return (
    <section id="services" className="relative scroll-mt-24 bg-[#050505] py-24 overflow-hidden">
      
      {/* --- COLLAGE DE LOGOS (LIMPIO Y RÁPIDO) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* LOGO IZQUIERDA */}
        <img
          src={brandLogos[0]}
          alt=""
          className="absolute -left-[30%] top-[45%] w-[1400px] opacity-[0.10] rotate-[-20deg] select-none"
        />

        {/* LOGO DERECHA (EL QUE SUBIMOS) */}
        <img
          src={brandLogos[1]}
          alt=""
          className="absolute right-[2%] top-[8%] w-[450px] md:w-[650px] opacity-[0.25] rotate-[8deg] grayscale select-none"
        />

        {/* LOGO ABAJO */}
        <img
          src={brandLogos[2]}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 -bottom-[45%] w-[1800px] opacity-[0.035] grayscale select-none"
        />

        {/* LOGO VERTICAL */}
        <img
          src={brandLogos[3]}
          alt=""
          className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[900px] opacity-[0.03] rotate-90 grayscale select-none"
        />
      </div>

      {/* GRILLA DE LOGOS DE FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]">
        <div className="w-full h-full grid grid-cols-3 md:grid-cols-4 gap-24 place-items-center">
          {brandLogos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="w-40 md:w-56 object-contain grayscale"
            />
          ))}
        </div>
      </div>

      {/* TEXTO DE FONDO */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] z-0">
        <span className="text-[22vw] font-black tracking-tighter text-blue-500 select-none uppercase">
          CRAFT
        </span>
      </div>

      {/* RESPLANDOR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* CABECERA */}
      <div className="relative z-10 container mx-auto px-6 mb-16 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="h-[1px] w-8 bg-[#d4af37]/40"></div>
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#d4af37]">
            Intercar Center
          </span>
          <div className="h-[1px] w-8 bg-[#d4af37]/40"></div>
        </div>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
          Servicios <span className="text-amber-400 italic">Elite</span>
        </h2>
      </div>

      {/* SLIDER */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="absolute inset-y-0 -left-4 -right-4 flex items-center justify-between pointer-events-none z-30">
          <button className="btn-prev pointer-events-auto w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-[#d4af37] hover:text-black transition-all flex items-center justify-center">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="btn-next pointer-events-auto w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-[#d4af37] hover:text-black transition-all flex items-center justify-center">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

       <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          speed={1000}
          autoplay={{ delay: 5000 }}
          navigation={{ nextEl: '.btn-next', prevEl: '.btn-prev' }}
          pagination={{ clickable: true }}
          className="!overflow-visible"
        >
          {servicios.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#0f1115] border border-white/5 rounded-[2.5rem] p-6 lg:p-10 flex flex-col lg:flex-row gap-10 items-center shadow-2xl">
                
                {/* CONTENEDOR DE IMAGEN LIMPIO Y REDONDEADO */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <img
                    src={s.imagen}
                    alt={s.titulo}
                    className="
                      w-full 
                      h-[300px] md:h-[450px] 
                      object-cover 
                      rounded-[2rem] 
                      shadow-2xl 
                      select-none 
                      pointer-events-none 
                      border border-white/5
                    "
                  />
                </div>

                {/* CONTENIDO DE TEXTO */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex gap-1 text-[#d4af37]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                    {s.titulo}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[#d4af37] pl-4">
                    {s.descripcion}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest block mb-1">
                        Inversión
                      </span>
                      <span className="text-2xl font-black text-white">
                        {s.precio}
                      </span>
                    </div>

                    <a
                      href="https://wa.me/573208640997"
                      target="_blank"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4af37] text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 container mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { t: 'CALIDAD', d: 'Cueros y sintéticos de estándar internacional.' },
          { t: 'GARANTÍA', d: 'Respaldo total en cada puntada y pegado.' },
          { t: 'PASIÓN', d: 'Más de 20 años transformando interiores.' }
        ].map((item, i) => (
          <div key={i} className="p-6 border border-white/5 rounded-2xl">
            <h4 className="text-white font-black text-xl mb-2">{item.t}</h4>
            <p className="text-gray-500 text-xs uppercase tracking-wider">{item.d}</p>
          </div>
        ))}
      </div>

      <style>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.2) !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: #d4af37 !important; }
      `}</style>
    </section>
  );
};

export default ServiceSlider;