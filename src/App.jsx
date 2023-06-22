import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

export const App = () => {
  return (
    // TheNavigation component
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
    </Routes>
    // TheFooter component
  );
};
