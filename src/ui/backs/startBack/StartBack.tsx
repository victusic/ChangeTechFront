'use client'
import React, { ReactNode } from 'react'
import styles from './startBack.module.scss'
import useViewportHeight from '@/hooks/useViewportHeight';
interface StartBackProps {
  children: ReactNode;
}

export const StartBack: React.FC<StartBackProps> = ({children}) => {

  const viewportHeight = useViewportHeight();

  return (
    <div className={styles.back} style={{height: viewportHeight+'px'}}>
      {children}
    </div>
  )
}

