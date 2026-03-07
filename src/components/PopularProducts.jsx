import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Heart } from 'lucide-react';
import products from '../data/products.json'; 
import 'swiper/css';

const PopularProducts = () => {
  const phoneNumber = "919664106898";

  const handleWhatsAppClick = (productName) => {
    const message = `Hello, Vikas Marble Murti Arts, I am interested in: ${productName}. Please share more details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-12 bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            className="text-2xl md:text-4xl font-bold text-[#2a145b] uppercase tracking-wider"
          >
            Popular Collection
          </h2>
          <p 
            style={{ fontFamily: 'Erode, serif' }}
            className="text-stone-500 italic mt-2 text-sm md:text-lg"
          >
            Explore our most loved handcrafted spiritual masterpieces
          </p>
          <div className="w-12 h-0.5 bg-[#c02177] mx-auto mt-3"></div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={16} 
          slidesPerView={1.4} 
          centeredSlides={true} 
          loop={true}
          autoplay={{ 
            delay: 2500, 
            disableOnInteraction: false 
          }}
          breakpoints={{
            640: { 
                slidesPerView: 3,
                centeredSlides: false 
            },
            1024: { 
                slidesPerView: 5,
                centeredSlides: false 
            }
          }}
          className="product-slider !py-10" 
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              {({ isActive }) => (
                <div 
                  className={`group bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-500 border border-stone-100 h-full flex flex-col
                    ${isActive ? 'scale-100 opacity-100 shadow-xl' : 'scale-90 opacity-60 md:scale-100 md:opacity-100'}
                  `}
                >
                  <div className="relative aspect-square overflow-hidden bg-stone-50">
                    <img 
                      src={product.image} 
                      alt={product.alt || product.name}
                      title={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <button className="p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[#2a145b] hover:text-[#c02177] shadow-sm border border-stone-100 transition-colors">
                        <Heart size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="p-3 text-center flex flex-col flex-grow justify-between">
                    <h3 
                      style={{ fontFamily: 'Satoshi, sans-serif' }}
                      className="text-xs md:text-sm font-bold text-gray-900 mb-3 line-clamp-1 uppercase tracking-tight"
                    >
                      {product.name}
                    </h3>
                    
                    <button 
                      onClick={() => handleWhatsAppClick(product.name)}
                      className="w-full py-2 bg-[#2a145b] hover:bg-[#c02177] text-white rounded-lg flex items-center justify-center gap-1.5 transition-all duration-300 active:scale-95 shadow-md"
                    >
                      <span style={{ fontFamily: 'Satoshi, sans-serif' }} className="font-bold text-[14px] tracking-wide uppercase">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;