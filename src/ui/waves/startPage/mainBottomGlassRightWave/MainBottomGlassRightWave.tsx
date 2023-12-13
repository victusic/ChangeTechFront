'use client'
import React from 'react'
import styles from './mainBottomGlassRightWave.module.scss'

export const MainBottomGlassRightWave = ({...props}) => {
  return (
    <svg className={styles.waveSvg} viewBox="0 0 1072 760" fill="none">
    <g filter="url(#filter0_b_120_199)">
    <path d="M98.546 656.94C39.5184 696.963 0 760 0 760H1072V0.0548859C1072 0.0548859 930.434 -5.94855 820.883 107.618C711.332 221.184 741.346 309.736 701.327 430.307C661.308 550.877 596.278 592.402 478.723 603.408C361.168 614.415 321.15 593.402 257.12 596.904C193.09 600.406 157.573 616.916 98.546 656.94Z" className={styles.back} fill-opacity="0.15"/>
    </g>
      <defs>
        <filter id="filter0_b_120_199" x="-4" y="-4" width="1080" height="768" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_120_199"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_120_199" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}
