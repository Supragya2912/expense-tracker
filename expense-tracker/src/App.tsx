import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Savings from './pages/Savings';

function App() {
  return (
    <div className="App">
      
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
      <Route path="/" element={<Dashboard />} />

      <Route path="/transactions" element={<Transactions/>} />
      <Route path="/savings" element={<Savings/>}/>

     </Routes>
    </div>
  );
}

export default App;
