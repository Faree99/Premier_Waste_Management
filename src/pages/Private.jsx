
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
 
import Header from '../components/navbar/Header';
import HeroSection from '../components/private/HeroSection';
import HowItWorks from '../components/private/HowItWorks';
import Services from "../components/private/Services";
import Testimonials from "../components/private/Testimonials";
import Login from '../components/modal/Login';
import Dashboard from '../components/private/Dashboard';
import LocateCompany from '../components/private/LocateCompany';



const Private = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  const handleLogin = () => {
    
    setIsAuthenticated(true); 
  };
  
  return (
   <>
   
    <Header />
    <Routes>
        
        <Route
            path="/"
            element={
                !isAuthenticated ? (
                    <>
                        <HeroSection />
                        <HowItWorks />
                        <Services />
                        <Testimonials />
                    </>
                ) : (
                    <Navigate to="/dashboard" />
                )
            }
        />
        <Route
            path="/login"
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />}
        />
        <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        {/* <Route
            path="/locate-company"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/locate-company" />}
        /> */}
    </Routes>

</>
  );
};

export default Private;

