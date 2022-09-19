import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import TicketPage from './pages/Tickets';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticketpage" element={<TicketPage />} />
        {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
      </Routes>

    </div>
  );
}

export default App;



