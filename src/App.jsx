// import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Public from './pages/Public'; 
import Private from './pages/Private';
import Aboutus from './pages/Aboutus';
import Footer from "./components/footer/Footer";
import RegistrationForm from './pages/RegistrationForm';
import Dashboard from './components/private/Dashboard';
import LocateCompany from './components/private/LocateCompany';
import RequestWastePickup from './components/private/RequestWastePickup';
import Profile from './components/private/Profile';
import PaymentHistory from './components/private/PaymentHistory';
import MyServices from './components/private/MyServices';
import ManageAccount from './components/private/ManageAccount';
import WasteDisposalGuidelines from './components/about/WasteDisposalGuidelines';
import ContactUs from './pages/ContactUs';
import News from './pages/News';
import Services from './pages/Services';




function App() {

  return (
    <>        
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/aboutus" element={<Aboutus />} /> 
                <Route path="/public-sector" element={<Public />} /> 
                <Route path="/private-sector" element={<Private />} /> 
                <Route path="/guidelines" element={<WasteDisposalGuidelines />} /> 
                <Route path="/contactus" element={<ContactUs />} /> 
                <Route path="/news" element={<News />} /> 
                <Route path="/services" element={<Services />} /> 



                
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/locatecompany" element={<LocateCompany />} />
                <Route path="/requestpickup" element={<RequestWastePickup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/payment-history" element={<PaymentHistory />} />
                <Route path="/my-services" element={<MyServices />} />
                <Route path="/manage-account" element={<ManageAccount />} />








                
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default App
