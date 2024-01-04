'use client'
import React from 'react'
import styles from './mainTopCenterWave.module.scss'

export const MainTopCenterWave = ({...props}) => {
  return (
    <svg className={styles.waveSvg} viewBox="0 0 767 137" fill="none" {...props}>
    <path d="M154 82C62.4999 82 0 0 0 0H766.286C766.286 0 718 131.16 576.5 136.5C470.5 140.5 419 48.5 319 48.5C253.249 48.5 231.5 82 154 82Z" fill="url(#paint0_linear_120_203)" fillOpacity="0.4"/>
        <defs>
        <linearGradient id="paint0_linear_120_203" x1="196.5" y1="25.5" x2="619.5" y2="48.5" gradientUnits="userSpaceOnUse">
          <stop className={styles.leftColor}/>
          <stop offset="1" className={styles.rightColor}/>
        </linearGradient>
        </defs>
    </svg>
  )
}
