import React from 'react';

// Confetti celebration function
export const triggerCelebration = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000
    };
  
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        scalar: 1.2,
        shapes: ['circle', 'square'],
        colors: ['#24A0B5', '#FAFAFA', '#0E464F', '#197686']
      });
    }
  
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
  
    fire(0.2, {
      spread: 60,
    });
  
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
  
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
  
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };
  
  // Success Animation Component
  export const SuccessAnimation = () => {
    React.useEffect(() => {
      triggerCelebration();
      
      // Add emojis floating up
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.inset = '0';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '1000';
      document.body.appendChild(container);
  
      const emojis = ['🎉', '🎊', '✨', '🎫', '🎭'];
      for (let i = 0; i < 10; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.bottom = '-20px';
        emoji.style.fontSize = '24px';
        emoji.style.animation = `float ${2 + Math.random() * 2}s ease-out forwards`;
        container.appendChild(emoji);
      }
  
      // Cleanup
      return () => {
        document.body.removeChild(container);
      };
    }, []);
  
    return null;
  };