import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
// import axios from 'axios';

const ProtectedRoute = ({ children }) => {

  const isUserLoggedIn = localStorage.getItem('authenticated');
  
  return isUserLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute