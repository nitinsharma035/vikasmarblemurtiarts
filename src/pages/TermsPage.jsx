import React from 'react';

const TermsPage = () => {
  return (
    <div className="bg-white min-h-screen pb-20"> 
      <div className="bg-[#2a145b] py-16 px-4 text-center">
        <h1 
          style={{ fontFamily: 'Satoshi, sans-serif' }} 
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
        >
          Terms & Conditions
        </h1>
        <p 
          style={{ fontFamily: 'Erode, serif' }} 
          className="text-amber-400 italic mt-4 text-lg"
        >
          Your trust is our legacy at Vikas Marble Murti Arts.
        </p>
      </div> 
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-10 text-stone-600 leading-relaxed">
        
        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">1. Introduction</h2>
          <p>
            Welcome to Vikas Marble Murti Arts. By accessing our website or purchasing our hand-carved marble products, you agree to comply with the following terms. Our studio is located in <strong>Ramgarh, Alwar, Rajasthan, India - 301026</strong>.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">2. Product Authenticity</h2>
          <p>
            Every idol is crafted from 100% pure Makrana or high-quality marble. Since these are handcrafted spiritual masterpieces, slight variations in texture, color veins, and minor carving details may occur, which are the hallmarks of authentic handmade art.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">3. Custom Orders & Payments</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>For custom-sized deities, a 50% advance payment is required to initiate the carving process.</li>
            <li>The remaining balance must be cleared before the final dispatch from our Ramgarh workshop.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">4. Shipping & Safe Delivery</h2>
          <p>
            We offer global shipping with specialized wood-crate packaging to ensure 100% safe delivery. Any damage during transit must be reported with unboxing photos/videos within 24 hours of delivery for insurance claims.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">5. Cancellation & Refunds</h2>
          <p>
            Customized marble idols are non-returnable once the carving is completed. Cancellation of orders is only possible within 48 hours of placing the order.
          </p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'Satoshi, sans-serif' }} className="text-2xl font-bold text-[#2a145b] mb-4 uppercase">6. Governing Law</h2>
          <p>
            Any disputes arising out of the transactions or services provided by Vikas Marble Murti Arts shall be subject to the exclusive jurisdiction of the courts in <strong>Alwar, Rajasthan</strong>.
          </p>
        </section> 
        <div className="pt-10 border-t border-stone-100 text-center">
          <div className="w-12 h-1 bg-[#c02177] mx-auto mb-4"></div>
          <p style={{ fontFamily: 'Erode, serif' }} className="italic font-medium text-[#2a145b]">
            Crafting Peace & Perfection Since 2001.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;