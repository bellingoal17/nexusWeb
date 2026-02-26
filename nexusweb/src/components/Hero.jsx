import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-headline">
          Moderne Websites für Unternehmen, die wachsen wollen.
        </h1>
        <p className="hero-subheadline">
          Wir sind <strong>Tim M.</strong> und <strong>Jan D.</strong> – zwei junge, kreative Webentwickler aus der Nähe von Trier.
          <br />
          Unsere Mission: Professionelle, moderne und leistungsstarke Websites für kleine und große Unternehmen – zu fairen Preisen.
        </p>
        <button onClick={scrollToContact} className="btn-primary btn-hero">
          Jetzt unverbindlich anfragen
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;