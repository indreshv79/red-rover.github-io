import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/InnerHero';
import Compair from '../Components/HowItWork/Compair';
import Testimonial from '../Components/HowItWork/Testimonial';
import ComparisonTable from '../Components/HowItWork/ComparisonTable';
import ServiceComparison from '../Components/HowItWork/ServiceComparison';
import CompanyLocation from '../Components/HowItWork/CompanyLocation';
import Footer from '../Components/Footer/Footer';

function HowItWorks() {
  return (
    <>
      <Header />
      <Banner 
        title="COMPARE RED ROVER"
        subtitle="We've Combined the Best Parts of the Moving & Storage Industry"
      />     
      <Compair /> 
      <Testimonial /> 
      <ComparisonTable />
      <ServiceComparison />
      <CompanyLocation />
      <Footer />
    </>
  );
}

export default HowItWorks;