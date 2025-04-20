'use client';
import React, { ReactNode } from 'react';
import useViewportHeight from '@/hooks/useViewportHeight';

interface StartBackProps {
  children: ReactNode;
}

export const StartBack: React.FC<StartBackProps> = ({ children }) => {
  const viewportHeight = useViewportHeight();

  return (
    <div
      className="relative w-full bg-ct-background"
      style={{ height: viewportHeight + 'px' }}
    >
      {children}
    </div>
  );
};
