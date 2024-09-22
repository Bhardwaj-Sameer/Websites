// Script for simple hover animations
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'scale(1.1)';
      link.style.transition = 'transform 0.2s';
      if(!link.hasAttribute('target')){
        link.setAttribute('target', '_blank');
      }
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });
  