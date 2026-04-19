import { Dumbbell, PersonStanding, Award } from 'lucide-react';

export default function Databases() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">

      {/* DB GIMNASIO */}
      <section className="panel p-6 hover:border-accent-blue transition-colors group">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-dark-700 pb-2">
          <Dumbbell className="text-gray-400 group-hover:text-accent-blue transition-colors" size={24} /> DB Gimnasio
        </h2>
        <div className="space-y-4 text-xs text-gray-300 h-96 overflow-y-auto pr-2">
          <div>
            <strong className="text-white border-b border-gray-700 block mb-1 pb-1">Bloque PUSH</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li><span className="text-gray-500">Fuerza:</span> Press Banca Plano Barra.</li>
              <li><span className="text-gray-500">Aislamiento:</span> Peck Deck, Press Inc. Smith/Mancuerna.</li>
              <li><span className="text-gray-500">Hombro:</span> Militar Mancuerna/Smith (Frontal), Laterales polea/mancuerna (Lateral), Vuelos inversos/Peck Deck inverso (Posterior).</li>
              <li><span className="text-gray-500">Tríceps:</span> Extensión tras nuca, Polea normal, Unilateral supino, Rompecraneos.</li>
            </ul>
          </div>
          <div>
            <strong className="text-white border-b border-gray-700 block mb-1 pb-1 mt-3">Bloque PULL</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li><span className="text-gray-500">Fuerza:</span> Peso Muerto Convencional (en LEGS 2).</li>
              <li><span className="text-gray-500">Aislamiento:</span> Remo apoyo pecho, Jalón alta, Facepull, PullOver, Remo máquina, Espinales, Y Raise, Shrug.</li>
              <li><span className="text-gray-500">Bíceps:</span> Curl Martillo, Scott (Predicador), Bayesian (Polea espaldas), Inclinado mancuerna.</li>
            </ul>
          </div>
          <div>
            <strong className="text-white border-b border-gray-700 block mb-1 pb-1 mt-3">Bloque LEGS</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li><span className="text-gray-500">Posterior:</span> PM Convencional, Hip Thrust, Curl isquios sentado, DRL, Pantorrillas, Curl nórdico.</li>
              <li><span className="text-gray-500">Cuádriceps:</span> Sentadilla Libre, Búlgaras/Prensa, Variación Aislamiento (Rotación mensual), Ad/Abductores máquina.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DB CALISTENIA */}
      <section className="panel p-6 hover:border-accent-green transition-colors group">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-dark-700 pb-2">
          <PersonStanding className="text-gray-400 group-hover:text-accent-green transition-colors" size={24} /> DB Calistenia
        </h2>
        <div className="space-y-4 text-xs text-gray-300 h-96 overflow-y-auto pr-2">
          <div>
            <strong className="text-white border-b border-gray-700 block mb-1 pb-1">Bloque PULL (Martes)</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li><span className="text-gray-500">Básico:</span> Dominadas (Pull-ups) estrictas (variar agarre prono/supino por semana).</li>
              <li><span className="text-gray-500">Aislamiento:</span> Scapular Pull-ups (activación).</li>
              <li><span className="text-gray-500">Skill:</span> Progresión Front Lever y Dragon Flag (Tucks/Isometrías).</li>
              <li><span className="text-gray-500">Finisher:</span> 10-15 min Vertical (Handstand).</li>
            </ul>
          </div>
          <div>
            <strong className="text-white border-b border-gray-700 block mb-1 pb-1 mt-3">Bloque PUSH (Jueves)</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li><span className="text-gray-500">Básico:</span> Fondos en Paralelas (Dips) estrictos.</li>
              <li><span className="text-gray-500">Aislamiento:</span> Push-ups controladas (variar prono/supino).</li>
              <li><span className="text-gray-500">Skill:</span> Planche Leans y L-Sit (bloque) -&gt; Progresión Back Lever.</li>
              <li><span className="text-gray-500">Finisher:</span> 10-15 min Vertical (Handstand).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS CALISTENIA */}
      <section className="panel p-6 hover:border-accent-purple transition-colors group">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2 border-b border-dark-700 pb-2">
          <Award className="text-accent-purple group-hover:scale-110 transition-transform" size={24} /> Skills Calistenia
        </h2>
        <div className="space-y-4 text-xs text-gray-300 h-96 overflow-y-auto pr-2">
          <div className="bg-dark-900 p-2 rounded">
            <strong className="text-white block mb-1">1. Cimientos (Palancas)</strong>
            <p className="text-gray-500 mb-1">Dominar protracción/retracción escapular.</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Dominadas: Pronas (pecho barra), Supinas (bíceps), Neutras, Archer.</li>
              <li>Flexiones: Diamante (tríceps), Pseudo-Planche (deltoides/bíceps).</li>
              <li>Dragon Flag: Isometría cad. posterior/anterior.</li>
            </ul>
          </div>
          <div className="bg-dark-900 p-2 rounded">
            <strong className="text-white block mb-1">2. Intermedio (Transiciones)</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li>Pino: Wall walk -&gt; Chest to wall -&gt; Free.</li>
              <li>Muscle-Up: Tracción + cierre estricto (cero kipping).</li>
              <li>Back Lever: Tensión en bíceps.</li>
              <li>Elbow Lever: Control COM.</li>
            </ul>
          </div>
          <div className="bg-dark-900 p-2 rounded">
            <strong className="text-white block mb-1">3. Avanzado (Isometrías)</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li>Front Lever: Torque dorsal (Tuck -&gt; Full).</li>
              <li>HSPU: Bloqueo óseo concéntrico.</li>
              <li>Human Flag: Oblicuos tensores.</li>
              <li>Pistol Squat: Dorsiflexión tobillo extrema.</li>
            </ul>
          </div>
          <div className="bg-dark-900 p-2 rounded">
            <strong className="text-white block mb-1">4. Élite (Resiliencia Estructural)</strong>
            <ul className="list-disc pl-4 space-y-1">
              <li>Full Planche: Compresión muñecas, cizalla hombro.</li>
              <li>OAP (Dominada a una mano): Estabilidad escapular extrema.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
