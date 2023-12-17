import { useState, useEffect } from 'react';

export const useWindowResize = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  const [view, setView] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    setViewportWidth(window.innerWidth);

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); 

  useEffect(() => {
    switch (true) {
      case viewportWidth > 1366: setView(1); break;
      case viewportWidth <= 1366 && viewportWidth > 1024: setView(2); break;
      case viewportWidth <= 1024 && viewportWidth > 768: setView(3); break;
      case viewportWidth <= 768 && viewportWidth > 480: setView(4); break;
      case viewportWidth <= 480 && viewportWidth > 320: setView(5); break;
      case viewportWidth <= 320: setView(6); break;
      default: setView(0)
    }
  }, [viewportWidth]);

  return view;
};