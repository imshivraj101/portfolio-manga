import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Ideas from './components/Ideas';
import Navbar from './components/Navbar';
import Outlooks from './components/Outlooks';
import SideQuests from './components/SideQuests';
import Traits from './components/Traits';
import Contact from './components/Contact';
import OutlookPage from './pages/OUTLOOK_PAGE';
import IdeasPage from './pages/IdeasPage';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Traits />
      <Ideas onlyRecent={true} />
      <SideQuests />
      <Outlooks />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outlook" element={<OutlookPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
