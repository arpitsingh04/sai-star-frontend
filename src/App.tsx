import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import ServicesSection from './Pages/ServicesSection/ServicesSection';
import MyTeam from './Pages/MyTeam/MyTeam';
import WhyWe from './Pages/WhyWe/WhyWe';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ContactUs from './Pages/Contact/Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <Header 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
        closeMenu={closeMenu}
      />
    <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<MyTeam />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/why-we" element={<WhyWe />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
