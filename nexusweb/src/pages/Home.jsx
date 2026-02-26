import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import TargetAudience from '../components/TargetAudience';
import Pricing from '../components/Pricing';
import WhyNexusWeb from '../components/WhyNexusWeb';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="website-container">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <TargetAudience />
        <Pricing />
        <WhyNexusWeb />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;