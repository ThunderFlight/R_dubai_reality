import { Route, Routes } from 'react-router-dom';
import { TheNavigation } from './components/TheNavigation';
import { Home } from './pages';

export const App = () => {
  return (
    <>
      <TheNavigation />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
      {/* TheFooter */}
    </>
  );
};
