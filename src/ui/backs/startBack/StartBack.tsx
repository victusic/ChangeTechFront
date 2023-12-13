'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import styles from './startBack.module.scss'


export const StartBack = ({children}) => {
  const [viewportHeight, setViewportHeight] = useState(0);

    useEffect(() => {
      setViewportHeight(window.innerHeight);

      function handleResize() {
        setViewportHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.back} style={{height: viewportHeight+'px'}}>
      {children}
    </div>
  )
}

