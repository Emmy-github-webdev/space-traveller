import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Mission from './components/Mission'
import Rockets from './components/Rockets'
import Profile from './components/Profile'; 



function App() {
  return (
    <div className="App">
    <section >
    <nav >
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/Mission">Mission</NavLink>
    <NavLink to="/Profile">My Profile</NavLink>
     
     
    
    </nav>

    <Routes>
      <Route exact path="/Mission" element={<Mission />} />
      <Route exact path="/" element={<Rockets />} />
      <Route exact path="/Profile" element={<Profile/>}></Route>

     

    </Routes>

  </section>

    </div>
  );
}

export default App;
