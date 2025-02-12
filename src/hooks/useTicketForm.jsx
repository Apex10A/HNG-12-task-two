
// hooks/useTicketForm.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useTicketForm = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState(() => {
    // Initialize from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ticketFormData');
      return saved ? JSON.parse(saved) : {
        fullName: '',
        email: '',
        ticketType: '',
        numberOfTickets: '1',
        avatarUrl: '',
        specialRequirements: ''
      };
    }
    return {
      fullName: '',
      email: '',
      ticketType: '',
      numberOfTickets: '1',
      avatarUrl: '',
      specialRequirements: ''
    };
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ticketFormData', JSON.stringify(formData));
    }
  }, [formData]);

  const validateForm = (step) => {
    const newErrors = {};

    switch(step) {
      case 1:
        if (!formData.ticketType) {
          newErrors.ticketType = 'Please select a ticket type';
        }
        break;

      case 2:
        if (!formData.fullName.trim()) {
          newErrors.fullName = 'Full name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
        if (!formData.avatarUrl) {
          newErrors.avatarUrl = 'Profile photo is required';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const goToNextStep = async (currentStep) => {
    if (validateForm(currentStep)) {
      try {
        if (currentStep === 2) {
          // Save final form data before navigation
          localStorage.setItem('ticketFormData', JSON.stringify(formData));
          await router.push('/ready-page');
        } else if (currentStep === 1) {
          await router.push('/ticket-selection');
        }
      } catch (error) {
        console.error('Navigation error:', error);
      }
    }
  };

  const goToPreviousStep = (currentStep) => {
    try {
      switch(currentStep) {
        case 2:
          router.push('/');
          break;
        case 3:
          router.push('/ticket-selection');
          break;
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting,
    handleInputChange,
    goToNextStep,
    goToPreviousStep,
    validateForm
  };
};