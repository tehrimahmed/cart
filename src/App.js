import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from './redux/PrivateRoute'; 
import { Home } from './Pages/Home';
import { CartDetails } from './Pages/CartDetails';
import Login from './Pages/Login';
import AdminItems from './Pages/AdminItems';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/items" element={<Home />} />
      <Route path="/itemdetails" element={<CartDetails />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<AdminItems />} />
      </Route>
    </Routes>
  );
}

export default App;
