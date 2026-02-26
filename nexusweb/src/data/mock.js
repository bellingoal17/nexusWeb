// Mock data for NexusWeb website

export const mockFormSubmission = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log form data to console (for development)
  console.log('Mock Form Submission:', formData);
  
  // Simulate successful response
  return {
    status: 'success',
    message: 'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.'
  };
};

export const services = [
  {
    id: 1,
    title: 'Professionelle Website-Erstellung',
    description: 'Individuell programmierte Websites für Unternehmen jeder Größe – modern, schnell und benutzerfreundlich.',
    icon: 'Code'
  },
  {
    id: 2,
    title: 'Website-Relaunch',
    description: 'Modernisierung bestehender Websites – technisch und optisch auf dem neuesten Stand.',
    icon: 'RefreshCw'
  },
  {
    id: 3,
    title: 'Responsive Webdesign',
    description: 'Optimiert für Smartphone, Tablet und Desktop.',
    icon: 'Smartphone'
  },
  {
    id: 4,
    title: 'Performance & Struktur',
    description: 'Schnelle Ladezeiten und klare Seitenstruktur.',
    icon: 'Zap'
  },
  {
    id: 5,
    title: 'Individuelle Features',
    description: 'Kontaktformulare, Buchungssysteme, Bildergalerien, Unternehmensvorstellungen, Leistungsübersichten, SEO-Grundoptimierung uvm.',
    icon: 'Settings'
  }
];

export const targetAudiences = [
  { id: 1, title: 'Kleine Unternehmen', icon: 'Store' },
  { id: 2, title: 'Mittelständische Betriebe', icon: 'Building2' },
  { id: 3, title: 'Größere Unternehmen', icon: 'Building' },
  { id: 4, title: 'Selbstständige', icon: 'User' },
  { id: 5, title: 'Dienstleister', icon: 'Briefcase' }
];

export const whyNexusWeb = [
  { id: 1, title: 'Jung & kreativ', icon: 'Lightbulb' },
  { id: 2, title: 'Modernes Design', icon: 'Palette' },
  { id: 3, title: 'Faire & transparente Preise', icon: 'DollarSign' },
  { id: 4, title: 'Individuelle Lösungen', icon: 'Wrench' },
  { id: 5, title: 'Persönlicher Kontakt', icon: 'MessageCircle' },
  { id: 6, title: 'Zuverlässige Umsetzung', icon: 'CheckCircle' }
];

export const featureOptions = [
  { id: 'contact-form', label: 'Kontaktformular' },
  { id: 'booking-system', label: 'Online-Buchungssystem' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'blog', label: 'Blog' },
  { id: 'online-shop', label: 'Online-Shop' },
  { id: 'seo', label: 'SEO-Optimierung' },
  { id: 'multilingual', label: 'Mehrsprachigkeit' },
  { id: 'other', label: 'Sonstiges' }
];

