import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return { theme: 'dark' as const };
};