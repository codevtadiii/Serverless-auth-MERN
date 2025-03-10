import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import Register from './pages/register';
import Navbar from './components/Navbar';
import RequestForm from './pages/RequestForm';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); 

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
           <Route path="/" element={<Home />} />
           <Route path="/request-form" element={<RequestForm />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
