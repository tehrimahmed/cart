import React from 'react';
import { Navigate } from 'react-router-dom'; 


const isAuthenticated = () => {
    const password = localStorage.getItem('password'); 
    return password == 'password'; 
  };
  
const isAdmin = () => {
    const role = localStorage.getItem('role'); 
    return role === 'admin'; 
  };
  

export const PrivateRoutes = () => {
    return isAuthenticated() && isAdmin() ? <Navigate to='/admin' /> : <Navigate to='/' />;
  };
  
export default PrivateRoutes;
    