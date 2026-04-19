import { useState, useEffect } from 'react';
import { Target, ClipboardList, PlusCircle, Activity } from 'lucide-react';
import EstructuraSemanal from '../components/EstructuraSemanal';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('rutina_weights_history');
    if (saved) return JSON.parse(saved);
    // Migration from old basic weights structure
    const old = localStorage.getItem('rutina_weights');
    if (old) {
      return [{ date: new Date().toISOString().split('T')[0], note: 'Carga inicial', weights: JSON.parse(old) }];
    }
    return [];
  });

  const [form, setForm] = useState({ 
    date: new Date().toISOString().split('T')[0], 
    note: 'Mesociclo 4', 
    squat: '', deadlift: '', bench: '', pullups: '', dips: '' 
  });

  useEffect(() => {
    localStorage.setItem('rutina_weights_history', JSON.stringify(history));
  }, [history]);

  const handleSave = () => {
    // Only save if at least one weight is provided
    const newRecord = {
      id: Date.now(),
      date: form.date,
      note: form.note,
      weights: {
        squat: Number(form.squat) || 0,
        deadlift: Number(form.deadlift) || 0,
        bench: Number(form.bench) || 0,
        pullups: Number(form.pullups) || 0,
        dips: Number(form.dips) || 0,
      }
    };
    setHistory([...history, newRecord].sort((a,b) => new Date(a.date) - new Date(b.date)));
    setForm({ ...form, squat: '', deadlift: '', bench: '', pullups: '', dips: '' });
  };

  const targets = [
    { id: 'squat', title: 'SQUAT', target: 80, unit: 'kg', subtitle: 'Sin butt wink' },
    { id: 'deadlift', title: 'DEADLIFT', target: 100, unit: 'kg', subtitle: 'Sin straps' },
    { id: 'bench', title: 'BENCH', target: 55, unit: 'kg', subtitle: 'Pausa isométrica' },
    { id: 'pullups', title: 'PULL-UPS', target: 6, unit: 'reps', subtitle: 'Estrictas BW' },
    { id: 'dips', title: 'FONDOS', target: 10, unit: 'reps', subtitle: 'Estrictos BW' },
  ];

  // Get Latest Weights from history
  const latestRecord = history.length > 0 ? history[history.length - 1] : { weights: {} };
  const currentWeights = latestRecord.weights || {};

  // Setup Line Chart Model
  const chartData = {
    labels: history.map(h => h.date + (h.note ? ` (${h.note})` : '')),
    datasets: targets.map((t, idx) => {
      const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
      return {
        label: t.title,
        data: history.map(h => h.weights[t.id] || 0),
        borderColor: colors[idx % colors.length],
        backgroundColor: colors[idx % colors.length],
        tension: 0.3,
      };
    })
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#9ca3af' } },
      title: { display: false }
    },
    scales: {
      y: { ticks: { color: '#9ca3af' }, grid: { color: '#374151' } },
      x: { ticks: { color: '#9ca3af' }, grid: { color: '#374151', display: false } }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
      
      {/* HEVY INTEGRATION BUBBLE */}
      <div className="lg:col-span-3 panel p-4 flex items-center justify-between border-l-4 border-purple-500">
        <div className="flex items-center gap-3">
           <Activity className="text-purple-400" size={20} />
           <div>
             <h3 className="text-sm font-bold text-white">Hevy Tracker</h3>
             <p className="text-xs text-gray-400">
               Usuario: @laddydi (Modo Local)
             </p>
           </div>
        </div>
      </div>

      {/* OBJETIVOS Y GRAFICA */}
      <section className="panel p-6 lg:col-span-2 flex flex-col hover:border-accent-green transition-colors">
        <div className="flex justify-between items-center mb-4 border-b border-dark-700 pb-2">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="text-accent-green" size={24} /> Historial Evolutivo vs Metas
          </h2>
        </div>
        
        {/* GRAPHIC */}
        <div className="w-full h-64 mb-6">
          {history.length > 0 ? (
            <Line data={chartData} options={chartOptions} />
          ) : (
             <div className="h-full flex items-center justify-center text-gray-500 text-sm">
               Agrega un registro para ver tu progresión
             </div>
          )}
        </div>

        {/* LATEST SUMMARY BOXES */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-auto">
          {targets.map(t => {
            const current = currentWeights[t.id] || 0;
            const percent = Math.min((current / t.target) * 100, 100);
            const isCompleted = current >= t.target;

            return (
              <div key={t.id} className={`bg-dark-900 p-2 rounded border border-dark-700`}>
                <div className="text-[10px] text-gray-500 font-mono text-center mb-1">{t.title}</div>
                <div className="text-lg font-bold text-white text-center">
                  {current} <span className="text-xs text-gray-400">{t.unit}</span>
                </div>
                <div className="w-full bg-dark-800 rounded-full h-1 mt-1">
                  <div className={`h-1 rounded-full ${isCompleted ? 'bg-accent-green' : 'bg-accent-blue'}`} style={{width: `${percent}%`}}></div>
                </div>
                <div className="text-[9px] text-center mt-1 text-gray-400">{percent.toFixed(0)}% de {t.target}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* NEW RECORD FORM */}
      <section className="panel p-6 flex flex-col hover:border-accent-blue transition-colors">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
          <PlusCircle className="text-accent-blue" size={24} /> Nueva Marca de Cierre
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Fecha</label>
            <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full bg-dark-900 border border-dark-700 text-white rounded p-2 text-sm focus:border-accent-blue outline-none" />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Nota (Ejem. Mesociclo 4)</label>
            <input type="text" value={form.note} onChange={e => setForm({...form, note: e.target.value})} className="w-full bg-dark-900 border border-dark-700 text-white rounded p-2 text-sm focus:border-accent-blue outline-none" placeholder="Ej: Fin Mesociclo 4" />
          </div>
          
          <div className="pt-2 border-t border-dark-700">
            <div className="grid grid-cols-2 gap-3 mt-2">
              {targets.map(t => (
                <div key={t.id}>
                  <label className="text-[10px] text-gray-400 block mb-1 font-mono">{t.title} ({t.unit})</label>
                  <input type="number" placeholder={currentWeights[t.id] || "0"} value={form[t.id]} onChange={e => setForm({...form, [t.id]: e.target.value})} className="w-full bg-dark-900 border border-dark-700 text-white rounded py-1 px-2 text-sm focus:border-accent-blue outline-none" />
                </div>
              ))}
            </div>
          </div>
          
          <button onClick={handleSave} className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors mt-2">
            Guardar Marcas
          </button>
        </div>
      </section>

      {/* DETALLES Y JUSTIFICACIÓN DE OBJETIVOS (Move to bottom full width) */}
      <section className="panel p-6 lg:col-span-3 flex flex-col mt-2">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
          <ClipboardList className="text-purple-400" size={24} /> Justificación Clínica y Metas (Hevy)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-2">
          {/* Objetivo 1 */}
          <div className="bg-dark-900 p-3 rounded border-l-2 border-yellow-500">
            <strong className="text-yellow-400 block mb-2">1: Recomposición Corporal</strong>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><strong className="text-white">Meta:</strong> Reducir del 25.6% al 20% de grasa para diciembre.</li>
              <li><strong className="text-white">Justificación:</strong> Es una reducción del 5.6% en 8 meses. Previene la pérdida de masa magra y asegura la regularidad menstrual.</li>
            </ul>
          </div>
          {/* Objetivo 2 */}
          <div className="bg-dark-900 p-3 rounded border-l-2 border-green-500">
            <strong className="text-green-400 block mb-2">2: Fuerza Biomécanica (Gym)</strong>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><strong className="text-white">Squat:</strong> Consolidar 80 kg rompiendo el paralelo, sin butt wink ni valgo de rodillas.</li>
              <li><strong className="text-white">Deadlift:</strong> 100 kg sin straps. El agarre como limitante.</li>
              <li><strong className="text-white">Bench:</strong> 55 kg con retracción escapular estricta.</li>
            </ul>
          </div>
          {/* Objetivo 3 */}
          <div className="bg-dark-900 p-3 rounded border-l-2 border-purple-500">
            <strong className="text-purple-400 block mb-2">3: Fuerza Relativa (Cali)</strong>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><strong className="text-white">Pull-ups:</strong> 5-6 repeticiones estrictas BW (sin kipping).</li>
              <li><strong className="text-white">Fondos:</strong> 8-10 repeticiones BW bloqueando codos.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
