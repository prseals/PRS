import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import logo from "./assets/logo_transparent.png";
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Vendors from './pages/Vendors';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Dies from './pages/Dies';
import Inventories from './pages/Inventories';
import Machines from './pages/Machines';
import SellInvoices from './pages/SellInvoices';
import Purchaseinvoices from './pages/Purchaseinvoices';
import Enquiries from './pages/Enquiries';
import Orders from './pages/Orders';
import Profiles from './pages/Profiles';


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

      <Route 
        path='/Vendors'
        element={<Vendors />}
      />

      <Route 
        path='/Customers'
        element={<Customers />}
      />

      <Route 
        path='/Employees'
        element={<Employees />}
      />

      <Route 
        path="/Dies"
        element={<Dies />}
      />

      <Route 
        path='/Inventories'
        element={<Inventories />}
      />

      <Route 
        path='/Machines'
        element={<Machines />}
      />

      <Route 
        path='/Sellinvoices'
        element={<SellInvoices />}
      />

      <Route 
        path="/Purchaseinvoices"
        element={<Purchaseinvoices />}
      />

      <Route 
        path='/Enquiries'
        element={<Enquiries />}
      />

      <Route 
        path='/Orders'
        element={<Orders />}
      />

      <Route 
        path='/Profiles'
        element={<Profiles />}
      />
    </Routes>
  )
}

export default App;