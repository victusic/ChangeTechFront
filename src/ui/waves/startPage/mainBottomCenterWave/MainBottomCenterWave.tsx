'use client'
import React from 'react'
import styles from './mainBottomCenterWave.module.scss'

export const MainBottomCenterWave = ({...props}) => {
  return (
    <svg className={styles.waveSvg} viewBox="0 0 1486 598" fill="none">
    <path d="M67.5 487.434C26.8257 517.197 0 597.434 0 597.434H1486V15.4339C1486 15.4339 1456.78 14.0807 1437.5 15.4339C1352 21.4339 1348 44.883 1251.5 44.8831C1150.96 44.8831 1161.16 11.5016 1026 1.88307C948 -3.66781 873.5 -0.0660973 804.5 56.4339C672.722 164.339 668.5 221.934 561 325.934C514.974 370.461 467.5 405.934 431 423.934C334.044 471.748 221.5 442.434 156 453.434C119.329 459.593 97.509 465.475 67.5 487.434Z" fill="url(#paint0_linear_120_197)" fillOpacity="0.5"/>
      <defs>
        <linearGradient id="paint0_linear_120_197" x1="331" y1="538" x2="1486" y2="338.5" gradientUnits="userSpaceOnUse">
        <stop className={styles.leftColor}/>
        <stop offset="1" className={styles.rightColor}/>
        </linearGradient>
      </defs>
    </svg>
  )
}
