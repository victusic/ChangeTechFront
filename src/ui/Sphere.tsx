'use client';
import React, { ReactNode, useEffect, useState } from 'react';

interface SphereProps {
  variant: 'v1' | 'v2' | 'v3' | 'vNone';
  children?: ReactNode;
  className?: string;
  size: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  pos?: string;
}

export const Sphere: React.FC<SphereProps> = ({
  variant = 'v1',
  className,
  size,
  top,
  left,
  bottom,
  right,
  pos = 'absolute',
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

  const updatedTop =
    top !== undefined ? top - cursorPosition.y / distanceFromCursor : undefined;
  const updatedLeft =
    left !== undefined
      ? left - cursorPosition.x / distanceFromCursor
      : undefined;
  const updatedBottom =
    bottom !== undefined
      ? bottom - cursorPosition.y / distanceFromCursor
      : undefined;
  const updatedRight =
    right !== undefined
      ? right - cursorPosition.x / distanceFromCursor
      : undefined;

  const stylesVariant = (() => {
    switch (variant) {
      case 'v1':
        return ' [background:radial-gradient(_74.73%_80.92%_at_30.75%_25.25%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.27)_36.26%,rgba(255,255,255,0.16)_55.63%,rgba(255,255,255,0.14)_69.89%,rgba(255,255,255,0.09)_86.95%,rgba(255,255,255,0.16)_100%_),var(--sphere1)]';
      case 'v2':
        return ' [background:radial-gradient(_74.73%_80.92%_at_30.75%_25.25%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.27)_36.26%,rgba(255,255,255,0.16)_55.63%,rgba(255,255,255,0.14)_69.89%,rgba(255,255,255,0.09)_86.95%,rgba(255,255,255,0.16)_100%_),var(--sphere2)]';
      case 'v3':
        return ' [background:radial-gradient(_74.73%_80.92%_at_30.75%_25.25%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.27)_36.26%,rgba(255,255,255,0.16)_55.63%,rgba(255,255,255,0.14)_69.89%,rgba(255,255,255,0.09)_86.95%,rgba(255,255,255,0.16)_100%_),var(--sphere3)]';
      default:
        return ' cursor-pointer [background:radial-gradient(_74.73%_80.92%_at_30.75%_25.25%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.27)_36.26%,rgba(255,255,255,0.16)_55.63%,rgba(255,255,255,0.14)_69.89%,rgba(255,255,255,0.09)_86.95%,rgba(255,255,255,0.16)_100%_),var(--sphereNone)] hover:[background:radial-gradient(_74.73%_80.92%_at_30.75%_25.25%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.27)_36.26%,rgba(255,255,255,0.16)_55.63%,rgba(255,255,255,0.14)_69.89%,rgba(255,255,255,0.09)_86.95%,rgba(255,255,255,0.16)_100%_),var(--sphere2)]';
    }
  })();

  const styles = `z-[1000] [filter:drop-shadow(0px_4px_4px_rgba(0,0,0,0.25))] rounded-[50%] ${pos} ${stylesVariant}`;
  return (
    <div
      className={styles}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: updatedTop !== undefined ? `${updatedTop}px` : undefined,
        left: updatedLeft !== undefined ? `${updatedLeft}px` : undefined,
        bottom: updatedBottom !== undefined ? `${updatedBottom}px` : undefined,
        right: updatedRight !== undefined ? `${updatedRight}px` : undefined,
      }}
      {...rest}
    ></div>
  );
};
