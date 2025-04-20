'use client';
import React from 'react';

export const MainBottomLeftWave = ({ ...props }) => {
  return (
    <svg
      className="absolute w-[762px] -bottom-10 sp:w-[542px] sp:-bottom-7 lt:w-[406px] lt:bottom-0 st:w-[309px] lm:w-[190px] sm:w-[127px]"
      viewBox="0 0 762 351"
      fill="none"
      {...props}
    >
      <path
        d="M33 0C13 -0.000325414 0 2.00012 0 2.00012V351H762C762 351 749.859 337.141 741.5 329.5C733.915 322.567 729.339 319.006 721 313C707.359 303.176 698.99 298.61 684 291C669.414 283.596 660.892 280.039 645.5 274.5C629.802 268.852 620.651 266.68 604.5 262.5C581.699 256.599 569 253.5 545.5 250C512.384 245.068 493.47 243.667 461 235.5C443.624 231.13 433.841 228.616 417 222.5C399.166 216.024 389.699 211.5 372.5 203C359.577 196.614 352.165 193.233 340 185.5C326.586 176.973 320.012 170.802 307.5 161C287.091 145.013 256.5 118.5 256.5 118.5C241.43 105.849 233.282 98.394 218 86.0002C205.47 75.8384 198.5 69.7774 185.5 60.5002C171.701 50.6525 163.649 45.533 149 37.0002C135.264 28.9991 127 25.0001 113 18.0002C99.7451 11.3728 80.1153 5.74736 77.5 5.00012C74.8847 4.25288 64.5 2.11122 64 2.00012C63.5 1.88902 53 0.000325573 33 0Z"
        fill="url(#paint0_linear_120_196)"
        fillOpacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_120_196"
          x1="1.19221e-05"
          y1="161.5"
          x2="632"
          y2="318.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="[stop-color:var(--mainBottomLeftWaveLeft)]" />
          <stop
            offset="1"
            className="[stop-color:var(--mainBottomLeftWaveRight)]"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
