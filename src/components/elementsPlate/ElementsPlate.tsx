import React from 'react'
import styles from './elementsPlate.module.scss';

export const ElementsPlate = ({children}) => {
  return (
    <div className={styles.waves}>
      {children}
    </div>
  )
}
