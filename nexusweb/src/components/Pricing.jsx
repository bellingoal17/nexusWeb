import React from 'react';
import { DollarSign } from 'lucide-react';

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-container section-dark">
      <div className="content-wrapper">
        <h2 className="section-title">Preise</h2>
        
        <div className="pricing-card">
          <div className="pricing-icon-wrapper">
            <DollarSign size={48} className="pricing-icon" />
          </div>
          
          <h3 className="pricing-title">Individuelle Preisgestaltung</h3>
          
          <p className="pricing-description">
            Unsere Preise erfolgen auf Anfrage, da jedes Projekt individuell ist.
          </p>
          
          <div className="pricing-highlight">
            <h4 className="pricing-highlight-title">Besonderheit:</h4>
            <p className="pricing-highlight-text">
              Wir bieten professionelle Webseiten zu deutlich günstigeren Konditionen als viele große Agenturen – 
              ohne dabei an Qualität zu sparen.
            </p>
          </div>
          
          <button onClick={scrollToContact} className="btn-primary btn-pricing">
            Jetzt Angebot einholen
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;