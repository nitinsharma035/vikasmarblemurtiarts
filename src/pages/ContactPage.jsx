import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const phoneNumber = "919664106898"; 
  const phoneNumber1 = "919828641895";
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    emailjs.sendForm(
      'service_gla9bg4', 
      'template_750l6jd', 
      form.current, 
      '7aPaRpVk7eoBvIKNz'
    )
    .then((result) => {
        console.log(result.text);
        setIsSubmitting(false);
        setIsSent(true);
        e.target.reset(); 
        setTimeout(() => setIsSent(false), 5000); 
    }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again or contact via WhatsApp.");
    });
  };

  const handleWhatsAppClick = () => {
    const message = "Hello, Vikas Marble Murti Arts, I would like to inquire about your marble idols.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen"> 
      <div className="bg-[#2a145b] py-20 px-4 text-center">
        <h1
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
        >
          Connect With Us
        </h1>
        <p
          style={{ fontFamily: "Erode, serif" }}
          className="text-amber-400 italic mt-4 text-lg md:text-xl"
        >
          Let us help you bring home a masterpiece of faith.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> 
          <div className="space-y-8">
            <div>
              <h2
                style={{ fontFamily: "Satoshi, sans-serif" }}
                className="text-3xl font-bold text-[#2a145b] mb-6"
              >
                Get in Touch
              </h2>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Whether you need a custom-sized deity or have questions about
                our Makrana marble quality, our team is here to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#c02177]/30 transition-all">
                <MapPin className="text-[#c02177] mb-4" size={28} />
                <h4 className="font-bold text-[#2a145b] mb-2 text-lg">Our Shop</h4>
                <p className="text-stone-500 text-sm">
                  Shop no. 38, Chaman market, Kheri Road,
                  Ramgarh (Alwar) Rajasthan, 301026, India
                </p>
              </div> 
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#c02177]/30 transition-all">
                <Phone className="text-[#c02177] mb-4" size={28} />
                <h4 className="font-bold text-[#2a145b] mb-2 text-lg">Call Us</h4>
                <p className="text-stone-500 text-sm">+91 {phoneNumber}</p>
                <p className="text-stone-500 text-sm">+91 {phoneNumber1}</p>
              </div> 
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#c02177]/30 transition-all">
                <Mail className="text-[#c02177] mb-4" size={28} />
                <h4 className="font-bold text-[#2a145b] mb-2 text-lg">Email Us</h4>
                <p className="text-stone-500 text-sm">vikassharma9828641895@gmail.com</p>
              </div> 
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#c02177]/30 transition-all">
                <Clock className="text-[#c02177] mb-4" size={28} />
                <h4 className="font-bold text-[#2a145b] mb-2 text-lg">Working Hours</h4>
                <p className="text-stone-500 text-sm">Mon - Sun: 8 AM - 10 PM</p>
              </div>
            </div> 
            <button
              onClick={handleWhatsAppClick}
              className="w-full py-4 bg-[#2a145b] hover:bg-[#c02177] text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 shadow-xl shadow-[#2a145b]/20"
            >
              <MessageCircle size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Chat on WhatsApp</span>
            </button>
          </div> 
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-50">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                <CheckCircle size={80} className="text-green-500 animate-bounce" />
                <h3 className="text-2xl font-bold text-[#2a145b]">Inquiry Sent!</h3>
                <p className="text-stone-500">Thank you. We will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSent(false)} 
                  className="text-[#c02177] font-bold underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                  <div>
                    <label className="block text-stone-600 text-xs font-bold uppercase mb-2 tracking-widest">Full Name</label>
                    <input 
                      name="user_name"
                      type="text" 
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c02177] transition-all" 
                      placeholder="Enter your name" 
                      required 
                    />
                  </div> 
                  <div>
                    <label className="block text-stone-600 text-xs font-bold uppercase mb-2 tracking-widest">Phone Number</label>
                    <input 
                      name="user_phone"
                      type="tel" 
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c02177] transition-all" 
                      placeholder="Enter phone number" 
                      required 
                    />
                  </div>
                </div> 
                <div>
                  <label className="block text-stone-600 text-xs font-bold uppercase mb-2 tracking-widest">Your Address</label>
                  <input 
                    name="user_address"
                    type="text" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c02177] transition-all" 
                    placeholder="Enter your city/address for delivery info" 
                    required
                  />
                </div> 
                <div>
                  <label className="block text-stone-600 text-xs font-bold uppercase mb-2 tracking-widest">Which Murti do you want?</label>
                  <input 
                    name="murti_type"
                    type="text" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c02177] transition-all" 
                    placeholder="e.g. Radha Krishna, Ganesha, etc." 
                    required
                  />
                </div> 
                <div>
                  <label className="block text-stone-600 text-xs font-bold uppercase mb-2 tracking-widest">Special Requirements</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c02177] transition-all" 
                    placeholder="Tell us about the size or design you need..."
                  ></textarea>
                </div> 
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'bg-stone-400 cursor-not-allowed' : 'bg-[#c02177] hover:bg-[#2a145b] text-white active:scale-95'
                  }`}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      <Send size={18} />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div> 
      <div className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden border-t border-stone-100">
        <iframe
          title="Vikas Marble Murti Arts Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.558761443523!2d76.81263187529582!3d27.576201276258022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729594ff62d61b%3A0xa9eed10f991ae07d!2sChaman%20market!5e0!3m2!1sen!2sin!4v1777368031435!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;