import { NavLink, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <div className="portal-content">
      <h2>Welcome to Campus Hub</h2>

      <p>
        Campus Hub provides useful information for students.
      </p>
    </div>
  );
}

function Members() {
  const members = [
    'Aarav Sharma',
    'Riya Patel',
    'Kabir Singh',
    'Ananya Verma'
  ];

  return (
    <div className="portal-content">
      <h2>Campus Members</h2>

      <ul className="member-list">
        {members.map((member, index) => (
          <li key={index}>
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutCampus() {
  return (
    <div className="portal-content">
      <h2>About Campus Hub</h2>

      <p>
        Campus Hub is a small React application created
        for practising routing and components.
      </p>
    </div>
  );
}

function CampusHub() {
  const linkStyle = ({ isActive }) =>
    isActive ? 'sub-link selected' : 'sub-link';

  return (
    <section className="card">
      <h1>Campus Hub</h1>

      <div className="sub-navigation">
        <NavLink
          to="/campus"
          end
          className={linkStyle}
        >
          Home
        </NavLink>

        <NavLink
          to="/campus/members"
          className={linkStyle}
        >
          Members
        </NavLink>

        <NavLink
          to="/campus/about"
          className={linkStyle}
        >
          About
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<AboutCampus />} />
      </Routes>
    </section>
  );
}

export default CampusHub;