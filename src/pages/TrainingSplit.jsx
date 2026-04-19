import { useState } from 'react';
import { Layers, GitMerge, ChevronDown, ChevronUp, Database } from 'lucide-react';
import { mesocyclesInfo, splitData } from '../data/routineData';

export default function TrainingSplit() {
  const [activeMeso, setActiveMeso] = useState('meso1');
  const [activeWeek, setActiveWeek] = useState('week1');
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (dayId) => {
    setExpandedDay(expandedDay === dayId ? null : dayId);
  };

  const getBorderColor = (color) => {
    const colors = {
      blue: 'border-blue-500',
      purple: 'border-purple-500',
      green: 'border-green-500',
      gray: 'border-gray-500'
    };
    return colors[color] || 'border-dark-700';
  };

  const getTextColor = (color) => {
    const colors = {
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      gray: 'text-gray-400'
    };
    return colors[color] || 'text-white';
  };

  const currentMesoInfo = mesocyclesInfo[activeMeso];
  const currentWeekData = splitData[activeMeso][activeWeek];

  const methodologyData = {
    week1: [
      { label: "Gimnasio", desc: "Cadencia y Control. Levantaremos con tempo 3-1-X-1 (3 segundos bajando, 1 segundo de pausa abajo, subida explosiva). Te obligará a usar el \"menor peso posible\". Cero técnicas avanzadas." },
      { label: "Calistenia", desc: "Negativas e Isometrías. Aprovecharemos que la musculatura genera un 130% más de fuerza en la fase excéntrica (bajando) para estimular el crecimiento sin agotar el SNC. Para los skills, sostenemos isometrías submáximas (PAILs/RAILs)." },
      { label: "Finisher Cali", desc: "15 minutos de Vertical (Handstand) puro." }
    ],
    week2: [
      { label: "Gimnasio", desc: "Subimos las cargas. Mantenemos el control excéntrico, pero bajamos el rango de repeticiones (6 a 8). Te acercas a 1 repetición del fallo absoluto." },
      { label: "Calistenia", desc: "Clusters y EMOMs (Low Weight). Para dominadas y fondos. Un EMOM (Every Minute on the Minute) de 10 minutos con 2-3 repeticiones por minuto (con tu propio peso o lastre de 2.5kg). Maximizamos la exposición neural sin llegar al fallo metabólico." }
    ],
    week3: [
      { label: "Gimnasio", desc: "Técnicas de Intensidad Avanzada (ART). Aquí entran tus DropSets, Rest-Pause y FST-7. Aumentan dramáticamente la densidad del entrenamiento y alteran el entorno endocrino, reduciendo la miostatina. Verdadero fallo estructural." },
      { label: "Calistenia", desc: "Tests de 1RM o Max Reps. Pruebas tu máximo de dominadas/fondos. Sin EMOMs, fuerza bruta." }
    ],
    week4: [
      { label: "Descarga", desc: "Bajamos los pesos un 40% y cortamos las series a la mitad. Permites a las articulaciones sanar y coincide con tu ciclo menstrual." }
    ]
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500">

      {/* HEADER DINÁMICO */}
      <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-dark-700 pb-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Database className="text-accent-blue" size={32} /> Split Semanal Dinámico
          </h1>
          <p className="text-sm text-gray-400">Arquitectura de entrenamiento por mesociclos cerrados.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <label className="text-xs text-gray-400 block mb-1 uppercase font-bold tracking-widest">Filtrar por Mesociclo</label>
          <select
            value={activeMeso}
            onChange={(e) => {
              setActiveMeso(e.target.value);
              setExpandedDay(null); // Reset accordion on change
            }}
            className="bg-dark-900 border-2 border-accent-blue text-white rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-blue font-bold cursor-pointer"
          >
            <option value="meso1">Mesociclo 1: Adaptación Base</option>
            <option value="meso2">Mesociclo 2: Peso Libre</option>
            <option value="meso3">Mesociclo 3: Hibridación</option>
            <option value="meso4">Mesociclo 4: Fuerza Unilateral</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* INFO DEL MESOCICLO SELECCIONADO (Col Izq) */}
        <section className="panel p-6 lg:col-span-1 h-fit">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
            <Layers className="text-accent-blue" size={24} /> Información del Macro
          </h2>
          <div className="bg-dark-900 p-4 rounded border-l-4 border-accent-blue shadow-lg">
            <strong className="text-white block mb-2 text-lg">{currentMesoInfo.title}</strong>
            <h4 className="text-xs font-bold text-accent-blue mb-1 uppercase tracking-wider">Justificación Clínica</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {currentMesoInfo.justification}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-dark-700">
            <strong className="text-accent-blue text-xs block mb-2">REGLAS GENERALES:</strong>
            <ul className="text-xs space-y-2 list-disc pl-4 text-gray-400">
              <li><strong>Cadencia :</strong> Tres segundos controlando la bajada, un segundo de pausa en la máxima elongación, subida explosiva y un segundo apretando.
              </li>
              <li><strong>Descansos:</strong> 3 minutos cronometrados en los ejercicios básicos (Fuerza). 90 segundos a 2 minutos en los aislamientos. No negocies esto; el ATP tarda 3 minutos en resintetizarse por completo.</li>
            </ul>
          </div>
        </section>

        {/* SPLIT SEMANAL INTERACTIVO (Col Der) */}
        <section className="panel p-6 lg:col-span-2 flex flex-col">
          <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2 border-b border-dark-700 pb-2">
            <GitMerge className="text-accent-green" size={24} /> Desglose Semanal
          </h2>

          {/* TABS DE LAS 4 SEMANAS */}
          <div className="flex flex-wrap border-b border-dark-700 mb-4 mt-2">
            <button
              className={`px-4 py-2 text-sm transition-colors ${activeWeek === 'week1' ? 'tab-btn active' : 'text-gray-400 hover:text-white'}`}
              onClick={() => { setActiveWeek('week1'); setExpandedDay(null); }}
            >
              Semana 1<br /><span className="text-[10px] font-normal">Volumen</span>
            </button>
            <button
              className={`px-4 py-2 text-sm transition-colors ${activeWeek === 'week2' ? 'tab-btn active' : 'text-gray-400 hover:text-white'}`}
              onClick={() => { setActiveWeek('week2'); setExpandedDay(null); }}
            >
              Semana 2<br /><span className="text-[10px] font-normal">Fuerza Base</span>
            </button>
            <button
              className={`px-4 py-2 text-sm transition-colors ${activeWeek === 'week3' ? 'tab-btn active' : 'text-gray-400 hover:text-white'}`}
              onClick={() => { setActiveWeek('week3'); setExpandedDay(null); }}
            >
              Semana 3<br /><span className="text-[10px] font-normal">Peaking</span>
            </button>
            <button
              className={`px-4 py-2 text-sm transition-colors ${activeWeek === 'week4' ? 'tab-btn active' : 'text-gray-400 hover:text-white'}`}
              onClick={() => { setActiveWeek('week4'); setExpandedDay(null); }}
            >
              Semana 4<br /><span className="text-[10px] font-normal">Escala (Deload)</span>
            </button>
          </div>

          {/* CABECERA DINÁMICA DE LA SEMANA */}
          <div className="bg-dark-900 p-4 rounded border border-accent-blue mb-4">
            <div className="font-bold text-white mb-2 flex items-center justify-between">
              <span>{currentWeekData.title}</span>
            </div>
            <div className="text-xs text-gray-300 bg-dark-800 p-2 rounded mb-3 border border-dark-700">
              <span className="font-bold text-accent-blue">Objetivo:</span> {currentWeekData.objective}
            </div>
            
            <div className="mt-2 space-y-1">
              <strong className="text-[11px] text-gray-500 uppercase tracking-wider mb-1 block">Metodología Clínica WUP</strong>
              {methodologyData[activeWeek].map((item, idx) => (
                <div key={idx} className="text-xs text-gray-400">
                  <span className="font-bold text-gray-200">● {item.label}:</span> {item.desc}
                </div>
              ))}
            </div>
          </div>

          {/* LISTA DE DÍAS (ACORDEONES) */}
          <div className="flex-grow space-y-3 pb-8">
            {currentWeekData.days.map((day) => {
              const isExpanded = expandedDay === day.id;
              const borderColor = getBorderColor(day.color);
              const textColor = getTextColor(day.color);

              return (
                <div
                  key={day.id}
                  className={`bg-dark-900 rounded border transition-all cursor-pointer overflow-hidden ${isExpanded ? `border-l-4 ${borderColor} bg-dark-800 shadow-lg` : `border-dark-700 hover:border-gray-500`}`}
                  onClick={() => toggleDay(day.id)}
                >
                  {/* Accordion Header */}
                  <div className="p-3 pr-4 flex justify-between items-center select-none">
                    <div>
                      <strong className={`${textColor} text-sm`}>{day.dayName}</strong>
                      <p className="text-xs text-gray-400 mt-0.5">{day.split}</p>
                    </div>
                    <div>
                      {isExpanded ? <ChevronUp className="text-gray-400" size={20} /> : <ChevronDown className="text-gray-400" size={20} />}
                    </div>
                  </div>

                  {/* Accordion Body (Detalle Ejercicios) */}
                  <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] border-t border-dark-700 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 bg-dark-900">
                      <ul className="space-y-3">
                        {day.details.map((ex, idx) => (
                          <li key={idx} className="text-sm">
                            <span className="text-xs font-bold text-gray-500 bg-dark-800 px-1.5 py-0.5 rounded mr-2 inline-block shadow-sm tracking-wider uppercase align-top mt-0.5">{ex.type}</span>
                            <span className="text-gray-200 whitespace-pre-line inline-block align-top">{ex.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      </div>
    </div>
  );
}
