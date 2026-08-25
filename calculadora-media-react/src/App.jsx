import {
  Routes,
  Route
} from 'react-router';

import Calculadora from './pages/Calculadora';
import Relatorio from './pages/Relatorio';

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Calculadora />}
      />

      <Route
        path="/relatorio"
        element={<Relatorio />}
      />

    </Routes>
  );
}