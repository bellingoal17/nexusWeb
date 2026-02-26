import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { mockFormSubmission, featureOptions } from '../data/mock';
import { toast } from 'sonner';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    projectType: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    features: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // usw...
};


export default ContactForm;