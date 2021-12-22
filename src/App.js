import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Mission from './components/Mission';
import Rockets from './components/rockets/Rockets';
/* import Logo from './images/planet.png'; */
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav className="nav-container">
          <div className="nav-header">
            <img src={Logo} alt="Logo" />
            <h1>Space Traveller Hub</h1>
          </div>
          <div className="nav-items">
            <NavLink to="/">Rockets</NavLink>
            <NavLink to="/Mission">Mission</NavLink>
            <NavLink to="/Profile">My Profile</NavLink>
          </div>
        </nav> */}

        <main>
          <Routes>
            <Route exact path="/Mission" element={<Mission />} />
            <Route exact path="/" element={<Rockets />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </main>

      </Router>

    </div>
  );
}

export default App;
