import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// --- SARE COMPONENTS KE PATHS CHECK KAREIN ---
// Agar aapki files different folders mein hain, toh niche diye gaye paths badlein
import ScrollToTop from "./components/ScrollToTop"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';

// --- SARE PAGES KE PATHS CHECK KAREIN ---
import Home from "./pages/Home";
import About from "./pages/About";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsPage from "./pages/TermsPage";
import LocationDetail from "./pages/LocationDetail";
import LocationHub from './pages/LocationHub'; 

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key={location.pathname} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-gray-50 transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/locations" element={<LocationHub />} />
          <Route path="/location/:city" element={<LocationDetail />} />
        </Routes> 

        <Chatbot />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <Router> 
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;