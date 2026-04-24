import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EstructuraSemanal from './pages/EstructuraSemanal';
import TrainingSplit from './pages/TrainingSplit';
import Databases from './pages/Databases';

import HevyStats from './pages/HevyStats';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="estructura" element={<EstructuraSemanal />} />
          <Route path="split" element={<TrainingSplit />} />
          <Route path="databases" element={<Databases />} />
          <Route path="hevy" element={<HevyStats />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
