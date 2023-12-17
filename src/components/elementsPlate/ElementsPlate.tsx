import React, { ReactNode } from 'react'
import styles from './elementsPlate.module.scss';

interface ElementsPlateProps {
  children: ReactNode;
}

export const ElementsPlate: React.FC<ElementsPlateProps> = ({children}) => {
  return (
    <div className={styles.waves}>
      {children}
    </div>
  )
}
