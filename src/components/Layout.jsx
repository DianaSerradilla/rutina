import { Outlet, NavLink } from 'react-router-dom';
import { Activity, LayoutDashboard, GitMerge, Database, CalendarDays, Utensils } from 'lucide-react';
export default function Layout() {
  return (
    <div className="font-sans antialiased p-4 md:p-8 min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER / PRESENTACIÓN */}
        <header className="panel p-6 border-l-4 border-accent-blue relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="text-accent-blue" size={32} />
              Plan de Entrenamiento Híbrido
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Arquitectura de entrenamiento diseñada bajo un enfoque de biomecánica clínica y optimización del rendimiento
              dual (Gym/Cali). Este sistema no busca la fatiga aleatoria, sino la adaptación neuromuscular controlada. La
              estructura integra fuerza absoluta, control del Centro de Masa (COM) y recomposición corporal progresiva. El
              plan respeta el ciclo biológico del atleta, adaptando la carga a las fases del ciclo menstrual (descarga
              programada) para asegurar la integridad metabólica y articular.
            </p>
          </div>
          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 opacity-5">
            <Activity size={200} />
          </div>
        </header>

        {/* NAVEGACIÓN */}
        <nav className="panel p-2 flex gap-2 flex-wrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors ${isActive ? 'bg-dark-700 text-accent-blue font-semibold' : 'text-gray-400 hover:text-white hover:bg-dark-900'}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/estructura"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors ${isActive ? 'bg-dark-700 text-yellow-500 font-semibold' : 'text-gray-400 hover:text-white hover:bg-dark-900'}`
            }
          >
            <CalendarDays size={18} />
            Estructura Semanal
          </NavLink>

          <NavLink
            to="/split"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors ${isActive ? 'bg-dark-700 text-accent-green font-semibold' : 'text-gray-400 hover:text-white hover:bg-dark-900'}`
            }
          >
            <GitMerge size={18} />
            Rutina & Split
          </NavLink>

          <NavLink
            to="/databases"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors ${isActive ? 'bg-dark-700 text-accent-purple font-semibold' : 'text-gray-400 hover:text-white hover:bg-dark-900'}`
            }
          >
            <Database size={18} />
            Bases de Datos
          </NavLink>

          <NavLink
            to="/alimentacion"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded transition-colors ${isActive ? 'bg-dark-700 text-red-400 font-semibold' : 'text-gray-400 hover:text-white hover:bg-dark-900'}`
            }
          >
            <Utensils size={18} />
            Alimentación
          </NavLink>

          {/* <NavLink 
            to="/hevy" 
            className={({ isActive }) => 
              `flex items-center gap-2 px-4 py-2 rounded transition-colors ${isActive ? 'bg-dark-700 text-orange-500 font-semibold' : 'text-gray-400 hover:text-white hover:bg-dark-900'}`
            }
          >
            <Activity size={18} className="text-orange-500" />
            Hevy Analytics
          </NavLink> */}
        </nav>

        {/* CONTENIDO DE CARGA (RUTAS) */}
        <main>
          <Outlet />
        </main>

      </div>
    </div>
  );
}
