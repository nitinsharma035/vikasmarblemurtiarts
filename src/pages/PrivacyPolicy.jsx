import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen pb-20"> 
      <div className="bg-[#2a145b] py-16 px-4 text-center">
        <h1 
          style={{ fontFamily: 'Satoshi, sans-serif' }} 
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
        >
          Privacy Policy
        </h1>
        <p 
          style={{ fontFamily: 'Erode, serif' }} 
          className="text-amber-400 italic mt-4 text-lg"
        >
          Protecting your personal data and spiritual journey.
        </p>
      </div> 
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-10 text-stone-600 leading-relaxed">
        
        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">1. Information We Collect</h2>
          <p>
            At Vikas Marble Murti Arts, we collect personal information when you inquire about our marble idols or place a custom order. This includes your name, phone number, delivery address, and specific murti requirements.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">2. How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide personalized quotes for handcrafted marble statues.</li>
            <li>To coordinate with our master craftsmen in Ramgarh for your custom projects.</li>
            <li>To ensure safe delivery and provide shipping updates to your location.</li>
            <li>To communicate via WhatsApp or phone regarding order details.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">3. Data Security</h2>
          <p>
            We prioritize the security of your information. Your contact details and delivery addresses are used exclusively for fulfilling your orders and are never sold to third-party marketing agencies.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">4. Cookies and Analytics</h2>
          <p>
            Our website may use cookies to improve your browsing experience and analyze traffic. This helps us understand which collections, like our "Popular Products," are most loved by our visitors.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">5. Contact Information</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you can reach our studio in <strong>Ramgarh, Alwar, Rajasthan</strong> at <strong>+91 9664106898</strong>.
          </p>
        </section> 
        <div className="pt-10 border-t border-stone-100 text-center">
          <div className="w-12 h-1 bg-[#c02177] mx-auto mb-4"></div>
          <p style={{ fontFamily: 'Erode, serif' }} className="italic font-medium text-[#2a145b]">
            Honoring Tradition, Protecting Privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;