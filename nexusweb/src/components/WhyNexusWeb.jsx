import React from 'react';
import { Lightbulb, Palette, DollarSign, Wrench, MessageCircle, CheckCircle } from 'lucide-react';
import { whyNexusWeb } from '../data/mock';

const iconMap = {
  Lightbulb: Lightbulb,
  Palette: Palette,
  DollarSign: DollarSign,
  Wrench: Wrench,
  MessageCircle: MessageCircle,
  CheckCircle: CheckCircle
};

const WhyNexusWeb = () => {
  return (
    <section className="section-container">
      <div className="content-wrapper">
        <h2 className="section-title">Warum NexusWeb?</h2>
        
        <div className="why-grid">
          {whyNexusWeb.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={item.id} className="why-card">
                <div className="why-icon-wrapper">
                  {IconComponent && <IconComponent size={24} className="why-icon" />}
                </div>
                <h3 className="why-title">{item.title}</h3>
              </div>
            );
          })}
        </div>
        
        <p className="why-footer">
          Wir legen Wert auf direkte Kommunikation und eine Zusammenarbeit auf Augenhöhe.
        </p>
      </div>
    </section>
  );
};

export default WhyNexusWeb;