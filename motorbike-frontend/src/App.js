import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Registration';
import { Nav } from './components/Nav';
import { Home } from './components/home';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <>
          <Route path='/Registration' element={<Login />} />
          <Route path='/Home' element={<Home />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;