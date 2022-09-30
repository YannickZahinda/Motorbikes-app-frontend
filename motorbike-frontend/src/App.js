import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/User_registration/Registration';
// import { Nav } from './components/navigation/Nav';
import { Home } from './components/home/home';
import { SignUp } from './components/User_registration/SignUp';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/Registration' element={<Login />}/>
          <Route path='/Sign_up' element={<SignUp />} />
          <Route path='/' element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;