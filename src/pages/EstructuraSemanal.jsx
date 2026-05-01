import { CalendarDays } from 'lucide-react';

export default function EstructuraSemanal() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="panel p-6 hover:border-accent-purple transition-colors">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
          <CalendarDays className="text-accent-purple" size={24} /> Estructura Semanal
        </h2>
        <p className="text-xs text-gray-500 mb-4">Esquema PULL/PUSH/LEGS Híbrido y control de fatiga.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-dark-900 p-3 rounded border-l-2 border-blue-500 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-blue-400 mb-1">LUNES</div>
            <div className="text-sm text-white font-mono">PULL (Gym)</div>
            <div className="text-xs text-gray-400 mt-1">Hipertrofia espalda / Cero carga axial.</div>
            <div className="text-[10px] text-gray-500 mt-1">+ Boxeo (19:00 hs)</div>
          </div>
          <div className="bg-dark-900 p-3 rounded border-l-2 border-purple-500 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-purple-400 mb-1">MARTES</div>
            <div className="text-sm text-white font-mono">PUSH (Cali)</div>
            <div className="text-xs text-gray-400 mt-1">Fondos y Core (Skills).</div>
            <div className="text-[10px] text-gray-500 mt-1">+ Movilidad (09:00 hs)</div>
          </div>
          <div className="bg-dark-900 p-3 rounded border-l-2 border-green-500 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-green-400 mb-1">MIÉRCOLES</div>
            <div className="text-sm text-white font-mono">LEGS (Gym)</div>
            <div className="text-xs text-gray-400 mt-1">Peso Muerto y Cadena Posterior.</div>
            <div className="text-[10px] text-gray-500 mt-1">+ Boxeo (19:00 hs)</div>
          </div>
          <div className="bg-dark-900 p-3 rounded border-l-2 border-blue-500 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-blue-400 mb-1">JUEVES</div>
            <div className="text-sm text-white font-mono">PULL (Cali)</div>
            <div className="text-xs text-gray-400 mt-1">Dominadas estrictas y técnica.</div>
            <div className="text-[10px] text-gray-500 mt-1">+ Movilidad (09:00 hs)</div>
          </div>
          <div className="bg-dark-900 p-3 rounded border-l-2 border-purple-500 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-purple-400 mb-1">VIERNES</div>
            <div className="text-sm text-white font-mono">PUSH (Gym)</div>
            <div className="text-xs text-gray-400 mt-1">Fuerza Pectoral y Hombro.</div>
            <div className="text-[10px] text-gray-500 mt-1">+ Cardio Z1/2 (&gt;17:00)</div>
          </div>
          <div className="bg-dark-900 p-3 rounded border-l-2 border-green-500 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-green-400 mb-1">SÁBADO</div>
            <div className="text-sm text-white font-mono">LEGS (Gym)</div>
            <div className="text-xs text-gray-400 mt-1">Sentadilla y Cuádriceps.</div>
            <div className="text-[10px] text-gray-500 mt-1">+ Cardio Zona 1/2</div>
          </div>
          <div className="bg-dark-900 p-3 rounded border-l-2 border-gray-600 md:col-span-2 hover:bg-dark-800 transition-colors">
            <div className="text-xs font-bold text-gray-400 mb-1">DOMINGO</div>
            <div className="text-sm text-white font-mono">Recuperación</div>
            <div className="text-xs text-gray-400 mt-1">Descanso absoluto / Cardio Zona 2 (Lavado de metabolitos).</div>
          </div>
        </div>
      </section>
    </div>
  );
}
