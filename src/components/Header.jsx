import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    // { name: 'Our Locations', path: '/locations' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white text-[#2a145b] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-20 relative"> 
          <div className="md:absolute md:left-4 lg:left-8 flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/">
              <img 
                src="/image/logo.jpg" 
                alt="Vikas Marble Art Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150x50?text=Vikas+Marble"; }} 
              />
            </Link>
          </div> 
          <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{ fontFamily: 'Satoshi, sans-serif' }}
                className="relative px-2 py-1 hover:text-[#c02177] transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c02177] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div> 
          <div className="hidden md:absolute md:right-4 lg:right-8 md:block">
            <a href="tel:+919664106898">
              <button className="font-bold bg-[#c02177] hover:bg-[#a01a61] text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-all">
                Call Now
              </button>
            </a>
          </div> 
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="p-2 text-[#c02177]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div> 
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-[60] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      ></div> 
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#2a145b] z-[70] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full text-white">
          <div className="flex justify-between items-center mb-10">
            <img src="/image/logo.jpg" alt="Logo" className="h-10 w-auto brightness-0 invert" />
            <button onClick={() => setIsOpen(false)}>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> 
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Satoshi, sans-serif' }}
                className="text-2xl font-normal hover:text-pink-400 border-b border-white/10 pb-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto">
            <a href="tel:+919664106898">
              <button className="font-bold w-full bg-[#c02177] py-4 rounded-lg">
                Call Now: +91 9664106898
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;