import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/InnerHero';
import RegionList from '../Components/Region/RegionList';
import AllRegionsContainer from '../Components/Region/AllRegionsContainer';
import Footer from '../Components/Footer/Footer';
function Regions() {
  return (
    <>
      <Header />
      <Banner 
        title="RED ROVER FETCHABLE MOVING & STORAGE"
        subtitle="Find Moving & 
        Storage Near You"
      />  
      <RegionList />  
      <AllRegionsContainer />
      <Footer />
    </>
  );
}

export default Regions;