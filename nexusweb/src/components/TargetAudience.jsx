import React from 'react';
import { Store, Building2, Building, User, Briefcase } from 'lucide-react';
import { targetAudiences } from '../data/mock';

const iconMap = {
  Store: Store,
  Building2: Building2,
  Building: Building,
  User: User,
  Briefcase: Briefcase
};

const TargetAudience = () => {
  return (
    <section className="section-container">
      <div className="content-wrapper">
        <h2 className="section-title">Unsere Zielgruppe</h2>
        <p className="section-intro">Wir arbeiten mit:</p>
        
        <div className="target-grid">
          {targetAudiences.map((audience) => {
            const IconComponent = iconMap[audience.icon];
            return (
              <div key={audience.id} className="target-card">
                <div className="target-icon-wrapper">
                  {IconComponent && <IconComponent size={28} className="target-icon" />}
                </div>
                <h3 className="target-title">{audience.title}</h3>
              </div>
            );
          })}
        </div>
        
        <p className="target-footer">
          Egal ob Neugründung oder Relaunch – wir helfen dabei, online professionell aufzutreten.
        </p>
      </div>
    </section>
  );
};

export default TargetAudience;