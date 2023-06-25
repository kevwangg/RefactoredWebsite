import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses'
import Connect from './pages/Connect'
import Navbar from './components/Navbar';
import App from './App'

function Routess() {
  return (

    <Router>
          <Navbar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/connect" element={<Connect/>} />
      </Routes>


    </Router>
  );
}

export default Routess;