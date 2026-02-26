import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="dark-header">
      <div className="dark-logo-container">
        <h1 className="dark-logo-text">NexusWeb</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="dark-nav desktop-nav">
        <button onClick={() => scrollToSection('about')} className="dark-nav-link">
          Über uns
        </button>
        <button onClick={() => scrollToSection('services')} className="dark-nav-link">
          Leistungen
        </button>
        <button onClick={() => scrollToSection('pricing')} className="dark-nav-link">
          Preise
        </button>
        <button onClick={() => scrollToSection('contact')} className="btn-primary btn-header">
          Kontakt
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
            Über uns
          </button>
          <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
            Leistungen
          </button>
          <button onClick={() => scrollToSection('pricing')} className="mobile-nav-link">
            Preise
          </button>
          <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
            Kontakt
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;