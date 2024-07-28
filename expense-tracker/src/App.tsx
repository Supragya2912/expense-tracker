import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
      <Route path="/" element={<Dashboard />} />

     </Routes>
    </div>
  );
}

export default App;
