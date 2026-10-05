import { NavLink, Route, Routes } from 'react-router-dom';

import ScoreTracker from './pages/ScoreTracker';
import UserDetails from './pages/UserDetails';
import CampusHub from './pages/CampusHub';
import StudyPlanner from './pages/StudyPlanner';

function Navigation() {
  const getLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <div className="brand">
        StudySpace
      </div>

      <div className="nav-links">
        <NavLink to="/" className={getLinkClass}>
          Score
        </NavLink>

        <NavLink to="/details" className={getLinkClass}>
          Details
        </NavLink>

        <NavLink to="/campus" className={getLinkClass}>
          Campus
        </NavLink>

        <NavLink to="/planner" className={getLinkClass}>
          Planner
        </NavLink>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navigation />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<ScoreTracker />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/campus/*" element={<CampusHub />} />
          <Route path="/planner" element={<StudyPlanner />} />
        </Routes>
      </main>
    </>
  );
}

export default App;