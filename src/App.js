import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Spacer from './components/Spacer';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
        <Spacer />
        <Body />
        <Footer />
    </Router>
  );
}

export default App;
