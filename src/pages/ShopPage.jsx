import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import products from "../data/shopproduct.json";

const ShopPage = () => {
  const phoneNumber = "919664106898";
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage); 
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentPage((prevPage) => { 
        if (prevPage === totalPages) {
          return 1;
        } else {
          return prevPage + 1;
        }
      }); 
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 15000); 
    return () => clearInterval(autoScroll);
  }, [totalPages]); 
  // ----------------------------------

  const handleWhatsAppClick = (productName) => {
    const message = `Hello, Vikas Marble Murti Arts, I am interested in: ${productName}. Please share details.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen pb-20 font-['Satoshi']"> 
      <div className="bg-[#2a145b] py-16 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-['Erode'] font-bold text-white uppercase tracking-tight">
          Our Collection
        </h1>
        <div className="w-16 h-0.5 bg-[#c02177] mx-auto mt-4"></div>
      </div>

      <div className="max-w-full mx-auto px-4 mt-12"> 
        <div className="mb-6 border-b border-stone-200 pb-2 flex justify-between items-center">
          <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
            Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} Items
          </p>
           
        </div> 

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mb-16">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-stone-200 flex flex-col hover:border-stone-400 transition-colors"
            > 
              <div className="relative overflow-hidden bg-white p-2">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-contain"
                />
              </div> 
              <div className="p-3 text-center flex flex-col flex-grow border-t border-stone-100"> 
                <div className="flex justify-center gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < (product.rating || 5) ? "fill-amber-400 text-amber-400" : "text-stone-200"}
                    />
                  ))}
                </div>

                <h3 className="text-xs md:text-sm font-bold text-stone-900 mb-3 line-clamp-1">
                  {product.name}
                </h3>

                <button
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="mt-auto w-full py-2.5 bg-[#2a145b] hover:bg-[#c02177] text-white flex items-center justify-center gap-2 transition-colors font-['Erode'] text-[10px] font-bold uppercase tracking-widest"
                >
                  <ShoppingCart size={14} />
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div> 

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-stone-200 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1 text-xs">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-8 h-8 font-bold border transition-all ${
                    currentPage === index + 1
                      ? "bg-[#2a145b] text-white border-[#2a145b]"
                      : "bg-white text-stone-600 border-stone-200 hover:border-[#2a145b]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-stone-200 disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;