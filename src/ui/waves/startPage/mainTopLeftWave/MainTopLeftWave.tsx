'use client'
import React from 'react'
import styles from './mainTopLeftWave.module.scss'

export const MainTopLeftWave = ({...props}) => {
  return (
    <svg viewBox='0 0 908 440' className={styles.waveSvg} fill="none" {...props}>
    <path d="M258 330.5C155.5 426.5 0 440 0 440V0H907.5C907.5 0 892.5 95 742.5 119C702.5 125.4 533.5 129.892 465.5 174.5C381.344 229.706 331.46 261.698 258 330.5Z" fill="url(#paint0_linear_120_201)"/>
        <defs>
            <linearGradient id="paint0_linear_120_201" x1="-1.08641e-05" y1="337" x2="527" y2="42.5" gradientUnits="userSpaceOnUse">
            <stop className={styles.leftColor}/>
            <stop offset="1" className={styles.rightColor}/>
            </linearGradient>
        </defs>
    </svg>
  )
}
