import React from 'react';

const Offers = () => { 
  const phoneNumber = "+919664106898"; 

  return (
    <section className="py-12 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"> 
        <div 
          className="relative overflow-hidden rounded-xl shadow-lg min-h-[300px] md:min-h-[400px] bg-cover bg-center group"
          style={{ backgroundImage: 'url(/image/offers-1.png)' }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
          
          <div className="absolute top-6 right-6 md:bottom-10 md:right-10 text-right z-10">
            <div className="p-6 rounded-lg border border-white/20">
              <p 
                style={{ fontFamily: 'Erode, serif' }} 
                className="text-amber-400 italic text-sm md:text-base mb-1"
              >
                Master Craftsmen
              </p>
              <h3 
                style={{ fontFamily: 'Satoshi, sans-serif' }} 
                className="text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight"
              >
                New Arrivals <br /> Marble Idols
              </h3> 
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-block mt-4 px-8 py-2 bg-[#c02177] hover:bg-[#2a145b] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                Call Now
              </a>
            </div>
          </div>
        </div> 
        <div 
          className="relative overflow-hidden rounded-xl shadow-lg min-h-[300px] md:min-h-[400px] bg-cover bg-center group"
          style={{ backgroundImage: 'url(/image/offers-2.jpg)' }}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

          <div className="absolute top-6 right-6 md:bottom-10 md:right-10 text-right z-10">
            <div className="p-6 rounded-lg border border-white/20">
              <p 
                style={{ fontFamily: 'Erode, serif' }} 
                className="text-amber-400 italic text-sm md:text-base mb-1"
              >
                Special Offer
              </p>
              <h3 
                style={{ fontFamily: 'Satoshi, sans-serif' }} 
                className="text-2xl md:text-3xl font-black text-white leading-tight uppercase"
              >
                Handicraft <br /> Items
              </h3>  
              <a 
                href={`tel:${phoneNumber}`}
                className="inline-block mt-4 px-8 py-2 bg-[#2a145b] hover:bg-[#c02177] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                Explore on Call
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offers;