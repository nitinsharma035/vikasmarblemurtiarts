import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Award, Gem } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => { 
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-white overflow-hidden"> 
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="/image/banner-1.png" 
            alt="Vikas Marble Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2a145b]/85 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ fontFamily: 'Erode, serif' }}
            className="text-amber-400 italic text-lg md:text-xl mb-4"
          >
            Sculpting Divinity with Devotion since 2001.
          </motion.p>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontFamily: 'Satoshi, sans-serif' }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Vikas Marble <br /> Murti Arts
          </motion.h1>
          <div className="w-24 h-1 bg-[#c02177] mx-auto mt-6"></div>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 
              style={{ fontFamily: 'Satoshi, sans-serif' }}
              className="text-2xl md:text-4xl font-bold text-[#2a145b] leading-tight"
            >
              Where Every Stone <br /> Tells a Sacred Story
            </h2>
            <p 
              style={{ fontFamily: 'Erode, serif' }}
              className="text-xl text-stone-600 italic leading-relaxed font-medium"
            >
              Specializing in 100% pure Makrana marble idols, we bring centuries of Rajasthani craftsmanship to your doorstep.
            </p>
            <div className="space-y-4 text-stone-500 leading-relaxed text-lg">
              <p>
                Vikas Marble Murti Arts is a premier name in the world of marble sculpture. We don't just carve stone; we instill life and soul into every piece of Makrana marble we touch.
              </p>
              <p>
                Our legacy is built on the hands of master craftsmen who have inherited this divine art through generations. Whether it's a grand temple project or a serene home shrine, we ensure perfection in every detail.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#c02177]/10 rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img 
              src="/image/jugal-jodi-1.png" 
              alt="Artisans at Vikas Marble Art" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section> 
      <section ref={ref} className="bg-[#2a145b] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <span className="text-white text-5xl font-black block mb-2">
              {inView ? <CountUp end={25} duration={3} /> : "0"}+
            </span>
            <span className="text-amber-400 uppercase text-xs tracking-[0.3em] font-bold">Years of Heritage</span>
          </div>
          <div>
            <span className="text-white text-5xl font-black block mb-2">
              {inView ? <CountUp end={12000} separator="," duration={3} /> : "0"}+
            </span>
            <span className="text-amber-400 uppercase text-xs tracking-[0.3em] font-bold">Divine Creations</span>
          </div>
          <div>
            <span className="text-white text-5xl font-black block mb-2">
              {inView ? <CountUp end={50} duration={3} /> : "0"}+
            </span>
            <span className="text-amber-400 uppercase text-xs tracking-[0.3em] font-bold">Master Artists</span>
          </div>
          <div>
            <span className="text-white text-5xl font-black block mb-2">
              {inView ? <CountUp end={100} duration={3} /> : "0"}%
            </span>
            <span className="text-amber-400 uppercase text-xs tracking-[0.3em] font-bold">Pure Quality</span>
          </div>
        </div>
      </section> 
      <section className="bg-stone-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              icon: <Gem className="text-[#c02177]" size={32} />, 
              title: "Makrana Excellence", 
              desc: "Ethically sourced A-grade Makrana marble ensuring a timeless white glow." 
            },
            { 
              icon: <Award className="text-[#c02177]" size={32} />, 
              title: "Vedic Precision", 
              desc: "Carving aligned with Shastra and Vastu principles for spiritual harmony." 
            },
            { 
              icon: <Globe2 className="text-[#c02177]" size={32} />, 
              title: "Global Shipping", 
              desc: "Expert wooden-crate packaging and fully insured international delivery." 
            },
            { 
              icon: <ShieldCheck className="text-[#c02177]" size={32} />, 
              title: "Lifetime Promise", 
              desc: "Marble that resists weathering, maintaining its divinity for generations." 
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-stone-100 hover:border-[#c02177]/30 transition-all hover:shadow-xl group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h4 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-xl font-bold text-[#2a145b] mb-3">{feature.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section> 
      <section className="py-24 text-center px-6">
        <h2 
          style={{ fontFamily: 'Satoshi, sans-serif' }} 
          className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Experience Divine Artistry
        </h2>
        <p 
          style={{ fontFamily: 'Erode, serif' }} 
          className="text-stone-500 italic text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          From our workshop in Jaipur to your sacred home, we bring the finest marble carvings.
        </p> 
        <a href="tel:+919664106898">
          <button 
            className="bg-[#c02177] hover:bg-[#2a145b] text-white px-12 py-4 rounded-full font-bold transition-all shadow-2xl hover:-translate-y-1 uppercase tracking-widest text-sm active:scale-95"
          >
            Browse Our Collection & Call
          </button>
        </a>
      </section>
    </div>
  );
};

export default AboutPage;