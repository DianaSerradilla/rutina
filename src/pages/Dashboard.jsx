import { useState, useEffect } from 'react';
import { Target, ClipboardList, PlusCircle, Activity, Dumbbell, AlertTriangle } from 'lucide-react';
import EstructuraSemanal from '../components/EstructuraSemanal';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { splitData } from '../data/routineData';
import { nutritionData } from '../data/nutritionData';
import { supabase } from '../lib/supabase';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [quickMeso, setQuickMeso] = useState('meso1');
  const [quickWeek, setQuickWeek] = useState('week1');

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
    async function fetchHistory() {
      if (supabase) {
        const { data, error } = await supabase
          .from('progress_history')
          .select('*')
          .order('date', { ascending: true });

        if (!error && data) {
          const formatted = data.map(row => ({
            id: row.id,
            date: row.date,
            note: row.note,
            weights: {
              squat: Number(row.squat),
              deadlift: Number(row.deadlift),
              bench: Number(row.bench),
              pullups: Number(row.pullups),
              dips: Number(row.dips)
            }
          }));
          setHistory(formatted);
          localStorage.setItem('rutina_weights_history', JSON.stringify(formatted));
        }
      }
    }
    fetchHistory();
  }, []);

  useEffect(() => {
    localStorage.setItem('rutina_weights_history', JSON.stringify(history));
  }, [history]);

  const currentWeights = history.length > 0 ? history[history.length - 1].weights : {};

  const handleSave = async () => {
    // Si el usuario no escribe un peso nuevo, arrastramos el peso de la última marca (currentWeights)
    const newWeights = {
      squat: form.squat !== '' ? Number(form.squat) : (currentWeights.squat || 0),
      deadlift: form.deadlift !== '' ? Number(form.deadlift) : (currentWeights.deadlift || 0),
      bench: form.bench !== '' ? Number(form.bench) : (currentWeights.bench || 0),
      pullups: form.pullups !== '' ? Number(form.pullups) : (currentWeights.pullups || 0),
      dips: form.dips !== '' ? Number(form.dips) : (currentWeights.dips || 0),
    };

    const newRecord = {
      id: Date.now(),
      date: form.date,
      note: form.note,
      weights: newWeights
    };

    const updatedHistory = [...history, newRecord].sort((a, b) => new Date(a.date) - new Date(b.date));
    setHistory(updatedHistory);
    setForm({ ...form, squat: '', deadlift: '', bench: '', pullups: '', dips: '' });

    if (supabase) {
      const { error } = await supabase
        .from('progress_history')
        .insert([{
          date: form.date,
          note: form.note,
          squat: newWeights.squat,
          deadlift: newWeights.deadlift,
          bench: newWeights.bench,
          pullups: newWeights.pullups,
          dips: newWeights.dips
        }]);

      if (error) {
        console.error("Error saving to Supabase:", error);
        alert("Error al guardar en Supabase. Se guardó localmente.");
      }
    }
  };

  const getTodayId = () => {
    const day = new Date().getDay(); // 0 is Sunday, 1 is Monday
    if (day === 0) return 'd7';
    return `d${day}`;
  };

  const todayId = getTodayId();
  const todayRoutine = splitData[quickMeso]?.[quickWeek]?.days?.find(d => d.id === todayId);

  const daysMap = {
    'd1': 'Lunes',
    'd2': 'Martes',
    'd3': 'Miércoles',
    'd4': 'Jueves',
    'd5': 'Viernes',
    'd6': 'Sábado',
    'd7': 'Domingo'
  };
  const todayDayName = daysMap[todayId];
  const todayNutrition = nutritionData.esquema_semanal.find(d => d.dia === todayDayName);

  const targets = [
    { id: 'squat', title: 'SQUAT', target: 80, unit: 'kg', subtitle: 'Sin butt wink' },
    { id: 'deadlift', title: 'DEADLIFT', target: 100, unit: 'kg', subtitle: 'Sin straps' },
    { id: 'bench', title: 'BENCH', target: 55, unit: 'kg', subtitle: 'Pausa isométrica' },
    { id: 'pullups', title: 'PULL-UPS', target: 6, unit: 'reps', subtitle: 'Estrictas BW' },
    { id: 'dips', title: 'FONDOS', target: 10, unit: 'reps', subtitle: 'Estrictos BW' },
  ];

  const latestRecord = history.length > 0 ? history[history.length - 1] : { weights: {} };
  // currentWeights ya se declaró arriba

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

      {/* QUICK ROUTINE VIEW (MOBILE OPTIMIZED) */}
      <div className="lg:col-span-3 panel p-4 border-l-4 border-accent-blue bg-dark-900 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 border-b border-dark-700 pb-3">
          <div className="flex items-center gap-3">
            <Dumbbell className="text-accent-blue" size={24} />
            <div>
              <h3 className="text-lg font-bold text-white">Vistazo Rápido - Hoy</h3>
              <p className="text-xs text-gray-400">
                Tu rutina para el gimnasio
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={quickMeso}
              onChange={(e) => setQuickMeso(e.target.value)}
              className="bg-dark-800 border border-dark-700 text-white rounded p-2 text-sm focus:outline-none focus:border-accent-blue"
            >
              <option value="meso1">Meso 1</option>
              <option value="meso2">Meso 2</option>
              <option value="meso3">Meso 3</option>
              <option value="meso4">Meso 4</option>
            </select>
            <select
              value={quickWeek}
              onChange={(e) => setQuickWeek(e.target.value)}
              className="bg-dark-800 border border-dark-700 text-white rounded p-2 text-sm focus:outline-none focus:border-accent-blue"
            >
              <option value="week1">Sem 1</option>
              <option value="week2">Sem 2</option>
              <option value="week3">Sem 3</option>
              <option value="week4">Sem 4 (Deload)</option>
            </select>
          </div>
        </div>

        {todayRoutine ? (
          <div>
            <div className="flex justify-between items-center mb-2">
              <strong className="text-white text-sm">{todayRoutine.dayName}</strong>
              <span className="text-xs font-bold text-accent-green bg-dark-800 px-2 py-1 rounded border border-dark-700">{todayRoutine.split}</span>
            </div>
            <ul className="space-y-2 mt-3">
              {todayRoutine.details.map((ex, idx) => (
                <li key={idx} className="text-sm bg-dark-800 p-3 rounded flex flex-col gap-1 border border-dark-700">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{ex.type}</span>
                  <span className="text-gray-200 whitespace-pre-line">{ex.desc}</span>
                </li>
              ))}
            </ul>

            {quickWeek === 'week4' && (
              <div className="mt-4 bg-accent-purple/10 border-l-4 border-accent-purple p-3 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="text-accent-purple" size={16} />
                  <span className="text-xs font-bold text-accent-purple uppercase tracking-wider">Ajustes Clínicos - Descarga Metabólica</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                  <li><strong className="text-white">Pre-Entreno:</strong> Elimina dátiles y miel. Solo Café negro + Creatina (10g) + puñado de frambuesas.</li>
                  <li><strong className="text-white">Comidas Carbo-Proteicas:</strong> Reducción del 30% en almidones. Arroz/Fideos/Quinoa a 40g (en crudo) o Papa/Camote a 100g (en crudo).</li>
                </ul>
              </div>
            )}

            {todayNutrition && (
              <div className="mt-4 pt-4 border-t border-dark-700 flex flex-col md:flex-row gap-4">
                <div className={`flex-1 bg-dark-800 p-3 rounded border-l-2 ${todayNutrition.almuerzo.tipo.includes('Carbo') ? 'border-orange-400' : 'border-accent-purple'}`}>
                  <span className="text-[10px] text-gray-400 font-bold block mb-1">ALMUERZO</span>
                  <span className={`text-sm font-bold ${todayNutrition.almuerzo.tipo.includes('Carbo') ? 'text-orange-400' : 'text-accent-purple'}`}>{todayNutrition.almuerzo.tipo}</span>
                  {todayNutrition.almuerzo.desc && <p className="text-xs text-gray-400 mt-1 leading-relaxed">{todayNutrition.almuerzo.desc}</p>}
                </div>
                <div className={`flex-1 bg-dark-800 p-3 rounded border-l-2 ${todayNutrition.cena.tipo.includes('Carbo') ? 'border-orange-400' : 'border-accent-purple'}`}>
                  <span className="text-[10px] text-gray-400 font-bold block mb-1">CENA</span>
                  <span className={`text-sm font-bold ${todayNutrition.cena.tipo.includes('Carbo') ? 'text-orange-400' : 'text-accent-purple'}`}>{todayNutrition.cena.tipo}</span>
                  {todayNutrition.cena.desc && <p className="text-xs text-gray-400 mt-1 leading-relaxed">{todayNutrition.cena.desc}</p>}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">No hay rutina asignada para hoy.</p>
        )}
      </div>

      {/* OBJETIVOS Y GRAFICA */}
      <section className="panel p-6 lg:col-span-2 flex flex-col hover:border-accent-green transition-colors">
        <div className="flex justify-between items-center mb-4 border-b border-dark-700 pb-2">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="text-accent-green" size={24} /> Historial Evolutivo vs Metas
          </h2>
        </div>

        {/* GRAPHIC */}
        <div className="hidden md:block w-full h-64 mb-6">
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
                  <div className={`h-1 rounded-full ${isCompleted ? 'bg-accent-green' : 'bg-accent-blue'}`} style={{ width: `${percent}%` }}></div>
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
            <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full bg-dark-900 border border-dark-700 text-white rounded p-2 text-sm focus:border-accent-blue outline-none" />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Nota (Ejem. Mesociclo 4)</label>
            <input type="text" value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} className="w-full bg-dark-900 border border-dark-700 text-white rounded p-2 text-sm focus:border-accent-blue outline-none" placeholder="Ej: Fin Mesociclo 4" />
          </div>

          <div className="pt-2 border-t border-dark-700">
            <div className="grid grid-cols-2 gap-3 mt-2">
              {targets.map(t => (
                <div key={t.id}>
                  <label className="text-[10px] text-gray-400 block mb-1 font-mono">{t.title} ({t.unit})</label>
                  <input type="number" placeholder={currentWeights[t.id] || "0"} value={form[t.id]} onChange={e => setForm({ ...form, [t.id]: e.target.value })} className="w-full bg-dark-900 border border-dark-700 text-white rounded py-1 px-2 text-sm focus:border-accent-blue outline-none" />
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
          <ClipboardList className="text-purple-400" size={24} /> Justificación Clínica y Metas
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
