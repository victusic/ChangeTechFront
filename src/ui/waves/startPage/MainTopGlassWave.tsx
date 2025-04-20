'use client';
import React from 'react';

export const MainTopGlassWave = ({ ...props }) => {
  return (
    <svg
      className="absolute w-[907px] -top-10 sp:w-[619px] sp:top-0 lt:w-[495px] st:w-[552px] lm:w-[345px] sm:w-[230px]"
      viewBox="0 0 908 274"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_120_202)">
        <path
          d="M742.5 119C702.5 125.4 659.5 125 606 133.5C606 133.5 453.089 71.5 384 71.5C358 71.5 283.5 64.0388 218 120C166.5 164 118.898 222.311 93 239.5C36.5 277 0 273.5 0 273.5V0H907.5C907.5 0 892.5 95 742.5 119Z"
          className="fill-ct-lightGlass"
          fillOpacity="0.15"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_120_202"
          x="-4"
          y="-4"
          width="915.5"
          height="281.587"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_120_202"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_120_202"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
