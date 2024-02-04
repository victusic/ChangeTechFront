import { Sphere } from '@/ui/sphere';
import styles from './navigationSphere.module.scss';
import { useWindowResize } from '@/hooks/useWindowResize';
import { useEffect, useState } from 'react';

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
    <div className={styles.navigationPlate}>
      <Sphere size={size} variant="vNone" pos="relative" />
      <Sphere size={size} variant="v1" pos="relative" />
      <Sphere size={size} variant="vNone" pos="relative" />
      <Sphere size={size} variant="vNone" pos="relative" />
      <Sphere size={size} variant="vNone" pos="relative" />
    </div>
  );
};
