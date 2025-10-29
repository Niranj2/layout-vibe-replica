// Utility function for smooth scrolling to elements
export const scrollToElement = (elementId: string, delay: number = 0) => {
  const scrollToTarget = () => {
    const element = document.getElementById(elementId);
    if (element) {
      // Force a reflow to ensure the element is ready
      element.offsetHeight;
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Element with id "${elementId}" not found`);
    }
  };

  if (delay > 0) {
    setTimeout(scrollToTarget, delay);
  } else {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(scrollToTarget);
  }
};

// Utility function for handling navigation clicks
export const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, delay: number = 0) => {
  e.preventDefault();
  e.stopPropagation();
  
  const href = e.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    const targetId = href.substring(1);
    console.log(`Scrolling to: ${targetId}`);
    
    // Immediate scroll without delay for main nav
    if (delay === 0) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      scrollToElement(targetId, delay);
    }
  }
};
