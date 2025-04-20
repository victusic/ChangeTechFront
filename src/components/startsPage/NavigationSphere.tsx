import { useWindowResize } from '@/hooks/useWindowResize';
import { Sphere } from '@/ui';
import React, { useEffect, useState } from 'react';

export const NavigationSphere: React.FC = () => {
  const [size, setSize] = useState(0);
  const view = useWindowResize();
  useEffect(() => {
    switch (view) {
      case 1:
        setSize(14);
        break;
      case 2:
        setSize(12);
        break;
      case 6:
        setSize(8);
        break;
      default:
        setSize(10);
        break;
    }
  }, [view]);
  return (
    <div className="absolute flex justify-between w-[130px] right-0 bottom-0 sp:w-14 lt:w-[93px] sm:w-[74px]">
      <Sphere size={size} variant="vNone" pos="relative" />
      <Sphere size={size} variant="v1" pos="relative" />
      <Sphere size={size} variant="vNone" pos="relative" />
      <Sphere size={size} variant="vNone" pos="relative" />
      <Sphere size={size} variant="vNone" pos="relative" />
    </div>
  );
};
