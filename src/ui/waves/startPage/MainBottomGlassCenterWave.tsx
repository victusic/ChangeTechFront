'use client';
import React from 'react';

export const MainBottomGlassCenterWave = () => {
  return (
    <svg
      className="absolute w-[1486px] right-0 -bottom-10 sp:w-[1057px] sp:-bottom-7 lt:w-[792px] lt:bottom-0 st:w-[594px] lm:w-[371px] sm:w-[248px]"
      viewBox="0 0 1486 473"
      fill="none"
    >
      <g filter="url(#filter0_b_120_198)">
        <path
          d="M67.5 362.934C26.8257 392.697 0 472.934 0 472.934H1486V0C1486 0 1441.5 6 1360.5 62.5C1284.19 115.729 1269 168 1207.5 245C1134.3 336.649 1078 384.5 950.5 397.5C834.261 409.352 767.916 384.3 659 342C592.647 316.231 495 257.5 495 257.5C487.5 263 457.515 285.656 431 299.434C335.156 349.236 221.5 317.934 156 328.934C119.329 335.093 97.509 340.975 67.5 362.934Z"
          className="fill-ct-lightGlass"
          fillOpacity="0.15"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_120_198"
          x="-4"
          y="-4"
          width="1494"
          height="480.934"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_120_198"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_120_198"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
