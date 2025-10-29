// Utility function for smooth scrolling to elements
export const scrollToElement = (elementId: string, delay: number = 0) => {
  const scrollToTarget = () => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (delay > 0) {
    setTimeout(scrollToTarget, delay);
  } else {
    scrollToTarget();
  }
};

// Utility function for handling navigation clicks
export const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, delay: number = 0) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  
  if (href && href.startsWith('#')) {
    const targetId = href.substring(1);
    scrollToElement(targetId, delay);
  }
};
