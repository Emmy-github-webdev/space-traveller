import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Mission from './components/Mission';
import Rockets from './components/rockets/Rockets';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
      <Router>
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
