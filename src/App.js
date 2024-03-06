import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Apod from './Screens/Apod';
import NeoWs from './Screens/NeoWs';
import CmeData from './Screens/CmeData';
import EarthImagery from './Screens/EarthImagery';
import NaturalImages from './Screens/NaturalImages';
import Home from './Screens/Home';
import './App.css'

function App() {
  return (
    
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/neows" element={<NeoWs />} />
          <Route path="/cmedata" element={<CmeData />} />
          <Route path="/earthimagery" element={<EarthImagery />} />

        </Routes>
        {/* <Footer /> */}
        </div>
      </Router>
  
  );
}

export default App;
