import React from 'react'; 
import { Gem, Hammer, Truck, PenTool } from 'lucide-react';

const FeaturesLayout = () => { 
  const featureData = [
    {
      id: 1,
      icon: <Gem size={36} strokeWidth={1.2} />,
      title: "Premium Quality",
      desc: "Pure Makrana Marble",
    },
    {
      id: 2,
      icon: <Hammer size={36} strokeWidth={1.2} />,
      title: "Divine Craft",
      desc: "Expert Hand Carving",
    },
    {
      id: 3,
      icon: <Truck size={36} strokeWidth={1.2} />,
      title: "Safe Shipping",
      desc: "Insured Global Delivery",
    },
    {
      id: 4,
      icon: <PenTool size={36} strokeWidth={1.2} />,
      title: "Custom Orders",
      desc: "Custom Size & Design",
    },
  ];

  return (
    <div className="w-full bg-white px-4 py-12"> 
      <div className="max-w-7xl mx-auto border border-stone-200 flex flex-col lg:flex-row items-stretch shadow-sm">
        
        {featureData.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex-1 flex items-center justify-center p-6 gap-4 group transition-all duration-300 hover:bg-stone-50 
              ${index !== featureData.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-stone-200' : 'border-b-0'}`}
          > 
            <div className="text-stone-700 transition-transform duration-300 group-hover:scale-110">
              {feature.icon}
            </div> 
            <div className="flex flex-col">
              <h3 
                style={{ fontFamily: 'Satoshi, sans-serif' }}
                className="text-sm font-bold text-stone-900 uppercase tracking-widest leading-none"
              >
                {feature.title}
              </h3>
              <p 
                style={{ fontFamily: 'Erode, serif' }}
                className="text-[11px] md:text-xs text-stone-500 uppercase tracking-tight mt-1.5 italic font-medium"
              >
                {feature.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturesLayout;