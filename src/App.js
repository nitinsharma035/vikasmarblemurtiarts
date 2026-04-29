import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from './components/Chatbot'; 

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsPage from "./pages/TermsPage";
import LocationDetail from "./pages/LocationDetail";
import LocationHub from './pages/LocationHub'; 

const AppContent = () => {
  const location = useLocation();

  // Note: Humne loading state aur useEffect hatadi hai jo har route par site hide kar rahi thi.

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* flex-grow taaki footer hamesha bottom mein rahe agar content kam ho */}
      <main className="flex-grow">
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
      </main>

      <Chatbot />
      <Footer />
    </div>
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