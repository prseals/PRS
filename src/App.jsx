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
import SaleInvoices from './pages/SaleInvoices';
import PurchaseInvoices from './pages/PurchaseInvoices';
import Enquiries from './pages/Enquiries';
import Orders from './pages/Orders';
import Profiles from './pages/Profiles';
import BusinessProfile from './pages/BusinessProfile';
import ProductDetails from './pages/ProductDetails';
import VendorDetails from './pages/VendorDetails';
import CustomerDetails from './pages/CustomerDetails';
import EmployeeDetails from './pages/EmployeeDetails';
import MachineDetails from './pages/MachineDetails';
import DieDetails from './pages/DieDetails';
import EnquiryDetails from './pages/EnquiryDetails';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import VendorAdd from './pages/VendorAdd';
import VendorEdit from './pages/VendorEdit';
import EmployeeAdd from './pages/EmployeeAdd';
import CustomerAdd from './pages/CustomerAdd';
import MachineAdd from './pages/MachineAdd';
import DieAdd from './pages/DieAdd';
import CustomerEdit from './pages/CustomerEdit';
import EmployeeEdit from './pages/EmployeeEdit';
import MachineEdit from './pages/MachineEdit';
import DieEdit from './pages/DieEdit';
import SaleInvoiceAdd from './pages/SaleInvoiceAdd';
import SaleInvoiceEdit from './pages/SaleInvoiceEdit';
import Reports from './pages/Reports';


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
        path='/Products/Add'
        element={<ProductAdd />}
      />

      <Route 
        path="/Products/:id"
        element={<ProductDetails />}
      />

      <Route 
        path='/Products/Edit/:id'
        element={<ProductEdit />}
      />

      <Route 
        path='/Vendors'
        element={<Vendors />}
      />

      <Route 
        path='/Vendors/:id'
        element={<VendorDetails />}
      />

      <Route 
        path='/Vendors/Edit/:id'
        element={<VendorEdit />}
      />

      <Route 
        path='Vendors/Add'
        element={<VendorAdd />}
      />

      <Route 
        path='/Customers'
        element={<Customers />}
      />

      <Route 
        path="/Customers/Add"
        element={<CustomerAdd />}
      />

      <Route 
        path='/Customers/:id'
        element={<CustomerDetails />}
      />

      <Route 
        path='/Customers/Edit/:id'
        element={<CustomerEdit />}
      />

      <Route 
        path='/Employees'
        element={<Employees />}
      />

      <Route 
        path='/Employees/Add'
        element={<EmployeeAdd />}
      />

      <Route 
        path='/Employees/:id'
        element={<EmployeeDetails />}
      />

      <Route 
        path='/Employees/Edit/:id'
        element={<EmployeeEdit />}
      />

      <Route 
        path="/Dies"
        element={<Dies />}
      />

      <Route 
        path='/Dies/Add'
        element={<DieAdd />}
      />

      <Route 
        path='/Dies/:id'
        element={<DieDetails />}
      />

      <Route 
        path='/Dies/Edit/:id'
        element={<DieEdit />}
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
        path='/Machines/Add'
        element={<MachineAdd />}
      />

      <Route 
        path='/Machines/:id'
        element={<MachineDetails />}
      />

      <Route 
        path='/Machines/Edit/:id'
        element={<MachineEdit />}
      />

      <Route 
        path='/SalesInvoices'
        element={<SaleInvoices />}
      />

      <Route 
        path='/SalesInvoices/Add'
        element={<SaleInvoiceAdd />}
      />

      <Route 
        path='/SalesInvoices/Edit/:id'
        element={<SaleInvoiceEdit />}
      />

      <Route 
        path="/PurchaseInvoices"
        element={<PurchaseInvoices />}
      />

      <Route 
        path='/Enquiries'
        element={<Enquiries />}
      />

      <Route 
        path='/Enquiries/:id'
        element={<EnquiryDetails />}
      />

      <Route 
        path='/Orders'
        element={<Orders />}
      />

      <Route 
        path='/Profiles'
        element={<Profiles />}
      />

      <Route 
        path='/Businessprofile'
        element={<BusinessProfile />}
      />

      <Route 
        path='/Reports'
        element={<Reports />}
      />
    </Routes>
  )
}

export default App;