import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; 


const isAuthenticated = () => {
    const password = localStorage.getItem("password")
    return password === "password"
  };
  
const isAdmin = () => {
    const role = localStorage.getItem("role"); 
    return role === "admin"; 
  };
  

export const PrivateRoutes = () => {
    return isAuthenticated() && isAdmin() ? <Outlet/> : <Navigate to='/' />;
  };
  
export default PrivateRoutes;
    
