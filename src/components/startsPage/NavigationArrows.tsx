'use client';
import React from 'react';

export const NavigationArrows: React.FC = () => {
  return (
    <div className="absolute w-full h-full flex items-center justify-between pointer-events-none p-[25px] top-0 st:p-2 sm:p-[13px]">
      <p className="[font-family:'Russo_One'] text-[44px] not-italic font-normal leading-[normal] text-ct-mainText opacity-25 cursor-pointer [pointer-events:all] hover:opacity-60 active:opacity-100 sp:text-[32px] lt:text-[28px] sm:text-[33px]">
        ❮
      </p>
      <p className="[font-family:'Russo_One'] text-[44px] not-italic font-normal leading-[normal] text-ct-mainText opacity-25 cursor-pointer [pointer-events:all] hover:opacity-60 active:opacity-100 sp:text-[32px] lt:text-[28px] sm:text-[33px]">
        ❯
      </p>
    </div>
  );
};
