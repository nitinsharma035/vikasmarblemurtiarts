import React from 'react';
import { Link } from 'react-router-dom';
import locationData from '../data/location.json';

const LocationHub = () => {
  const locations = Object.values(locationData);

  return (
    <div className="bg-gray-50 min-h-screen font-['Satoshi']"> 
      <div className="bg-[#2a145b] py-20 px-6 text-center">
        <h2 className="text-[#c02177] font-bold tracking-widest uppercase text-sm mb-3">Vikas Marble Murti Arts</h2>
        <h1 className="text-4xl md:text-5xl font-['Erode'] font-bold text-white">Our Presence</h1>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">Explore our specialized studios across Rajasthan, each dedicated to the divine art of marble sculpting.</p>
      </div> 
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {locations.map((loc) => (
            <div key={loc.slug} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              
              
              <div className="p-8">
                <h3 className="text-2xl font-['Erode'] text-[#2a145b] mb-2">{loc.title}</h3>
                <p className="text-[#c02177] font-bold text-sm mb-4 uppercase tracking-wider">{loc.stats}</p>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  {loc.shortDesc}
                </p>
                
                <Link 
                  to={`/location/${loc.slug}`}
                  className="inline-flex items-center gap-2 text-[#2a145b] font-bold border-b-2 border-[#c02177] pb-1 hover:text-[#c02177] transition-colors"
                >
                  View Studio Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationHub;