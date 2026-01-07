import React, { useState } from "react";
import {
  X,
  MessageCircle,
  ChevronRight,
  Sparkles,
  Layers,
  Shield,
  Globe,
} from "lucide-react";

// ==============================
// IMPORTS DE IMÁGENES
// ==============================
import cueroNatural from "../assets/materials/CUERO.jpg";
import cueroSintetico from "../assets/materials/CUERO SINTETICO.jpg";
import telaAutomotriz from "../assets/materials/TELA.jpg";
import alcantara from "../assets/materials/alca.jpg";
import microfibra from "../assets/materials/T.jpg";
import gamuza from "../assets/materials/GAMUZ.jpg";
import vinilo from "../assets/materials/VINILO.jpg";
import lino from "../assets/materials/LINO.jpg";

// ==============================
// DATA DE MATERIALES
// ==============================
const materiales = [
  {
    id: 1,
    nombre: "Cuero Natural",
    categoria: "Premium",
    precio: "$85.000 / m",
    imagen: cueroNatural,
    especificaciones: {
      tacto: "Suave y natural",
      durabilidad: "Muy alta",
      mantenimiento: "Medio",
      uso: "Asientos, timones, paneles",
      origen: "Italia",
    },
  },
  {
    id: 2,
    nombre: "Cuero Sintético (PU)",
    categoria: "Classic",
    precio: "$45.000 / m",
    imagen: cueroSintetico,
    especificaciones: {
      tacto: "Firme y uniforme",
      durabilidad: "Media - Alta",
      mantenimiento: "Bajo",
      uso: "Asientos, puertas",
      origen: "España",
    },
  },
  {
    id: 3,
    nombre: "Alcántara",
    categoria: "Sport",
    precio: "$65.000 / m",
    imagen: alcantara,
    especificaciones: {
      tacto: "Aterciopelado",
      durabilidad: "Alta",
      mantenimiento: "Medio",
      uso: "Techos, asientos deportivos",
      origen: "Alemania",
    },
  },
  {
    id: 4,
    nombre: "Tela Automotriz",
    categoria: "Standard",
    precio: "$38.000 / m",
    imagen: telaAutomotriz,
    especificaciones: {
      tacto: "Suave y transpirable",
      durabilidad: "Media",
      mantenimiento: "Bajo",
      uso: "Asientos y respaldos",
      origen: "Colombia",
    },
  },
  {
    id: 5,
    nombre: "Microfibra",
    categoria: "Eco",
    precio: "$55.000 / m",
    imagen: microfibra,
    especificaciones: {
      tacto: "Suave técnico",
      durabilidad: "Alta",
      mantenimiento: "Bajo",
      uso: "Asientos, interiores modernos",
      origen: "Suecia",
    },
  },
  {
    id: 6,
    nombre: "Vinilo",
    categoria: "Funcional",
    precio: "$30.000 / m",
    imagen: vinilo,
    especificaciones: {
      tacto: "Liso",
      durabilidad: "Alta",
      mantenimiento: "Muy bajo",
      uso: "Puertas, pisos, trabajo pesado",
      origen: "México",
    },
  },
  {
    id: 7,
    nombre: "Gamuza / Suede",
    categoria: "Luxury",
    precio: "$60.000 / m",
    imagen: gamuza,
    especificaciones: {
      tacto: "Aterciopelado suave",
      durabilidad: "Media",
      mantenimiento: "Alto",
      uso: "Detalles interiores",
      origen: "Japón",
    },
  },
  {
    id: 8,
    nombre: "Lino Técnico",
    categoria: "Decorativo",
    precio: "$42.000 / m",
    imagen: lino,
    especificaciones: {
      tacto: "Natural y fresco",
      durabilidad: "Media",
      mantenimiento: "Medio",
      uso: "Paneles y detalles",
      origen: "USA",
    },
  },
];

// ==============================
// COMPONENTE
// ==============================
const MaterialsSection = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-[#d4af37] w-6 h-6" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase mb-2">
            Biblioteca de Texturas
          </h2>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em]">
            Materials Section
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {materiales.map((m) => (
            <div
              key={m.id}
              onClick={() => setSeleccionado(m)}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-4 shadow-sm group-hover:shadow-xl transition-all">
                <img
                  src={m.imagen}
                  alt={m.nombre}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="px-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {m.categoria}
                </p>
                <h3 className="text-lg font-black text-black uppercase leading-tight">
                  {m.nombre}
                </h3>
                <p className="text-sm text-gray-500">{m.precio}</p>
              </div>
            </div>
          ))}
        </div>

       {/* MODAL CORREGIDO Y LIMPIO */}
        {seleccionado && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSeleccionado(null)}
            />

            <div className="relative bg-white w-full max-w-4xl h-auto max-h-[95vh] md:max-h-[90vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col overflow-y-auto animate-in fade-in zoom-in duration-300">
              
              {/* BOTÓN CERRAR FLOTANTE */}
              <button
                onClick={() => setSeleccionado(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-3 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-12">
                {/* CABECERA */}
                <div className="mb-8 md:mb-10">
                  <span className="text-[9px] md:text-[10px] font-black text-amber-600 uppercase tracking-[0.4em] mb-2 block">
                    Ficha Técnica de Material
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase text-black tracking-tighter leading-none">
                    {seleccionado.nombre}
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-gray-400 mt-2">
                    {seleccionado.precio}
                  </p>
                </div>

                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
                  
                  {/* COLUMNA IZQUIERDA: IMAGEN NATURAL */}
                  <div className="lg:col-span-7">
                    <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white">
                      <img
                        src={seleccionado.imagen}
                        alt={seleccionado.nombre}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* COLUMNA DERECHA: ESPECIFICACIONES */}
                  <div className="lg:col-span-5 space-y-6 md:space-y-8">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-widest text-black mb-6 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-amber-500"></span> Propiedades
                      </p>
                      
                      <div className="grid grid-cols-1 gap-5">
                        {/* TACTO */}
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-amber-500 transition-all">
                            <Layers size={18} />
                          </div>
                          <div>
                            <p className="text-[8px] md:text-[9px] uppercase font-bold text-gray-400 tracking-wider">Tacto y Sensación</p>
                            <p className="text-xs md:text-sm font-black uppercase text-black">{seleccionado.especificaciones.tacto}</p>
                          </div>
                        </div>

                        {/* DURABILIDAD */}
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-amber-500 transition-all">
                            <Shield size={18} />
                          </div>
                          <div>
                            <p className="text-[8px] md:text-[9px] uppercase font-bold text-gray-400 tracking-wider">Resistencia</p>
                            <p className="text-xs md:text-sm font-black uppercase text-black">{seleccionado.especificaciones.durabilidad}</p>
                          </div>
                        </div>

                        {/* ORIGEN */}
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-amber-500 transition-all">
                            <Globe size={18} />
                          </div>
                          <div>
                            <p className="text-[8px] md:text-[9px] uppercase font-bold text-gray-400 tracking-wider">Procedencia</p>
                            <p className="text-xs md:text-sm font-black uppercase text-black">{seleccionado.especificaciones.origen}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* USO Y MANTENIMIENTO */}
                    <div className="pt-6 md:pt-8 border-t border-gray-100 space-y-4">
                      <div className="flex justify-between items-center text-xs md:text-sm">
                        <span className="text-gray-400 font-bold uppercase text-[9px] md:text-[10px]">Uso recomendado:</span>
                        <span className="text-black font-extrabold text-right">{seleccionado.especificaciones.uso}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs md:text-sm">
                        <span className="text-gray-400 font-bold uppercase text-[9px] md:text-[10px]">Mantenimiento:</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold text-[9px] md:text-[10px] uppercase">
                          {seleccionado.especificaciones.mantenimiento}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

               {/* BOTÓN FINAL ACCIÓN - AHORA CON LINK A WHATSAPP */}
                <div className="mt-10 md:mt-12">
              <a 
                href={`https://wa.me/573208640997?text=Hola!%20Estoy%20interesado%20en%20el%20material:%20${seleccionado.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-5 md:py-6 rounded-2xl flex items-center justify-center gap-4 font-black uppercase text-[11px] md:text-[12px] tracking-[0.2em] hover:bg-amber-600 hover:text-white transition-all shadow-xl group cursor-pointer"
              >
              <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                Cotizar esta textura
              <ChevronRight size={16} />
              </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MaterialsSection;