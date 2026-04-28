import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" }, 
  ];

  return (
    <footer className="bg-[#2a145b] text-white pt-16 pb-8 px-6 font-['Satoshi']">
      <div className="max-w-7xl mx-auto"> 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter uppercase">
              Vikas Marble <span className="text-[#c02177]">Murti Arts</span>
            </h2>
            <p className="font-['Erode'] italic text-gray-300 text-lg leading-relaxed max-w-sm">
              Crafting divine excellence through authentic Makrana marble since
              2001. Bringing spirituality to your home.
            </p>
            {/* <div className="flex gap-4">
              <Link
                to="#"
                className="p-3 bg-white/5 rounded-full hover:bg-[#c02177] transition-all duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                to="#"
                className="p-3 bg-white/5 rounded-full hover:bg-[#c02177] transition-all duration-300"
              >
                <Facebook size={20} />
              </Link>
            </div> */}
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-10"> 
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#c02177]">
                Quick Links
              </h4>
              <ul className="space-y-4 text-gray-300">
                {quickLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="hover:text-white flex items-center group transition-all"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#c02177] mr-0 group-hover:mr-2 transition-all"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> 
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#c02177]">
                Get In Touch
              </h4>
              <ul className="space-y-5 text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#c02177] shrink-0" />
                  <span>
                   Shop no. 38, Chaman market, Kheri Road, Ramgarh (Alwar) Rajasthan, 301026, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#c02177] shrink-0" />
                  <a
                    href="tel:+919664106898"
                    className="hover:text-white transition-colors"
                  >
                    +91 9664106898
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-[#c02177] shrink-0" />
                  <a
                    href="tel:+919828641895"
                    className="hover:text-white transition-colors"
                  >
                    +91 9828641895
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-[#c02177] shrink-0" />
                  <a
                    href="mailto:	vikassharma9828641895@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    vikassharma9828641895@gmail.com
                  </a>
                </li>
              </ul>
            </div> 
            <div>
              <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-[#c02177]">
                Business Hours
              </h4>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <p className="text-sm text-gray-300 mb-2 font-['Erode'] italic">
                  Monday - Sunday
                </p>
                <p className="font-bold text-white mb-4">08:00 AM - 10:00 PM</p>
                <span className="text-[10px] bg-[#c02177] px-3 py-1 rounded-full font-black uppercase">
                  Open Now
                </span>
              </div>
            </div>
          </div>
        </div> 
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium">
          <p>© {currentYear} Vikas Marble Murti Arts. All Rights Reserved.</p>

          <div className="flex gap-8"> 
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link> 
            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>

          <p className="flex items-center gap-1.5">
            Designed with
            <Heart
              size={16}
              className="text-red-500 fill-red-500 animate-pulse"
            />
            for
            <a
              href="https://wa.me/916367035900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold tracking-tight hover:text-[#c02177] transition-colors cursor-pointer"
            >
              Nitin Sharma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
