import React from 'react';
import { ShoppingCart } from 'lucide-react';
import products from '../data/bestseller.json';

const BestSeller = () => {
  const phoneNumber = "919664106898";

  const sendWhatsAppMessage = (productName) => {
    const message = `Hello, Vikas Marble Murti Arts, I want to buy: ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="font-['Erode'] italic text-[#c02177] text-lg mb-2">Most Popular</h4>
          <h2 className="font-['Satoshi'] font-black text-2xl md:text-4xl text-[#2a145b] uppercase tracking-tight">
            Best Sellers
          </h2>
          <div className="h-1.5 w-24 bg-[#c02177] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#f9f9f9] mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                /> 
              </div>
              <div className="px-2 text-center">
                <p className="font-['Erode'] italic text-[#c02177] text-sm mb-1 tracking-wide">
                  {product.category}
                </p>
                <h3 className="font-['Satoshi'] font-bold text-xl text-[#2a145b] mb-6 leading-tight min-h-[50px]">
                  {product.name}
                </h3>
                <button
                  onClick={() => sendWhatsAppMessage(product.name)}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#2a145b] text-white rounded-2xl font-['Satoshi'] font-bold tracking-widest hover:bg-[#c02177] transition-all duration-300 shadow-lg hover:shadow-[#c02177]/40 active:scale-95"
                >
                  <ShoppingCart size={20} />
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;