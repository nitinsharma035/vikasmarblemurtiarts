import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Star, Quote} from 'lucide-react'; 
import 'swiper/css';
import 'swiper/css/navigation';

import reviews from '../data/testimonials.json';

const TestimonialSlider = () => {
  return (
    <section className="py-20 bg-[#fdfaf6] px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative"> 
        <div className="text-center mb-16">
          <h4 className="font-['Erode'] italic text-[#c02177] text-lg mb-2">Our Happy Clients</h4>
          <h2 className="font-['Satoshi'] font-black text-2xl md:text-4xl text-[#2a145b] uppercase tracking-tight">
            Google Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
             <img src="/image/google-icon-logo.svg" alt="Google" className="w-5 h-5" />
             <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
             </div>
             <span className="font-['Satoshi'] font-bold text-sm text-[#2a145b]">4.9 Rating</span>
          </div>
        </div> 
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full flex flex-col relative group transition-all duration-500">
                <Quote className="absolute top-6 right-8 text-gray-100 opacity-20" size={60} />
                <div className="relative z-10">
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-['Erode'] text-gray-700 italic leading-relaxed text-lg mb-8 min-h-[120px]">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                    <div className="w-12 h-12 bg-[#2a145b] text-white rounded-full flex items-center justify-center font-bold font-['Satoshi'] text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-['Satoshi'] font-black text-[#2a145b] leading-tight">
                        {review.name}
                      </h5>
                      <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;