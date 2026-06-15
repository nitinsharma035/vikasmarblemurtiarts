 
import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/Features';
import PopularProducts from '../components/PopularProducts';
import Offers from '../components/Offers';
import BestSeller from '../components/BestSeller';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
            <title>Vikas Marble Murti Arts & Gift Items| Handmade Marble Statues & God Idols Online</title>
            <meta 
              name="description" 
              content="Buy authentic handmade marble murtis & god idols from Vikas Marble Murti Arts. Custom marble statues of Radha Krishna, Ganesh, Shiva & more. Shop online or order custom idol." 
            />
            <meta name="geo.region" content="IN-RJ" />
            <meta name="geo.placename" content="Jaipur" />
            <link rel="canonical" href="https://vikasmarblemurtiarts.in" />
          </Helmet>
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