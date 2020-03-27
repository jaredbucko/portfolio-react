import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <Body />
        <Footer />
    </Router>
    
  );
}

export default App;
