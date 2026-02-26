import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="section-container">
      <div className="content-wrapper">
        <h2 className="section-title">Über uns</h2>
        
        <div className="about-grid">
          <div className="about-image-container">
            <img 
              src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRldmVsb3BlcnMlMjB0ZWFtJTIwd29ya2luZ3xlbnwwfHx8fDE3NzIxMjE3MDN8MA&ixlib=rb-4.1.0&q=85" 
              alt="NexusWeb Team" 
              className="about-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-intro">
              Wir sind <strong>Tim M.</strong> und <strong>Jan D.</strong>, die Gründer von NexusWeb.
            </p>
            
            <p className="about-description">
              Als junges, kreatives Team verbinden wir modernes Design mit sauberer Programmierung und klarer Struktur. 
              Wir wissen, wie wichtig ein professioneller Online-Auftritt heute ist – denn Ihre Website ist oft der erste 
              Eindruck, den Kunden von Ihrem Unternehmen bekommen.
            </p>
            
            <div className="about-goals">
              <h3 className="about-subtitle">Unser Anspruch ist es, hochwertige Webseiten zu entwickeln, die:</h3>
              <ul className="about-list">
                <li>modern und zeitgemäß aussehen</li>
                <li>technisch einwandfrei funktionieren</li>
                <li>auf allen Geräten perfekt dargestellt werden</li>
                <li>neue Kunden gewinnen</li>
              </ul>
            </div>
            
            <p className="about-approach">
              Dabei arbeiten wir strukturiert, transparent und zuverlässig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;