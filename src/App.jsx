import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import logo from "./assets/logo_transparent.png";
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';


function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={<Home logo={logo} />}
      />

      <Route 
        path='/Login'
        element={<Login />}
      />

      <Route 
        path='/Dashboard'
        element={<Dashboard />}
      />

      <Route 
        path='/Products'
        element={<Products />}
      />
    </Routes>
  )
}

export default App;