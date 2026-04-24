import { useState, useRef, useEffect } from 'react';
import Papa from 'papaparse';
import { supabase } from '../lib/supabase';
import { Flame, Calendar, BarChart3, Activity, UploadCloud, FileSpreadsheet, Loader2 } from 'lucide-react';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function HevyStats() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // 1. Cargar datos desde Supabase al iniciar
  useEffect(() => {
    loadDataFromSupabase();
  }, []);

  const loadDataFromSupabase = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('hevy_history')
        .select('*')
        .order('start_time', { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        const groupedData = processRawData(data);
        setWorkouts(groupedData);
      } else {
        setWorkouts([]);
      }
    } catch (err) {
      console.error("Error cargando historial de Hevy:", err);
      setError("Error al conectar con la base de datos de historial.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Manejar subida de archivo CSV
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          // Usaremos un mapa para asignar un set_index único a cada serie del mismo ejercicio
          // en caso de que el CSV no lo traiga o traiga duplicados.
          const setIndexMap = new Map();

          // Preparamos los datos crudos para Supabase
          const rowsToInsert = results.data
            .filter(row => row.start_time && (row.exercise_title || row.exercise_name)) // Validar filas
            .map(row => {
              const exerciseTitle = row.exercise_title || row.exercise_name;
              const key = `${row.start_time}_${exerciseTitle}`;
              const currentSetIndex = setIndexMap.get(key) || 0;
              setIndexMap.set(key, currentSetIndex + 1);

              return {
                start_time: new Date(row.start_time).toISOString(),
                end_time: row.end_time ? new Date(row.end_time).toISOString() : null,
                workout_name: row.workout_name || row.name || row.title || 'Entrenamiento',
                exercise_title: exerciseTitle,
                muscle_group: inferMuscleGroup(exerciseTitle),
                set_index: currentSetIndex,
                weight_kg: parseFloat(row.weight_kg) || 0,
                reps: parseInt(row.reps) || 0,
                rpe: parseFloat(row.rpe) || null
              };
            });

          if (rowsToInsert.length === 0) {
             throw new Error("No se encontraron registros válidos en el CSV.");
          }

          // Insertamos en lotes de 500 para no saturar la petición si hay miles de series
          const batchSize = 500;
          for (let i = 0; i < rowsToInsert.length; i += batchSize) {
            const batch = rowsToInsert.slice(i, i + batchSize);
            const { error: upsertError } = await supabase
              .from('hevy_history')
              .upsert(batch, { onConflict: 'start_time, exercise_title, set_index' });
            
            if (upsertError) throw upsertError;
          }

          // Una vez guardado en la nube, recargamos los datos para armar las gráficas
          await loadDataFromSupabase();

        } catch (err) {
          console.error(err);
          setError("Error al procesar y guardar el CSV: " + err.message);
        } finally {
          setUploading(false);
          // Limpiamos el input para permitir subir el mismo archivo de nuevo si quisiera
          if (fileInputRef.current) fileInputRef.current.value = '';
        }
      },
      error: (error) => {
        setError("Error al leer el archivo: " + error.message);
        setUploading(false);
      }
    });
  };

  // 3. Convertir filas crudas en el formato agrupado que esperan las gráficas
  const processRawData = (rows) => {
    const workoutsMap = new Map();

    rows.forEach(row => {
      // Usamos el start_time como identificador único del workout
      const workoutId = row.start_time; 
      if (!workoutId) return;

      if (!workoutsMap.has(workoutId)) {
        workoutsMap.set(workoutId, {
          id: workoutId,
          start_time: row.start_time,
          end_time: row.end_time,
          name: row.workout_name,
          exercises: []
        });
      }

      const workout = workoutsMap.get(workoutId);
      const exerciseTitle = row.exercise_title;
      
      // Buscar si el ejercicio ya está en este workout
      let exercise = workout.exercises.find(e => e.exercise.title === exerciseTitle);
      if (!exercise) {
        exercise = {
          exercise: { 
            title: exerciseTitle, 
            muscle_group: row.muscle_group 
          },
          sets: []
        };
        workout.exercises.push(exercise);
      }

      // Añadir la serie
      exercise.sets.push({
        weight_kg: row.weight_kg,
        reps: row.reps,
        rpe: row.rpe,
      });
    });

    // Convertir a array y ordenar por fecha descendente
    return Array.from(workoutsMap.values()).sort((a, b) => new Date(b.start_time) - new Date(a.start_time));
  };

  // Función auxiliar para adivinar el grupo muscular (si Hevy no lo trae claro)
  const inferMuscleGroup = (name) => {
    if (!name) return 'Otros';
    const n = name.toLowerCase();
    if (n.includes('squat') || n.includes('leg') || n.includes('calf') || n.includes('deadlift') || n.includes('sentadilla') || n.includes('peso muerto')) return 'Piernas';
    if (n.includes('bench') || n.includes('chest') || n.includes('fly') || n.includes('push') || n.includes('pecho')) return 'Pecho';
    if (n.includes('row') || n.includes('pull') || n.includes('back') || n.includes('lat') || n.includes('remo')) return 'Espalda';
    if (n.includes('curl') || n.includes('bicep')) return 'Bíceps';
    if (n.includes('tricep') || n.includes('extension') || n.includes('dip')) return 'Tríceps';
    if (n.includes('press') || n.includes('lateral') || n.includes('shoulder') || n.includes('hombro')) return 'Hombros';
    if (n.includes('crunch') || n.includes('plank') || n.includes('core') || n.includes('abs')) return 'Core';
    return 'Otros';
  };

  // --- RENDERIZADOS ---
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-accent-blue">
        <Loader2 className="animate-spin mb-4" size={48} />
        <p className="text-gray-400 font-mono">Cargando base de datos histórica...</p>
      </div>
    );
  }

  // PANTALLA INICIAL VACÍA (Aún no hay datos en Supabase)
  if (workouts.length === 0 && !uploading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in duration-500">
        <div className="bg-dark-900 border border-dark-700 p-10 rounded-2xl max-w-lg w-full text-center shadow-xl">
          <div className="bg-dark-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileSpreadsheet size={40} className="text-accent-blue" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Construye tu Analítica</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Actualmente tu base de datos histórica está vacía. Sube tu archivo `.csv` exportado desde Hevy para poblarla.
          </p>
          
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
          />
          
          <button 
            onClick={() => fileInputRef.current.click()}
            className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <UploadCloud size={20} />
            Subir primer CSV de Hevy
          </button>

          {error && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }

  // --- PREPARACIÓN DE DATOS PARA GRÁFICAS ---
  // 1. Calendario de Consistencia
  const workoutsByMonth = workouts.reduce((acc, w) => {
    const date = new Date(w.start_time);
    const month = date.toLocaleString('es-ES', { month: 'short' });
    const year = date.getFullYear();
    const label = `${month} ${year}`;
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(workoutsByMonth).slice(0, 12).reverse();
  const dataCounts = labels.map(l => workoutsByMonth[l]);

  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Entrenamientos por Mes',
        data: dataCounts,
        backgroundColor: 'rgba(56, 189, 248, 0.5)',
        borderColor: 'rgb(56, 189, 248)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  // 2. Volumen por Grupo Muscular
  const volumeByMuscle = {};
  const setsByMuscle = {}; // Para la gráfica de Radar

  workouts.forEach(w => {
    w.exercises.forEach(ex => {
      const muscle = ex.exercise.muscle_group || 'Otros';
      const sets = ex.sets || [];
      
      const volume = sets.reduce((sum, set) => sum + ((set.weight_kg || 0) * (set.reps || 0)), 0);
      volumeByMuscle[muscle] = (volumeByMuscle[muscle] || 0) + volume;
      
      // Contar cantidad de series (ignorando series vacías o de 0 reps si quisieramos, pero sumemos todo)
      setsByMuscle[muscle] = (setsByMuscle[muscle] || 0) + sets.length;
    });
  });

  const doughnutData = {
    labels: Object.keys(volumeByMuscle),
    datasets: [
      {
        label: 'Volumen (kg)',
        data: Object.values(volumeByMuscle),
        backgroundColor: [
          '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#6366f1', '#ec4899'
        ],
        borderWidth: 0,
      },
    ],
  };

  const radarData = {
    labels: Object.keys(setsByMuscle),
    datasets: [
      {
        label: 'Series Totales',
        data: Object.values(setsByMuscle),
        backgroundColor: 'rgba(16, 185, 129, 0.2)', // accent-green con opacidad
        borderColor: '#10b981',
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#10b981',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header className="panel p-6 border-l-4 border-accent-blue bg-dark-900 shadow-lg flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Flame className="text-accent-blue" size={32} />
            Hevy Analytics
          </h1>
          <p className="text-gray-400 text-sm">
            Tus datos persistidos y a salvo en Supabase.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-3xl font-bold text-white">{workouts.length}</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest font-mono">Workouts Registrados</div>
          </div>
          
          <input 
            type="file" 
            accept=".csv" 
            className="hidden" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
          />
          <button 
            onClick={() => fileInputRef.current.click()}
            disabled={uploading}
            className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-colors border ${
              uploading 
                ? 'bg-dark-700 text-gray-400 border-dark-600 cursor-not-allowed' 
                : 'bg-dark-800 hover:bg-dark-700 text-white border-dark-600'
            }`}
          >
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <UploadCloud size={16} className="text-accent-blue" />}
            {uploading ? 'Sincronizando...' : 'Actualizar CSV'}
          </button>
        </div>
      </header>

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GRÁFICA 1: Frecuencia */}
        <section className="panel p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
            <Calendar className="text-accent-blue" size={24} /> Frecuencia de Entrenamiento
          </h2>
          <div className="w-full h-64">
            <Bar 
              data={barChartData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { 
                  y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af', stepSize: 1 } },
                  x: { grid: { display: false }, ticks: { color: '#9ca3af' } }
                }
              }} 
            />
          </div>
        </section>

        {/* GRÁFICA 2: Balance Muscular (Radar) */}
        <section className="panel p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
            <Activity className="text-accent-green" size={24} /> Balance Muscular (Series)
          </h2>
          <div className="w-full h-64 flex justify-center">
            {Object.keys(setsByMuscle).length > 0 ? (
              <Radar 
                data={radarData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    r: {
                      angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                      grid: { color: 'rgba(255, 255, 255, 0.1)' },
                      pointLabels: { color: '#9ca3af', font: { size: 12 } },
                      ticks: { display: false }
                    }
                  },
                  plugins: { legend: { display: false } },
                }} 
              />
            ) : (
              <p className="text-gray-500 flex items-center">No hay datos disponibles.</p>
            )}
          </div>
        </section>

        {/* GRÁFICA 3: Distribución de Volumen */}
        <section className="panel p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
            <BarChart3 className="text-accent-purple" size={24} /> Volumen Total (Kg)
          </h2>
          <div className="w-full h-64 flex justify-center">
            {Object.keys(volumeByMuscle).length > 0 ? (
              <Doughnut 
                data={doughnutData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { 
                    legend: { position: 'right', labels: { color: '#9ca3af', boxWidth: 12 } } 
                  },
                }} 
              />
            ) : (
              <p className="text-gray-500 flex items-center">No hay datos de volumen disponibles.</p>
            )}
          </div>
        </section>

        {/* LISTA DE ÚLTIMOS ENTRENAMIENTOS */}
        <section className="panel p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-dark-700 pb-2">
            <Activity className="text-accent-green" size={24} /> Historial General
          </h2>
          <div className="overflow-x-auto max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 uppercase bg-dark-800/50 sticky top-0 z-10 backdrop-blur-sm">
                <tr>
                  <th className="px-4 py-3 rounded-tl">Fecha</th>
                  <th className="px-4 py-3">Rutina</th>
                  <th className="px-4 py-3">Duración</th>
                  <th className="px-4 py-3 rounded-tr">Volumen Total</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((w, idx) => {
                  const date = new Date(w.start_time).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
                  let durationMins = 0;
                  if (w.start_time && w.end_time) {
                    durationMins = Math.round((new Date(w.end_time) - new Date(w.start_time)) / 60000);
                  }
                  
                  const totalVolume = w.exercises.reduce((sum, ex) => {
                    return sum + ex.sets.reduce((s, set) => s + ((set.weight_kg || 0) * (set.reps || 0)), 0);
                  }, 0);

                  return (
                    <tr key={w.id || idx} className="border-b border-dark-700/50 hover:bg-dark-800/50 transition-colors">
                      <td className="px-4 py-3 font-mono text-gray-300 capitalize">{date}</td>
                      <td className="px-4 py-3 text-white font-medium">{w.name}</td>
                      <td className="px-4 py-3 text-gray-400">{durationMins > 0 ? `${durationMins} min` : '-'}</td>
                      <td className="px-4 py-3 text-accent-green font-mono">{totalVolume.toLocaleString()} kg</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
