import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PricesSection from "../components/PricesSection";
import ExpertsSection from "../components/ExpertsSection";
import FooterSection from "../components/FooterSection";
import React from 'react';
import ThankYouPage from "./ThankYouPage";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PricesSection />
      <ExpertsSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
