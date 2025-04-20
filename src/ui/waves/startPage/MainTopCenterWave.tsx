'use client';
import React from 'react';

export const MainTopCenterWave = ({ ...props }) => {
  return (
    <svg
      className="absolute w-[766px] left-[495px] -top-7.5 sp:w-[522px] sp:left-[338px] sp:top-0 lt:w-[418px] lt:left-[270px] st:w-[466px] st:left-[300px] lm:w-[291px] lm:left-[200px] sm:w-[194px] sm:left-[125px]"
      viewBox="0 0 767 137"
      fill="none"
      {...props}
    >
      <path
        d="M154 82C62.4999 82 0 0 0 0H766.286C766.286 0 718 131.16 576.5 136.5C470.5 140.5 419 48.5 319 48.5C253.249 48.5 231.5 82 154 82Z"
        fill="url(#paint0_linear_120_203)"
        fillOpacity="0.4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_120_203"
          x1="196.5"
          y1="25.5"
          x2="619.5"
          y2="48.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="[stop-color:var(--mainTopCenterWaveLeft)]" />
          <stop
            offset="1"
            className="[stop-color:var(--mainTopCenterWaveRight)]"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
