import React from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Home/Hero';
import RightImageContainer from '../Components/Home/RightImageContainer';
import CustomModal from '../Components/Home/CustomModal';
import LogoCarousel from '../Components/Home/LogoCarousel';
import IconCardContainer from '../Components/Home/IconCardContainer';
import ColContainer from '../Components/Home/ColContainer';
import Footer from '../Components/Footer/Footer';


function Home() {
  return (
    <>
      <Header /> 
      <Hero /> 
      <RightImageContainer />   
      <LogoCarousel />  
      <IconCardContainer />
      <ColContainer />
      <Footer />
      <CustomModal />   
    </>
  );
}

export default Home;
