import React from 'react';
import './App.css';
import { Login } from './components/Registration';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <div className='App-main'>
      <Login />
      </div>
    </div>
  );
}

export default App;