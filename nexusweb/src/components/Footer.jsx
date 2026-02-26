import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">NexusWeb</h3>
          <p className="footer-tagline">
            Moderne Websites für wachsende Unternehmen
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Kontakt</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <Mail size={18} />
              <a href="mailto:info@nexusweb.de" className="footer-link">
                info@nexusweb.de
              </a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>Nähe von Trier</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Rechtliches</h4>
          <div className="footer-links">
            <a href="#impressum" className="footer-link">Impressum</a>
            <a href="#datenschutz" className="footer-link">Datenschutz</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} NexusWeb. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;