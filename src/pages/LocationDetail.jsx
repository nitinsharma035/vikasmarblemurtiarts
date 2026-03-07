import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MapPin, User, Package, MessageSquare } from 'lucide-react';
import locationData from '../data/location.json';

const LocationDetail = () => {
  const { city } = useParams();
  const data = locationData[city.toLowerCase()];

  if (!data) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-[#2a145b]">Location details not found!</h2>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-['Satoshi'] text-gray-800"> 
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#2a145b]">
          <img 
            src={data.bannerImage} 
            alt={`${data.title} Banner`}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-['Erode'] font-bold text-white mb-4 capitalize">
            {data.title}
          </h1>
          <div className="w-24 h-1 bg-[#c02177]"></div>
        </div>
      </div> 
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-[#c02177] font-bold tracking-[0.2em] uppercase text-sm mb-4">Crafting Divinity</h2>
        <h3 className="text-3xl md:text-4xl font-['Erode'] text-[#2a145b] mb-6 italic">
          Masterpieces from {city.charAt(0).toUpperCase() + city.slice(1)}  
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {data.description}
        </p>
      </section> 
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-['Erode'] text-[#2a145b] mb-12 text-center font-bold">Best Sellers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.gallery && data.gallery.map((imgUrl, index) => (
              <div key={index} className="aspect-square bg-white rounded-2xl overflow-hidden shadow-sm group border border-gray-200">
                <img 
                  src={imgUrl} 
                  alt={`Vikas Marble Murti ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section> 
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-[#2a145b] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/10">
           
          <div className="p-10 lg:p-16 lg:w-2/5 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-['Erode'] font-bold mb-6 italic text-[#c02177]">Get In Touch </h2>
            <p className="text-white/70 mb-10 leading-relaxed text-lg">
              Every divine space is unique. Share your requirements and our master artisans will bring your vision to life.
            </p>
            
            <div className="flex items-center gap-5 p-6 bg-white/5 rounded-3xl border border-white/10 group hover:border-[#c02177] transition-all">
              <div className="w-14 h-14 bg-[#c02177] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={26} className="text-white" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Call for Details</p>
                <p className="text-xl font-bold tracking-wider">{data.phone}</p>
              </div>
            </div>
          </div> 
          <div className="p-10 lg:p-16 lg:w-3/5 bg-white/5 backdrop-blur-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}> 
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input type="text" placeholder="Your Name" className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/10 text-white focus:border-[#c02177] outline-none transition-all placeholder:text-white/30" />
              </div> 
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input type="text" placeholder="Contact Number" className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/10 text-white focus:border-[#c02177] outline-none transition-all placeholder:text-white/30" />
              </div> 
              <div className="relative md:col-span-2">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input type="text" placeholder="Your Complete Address" className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/10 text-white focus:border-[#c02177] outline-none transition-all placeholder:text-white/30" />
              </div> 
              <div className="relative md:col-span-2">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                <input type="text" placeholder="Product Name (e.g. 5ft Ram Darbar)" className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/10 text-white focus:border-[#c02177] outline-none transition-all placeholder:text-white/30" />
              </div> 
              <div className="relative md:col-span-2">
                <MessageSquare className="absolute left-4 top-6 text-white/30" size={18} />
                <textarea rows="4" placeholder="Your Message or Special Requirements" className="w-full p-4 pl-12 rounded-xl bg-white/10 border border-white/10 text-white focus:border-[#c02177] outline-none transition-all placeholder:text-white/30 resize-none"></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button className="w-full bg-[#c02177] text-white font-['Erode'] font-bold py-5 rounded-xl hover:bg-white hover:text-[#2a145b] transition-all uppercase tracking-widest text-sm shadow-xl shadow-black/20">
                  Submit now
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LocationDetail;