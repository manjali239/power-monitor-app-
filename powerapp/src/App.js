// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import TestFirebaseConnection from './components/TestFirebaseConnection'; // Import the component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test-firebase" element={<TestFirebaseConnection />} /> {/* Add this route if you want to display it */}
      </Routes>
    </Router>
  );
}

export default App;
