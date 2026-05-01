import React from 'react';
import { Apple, Coffee, Utensils, Droplets, BrainCircuit, Activity, Battery, CheckCircle, AlertTriangle } from 'lucide-react';
import { nutritionData } from '../data/nutritionData';

export default function Nutrition() {
  return (
    <div className="space-y-6">
      
      <header className="panel p-6 border-l-4 border-accent-blue relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            <Apple className="text-accent-blue" size={28} />
            Alimentación y Suplementación
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Estrategia nutricional de precisión calibrada para el entrenamiento híbrido. El objetivo principal es optimizar la resíntesis de glucógeno, la mitigación de la fatiga del sistema nervioso y la recomposición corporal mediante el control de macros y sincronización circadiana.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 opacity-5">
          <Utensils size={200} />
        </div>
      </header>

      {/* Suplementación Ergogénica */}
      <section className="panel p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Battery className="text-yellow-500" size={24} />
          Suplementación Ergogénica
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-3 text-gray-300 font-semibold bg-dark-800">Suplemento</th>
                <th className="p-3 text-gray-300 font-semibold bg-dark-800">Dosis</th>
                <th className="p-3 text-gray-300 font-semibold bg-dark-800">Momento Clínico</th>
                <th className="p-3 text-gray-300 font-semibold bg-dark-800">Objetivo Fisiológico</th>
              </tr>
            </thead>
            <tbody>
              {nutritionData.suplementos.map((sup, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-dark-700/50 transition-colors">
                  <td className="p-3 text-accent-blue font-medium">{sup.nombre}</td>
                  <td className="p-3 text-white font-mono text-sm">{sup.dosis}</td>
                  <td className="p-3 text-gray-400 text-sm">{sup.momento}</td>
                  <td className="p-3 text-gray-400 text-sm">{sup.objetivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Esquema Semanal de Alimentación */}
      <section className="panel p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Activity className="text-accent-green" size={24} />
          Esquema Semanal y Ciclo de Carbohidratos
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {nutritionData.esquema_semanal.map((dia, index) => (
            <div key={index} className={`bg-dark-800 p-4 rounded-lg border border-gray-700 ${dia.dia === 'Domingo' ? 'lg:col-span-2' : ''}`}>
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-white text-lg">{dia.dia}</h4>
                <span className="text-xs font-mono bg-dark-900 text-gray-400 px-2 py-1 rounded">
                  {dia.entrenamiento}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className={`text-xs font-bold uppercase mb-1 ${dia.almuerzo.tipo.includes('Carbo') ? 'text-orange-400' : 'text-accent-purple'}`}>
                    Almuerzo: {dia.almuerzo.tipo}
                  </span>
                  <p className="text-gray-400 text-sm">{dia.almuerzo.desc}</p>
                </div>
                
                <div className="flex flex-col border-t border-gray-700 pt-2">
                  <span className={`text-xs font-bold uppercase mb-1 ${dia.cena.tipo.includes('Carbo') ? 'text-orange-400' : 'text-accent-purple'}`}>
                    Cena: {dia.cena.tipo}
                  </span>
                  <p className="text-gray-400 text-sm">{dia.cena.desc}</p>
                </div>

                {dia.nota && (
                  <div className="mt-2 bg-yellow-500/10 p-3 rounded border-l-2 border-yellow-500 max-w-2xl">
                    <p className="text-yellow-400 text-xs">{dia.nota}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-dark-800 rounded flex gap-3 items-start border border-gray-700">
          <BrainCircuit className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
          <p className="text-gray-300 text-sm italic leading-relaxed">{nutritionData.chocolate}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Comidas Carbo-Proteicas */}
        <section className="panel p-6">
          <h3 className="text-lg font-semibold text-orange-400 mb-2 flex items-center gap-2">
            <Utensils size={20} />
            Comidas Carbo-Proteicas (Alta Energía)
          </h3>
          <p className="text-gray-400 text-sm mb-4 pb-2 border-b border-gray-700">
            {nutritionData.comidas.carbo_proteicas.regla}
          </p>
          <ul className="space-y-3">
            {nutritionData.comidas.carbo_proteicas.opciones.map((opt, idx) => (
              <li key={idx} className="bg-dark-800 p-3 rounded">
                <span className="block text-white font-medium mb-1">{opt.titulo}</span>
                <span className="text-gray-400 text-sm">{opt.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Comidas Solo Proteínas */}
        <section className="panel p-6">
          <h3 className="text-lg font-semibold text-accent-purple mb-2 flex items-center gap-2">
            <Utensils size={20} />
            Comidas Solo Proteínas (Descarga)
          </h3>
          <p className="text-gray-400 text-sm mb-4 pb-2 border-b border-gray-700">
            {nutritionData.comidas.solo_proteicas.regla}
          </p>
          <ul className="space-y-3">
            {nutritionData.comidas.solo_proteicas.opciones.map((opt, idx) => (
              <li key={idx} className="bg-dark-800 p-3 rounded">
                <span className="block text-white font-medium mb-1">{opt.titulo}</span>
                <span className="text-gray-400 text-sm">{opt.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Desayunos */}
        <section className="panel p-6">
          <h3 className="text-lg font-semibold text-accent-blue mb-2 flex items-center gap-2">
            <Coffee size={20} />
            Desayunos y Mediatardes
          </h3>
          <div className="bg-accent-blue/10 p-3 rounded mb-4 border-l-2 border-accent-blue">
            <p className="text-accent-blue text-sm">
              <strong className="block mb-1">{nutritionData.estrategia_perientrenamiento.titulo}</strong>
              {nutritionData.estrategia_perientrenamiento.comida}<br/>
              <em className="text-xs opacity-80">{nutritionData.estrategia_perientrenamiento.nota}</em>
            </p>
          </div>
          <ul className="space-y-3">
            {nutritionData.comidas.desayunos.map((opt, idx) => (
              <li key={idx} className="bg-dark-800 p-3 rounded">
                <span className="block text-white font-medium mb-1">{opt.titulo}</span>
                <span className="text-gray-400 text-sm">{opt.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Regla de los Vegetales */}
        <section className="panel p-6 h-full">
          <h3 className="text-lg font-semibold text-accent-green mb-3 flex items-center gap-2">
            <CheckCircle size={20} />
            Regla de los Vegetales
          </h3>
          <div className="space-y-3">
            <div className="bg-dark-800 p-3 rounded border-l-2 border-accent-green">
              <strong className="text-accent-green text-sm block mb-1">Libres</strong>
              <p className="text-gray-400 text-sm">{nutritionData.regla_vegetales.libres}</p>
            </div>
            <div className="bg-dark-800 p-3 rounded border-l-2 border-red-500">
              <strong className="text-red-400 text-sm block mb-1">Restringidos</strong>
              <p className="text-gray-400 text-sm">{nutritionData.regla_vegetales.restringidos}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Matemática Clínica */}
          <section className="panel p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <BrainCircuit className="text-accent-blue" size={24} />
              La Matemática Clínica
            </h3>
            <div className="space-y-4">
              {nutritionData.matematica_clinica.map((item, idx) => (
                <div key={idx} className="bg-dark-800 p-3 rounded border border-gray-700">
                  <h4 className="text-white font-medium mb-1">{item.titulo}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hidratación */}
          <section className="panel p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Droplets className="text-accent-blue" size={24} />
              Hidratación
            </h3>
            <div className="bg-dark-800 p-4 rounded border border-accent-blue/30">
              <h4 className="text-white font-bold mb-2">{nutritionData.hidratacion.titulo}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{nutritionData.hidratacion.desc}</p>
            </div>
          </section>
        </div>

        {/* Protocolos Picoteo */}
        <section className="panel p-6 h-full">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="text-accent-green" size={24} />
            Protocolos Anti-Picoteo
          </h3>
          <div className="space-y-3">
            {nutritionData.protocolos_picoteo.map((item, idx) => (
              <div key={idx} className="bg-dark-800 p-3 rounded border-l-2 border-accent-blue">
                <strong className="text-white text-sm block mb-1">{item.titulo}</strong>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Semana de Descarga */}
      <section className="panel p-6 border border-accent-purple/30">
        <h3 className="text-xl font-semibold text-accent-purple mb-4 flex items-center gap-2">
          <AlertTriangle size={24} />
          {nutritionData.semana_descarga.titulo}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {nutritionData.semana_descarga.puntos.map((punto, idx) => (
            <div key={idx} className="bg-dark-800 p-4 rounded">
              <h4 className="text-white font-bold mb-2 text-sm">{punto.titulo}</h4>
              <p className="text-gray-400 text-sm whitespace-pre-line">{punto.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {nutritionData.semana_descarga.reglas_clinicas.map((regla, idx) => (
            <div key={idx} className="flex-1 bg-accent-purple/10 border border-accent-purple/20 p-4 rounded">
              <strong className="text-accent-purple block mb-1">{regla.titulo}</strong>
              <p className="text-gray-300 text-sm">{regla.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
