import { ReactNode, useEffect, useState } from 'react';
import styles from './sphere.module.scss';
import classNames from 'classnames';

interface SphereProps {
  variant:
    | 'v1'
    | 'v2'
    | 'v3'
  children?: ReactNode
  className?: string
  size: number
  top?: number
  left?: number
  right?: number
  bottom?: number
}

const cx = classNames.bind(styles);

export const Sphere: React.FC<SphereProps> = ({
  variant = 'v1',
  className,
  size, 
  top,
  left,
  bottom,
  right,
  ...rest
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const distanceFromCursor = 90; 

  const updatedTop = top !== undefined ? top - (cursorPosition.y / distanceFromCursor) : undefined;
  const updatedLeft = left !== undefined ? left - (cursorPosition.x / distanceFromCursor) : undefined;
  const updatedBottom = bottom !== undefined ? bottom - (cursorPosition.y / distanceFromCursor) : undefined;
  const updatedRight = right !== undefined ? right - (cursorPosition.x / distanceFromCursor) : undefined;

  const sphereClasses = {
    [styles.sphere]: true, 
    [styles[variant]]: true, 
  }

  return (
    <div 
      className={cx(sphereClasses, className)} 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: updatedTop !== undefined ? `${updatedTop}px` : undefined,
        left: updatedLeft !== undefined ? `${updatedLeft}px` : undefined,
        bottom: updatedBottom !== undefined ? `${updatedBottom}px` : undefined,
        right: updatedRight !== undefined ? `${updatedRight}px` : undefined,
      }} 
      {...rest}
    >
    </div>
  );
};
