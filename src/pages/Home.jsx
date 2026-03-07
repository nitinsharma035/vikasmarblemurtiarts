 
import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import PopularProducts from '../components/PopularProducts';
import Offers from '../components/Offers';
import BestSeller from '../components/BestSeller';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <PopularProducts />
      <Offers />
      <BestSeller />
      <Testimonials />
    </>
  );
};

export default Home;