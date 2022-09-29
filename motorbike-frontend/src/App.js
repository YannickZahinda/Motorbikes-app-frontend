import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/User_registration/Registration';
// import { Nav } from './components/navigation/Nav';
import { Home } from './components/home/home';
import { Sign_up } from './components/User_registration/Sign_up';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/Registration' element={<Login />}/>
          <Route path='/Sign_up' element={<Sign_up />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;