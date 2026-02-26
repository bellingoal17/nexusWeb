import React from 'react';
import { Code, RefreshCw, Smartphone, Zap, Settings } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Code: Code,
  RefreshCw: RefreshCw,
  Smartphone: Smartphone,
  Zap: Zap,
  Settings: Settings
};

const Services = () => {
  return (
    <section id="services" className="section-container section-dark">
      <div className="content-wrapper">
        <h2 className="section-title">Unsere Leistungen</h2>
        
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  {IconComponent && <IconComponent size={32} className="service-icon" />}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;