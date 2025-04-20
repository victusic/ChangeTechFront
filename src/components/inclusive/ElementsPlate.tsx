import React, { ReactNode } from 'react';

interface ElementsPlateProps {
  children: ReactNode;
}

export const ElementsPlate: React.FC<ElementsPlateProps> = ({ children }) => {
  return (
    <div className="absolute inset-[35px] sp:inset-[25px] st:inset-2.75 lm:inset-2.5 sm:inset-[15px]">
      {children}
    </div>
  );
};
