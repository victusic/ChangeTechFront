'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SelectProps {
  variant: 'footer' | 'header';
}

export const Select: React.FC<SelectProps> = ({ variant }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(`/${newLocale}`);
    setIsOpen(false);
  };

  const stylesDefault = (() => {
    switch (variant) {
      case 'footer':
        return 'relative';
      case 'header':
        return "relative [font-family:'Russo_One'] text-[20px] text-ct-mainText leading-[normal] [background:none] border-[none] sp:text-[18px] lt:text-[16px]";
      default:
        return '';
    }
  })();

  const stylesUl = (() => {
    switch (variant) {
      case 'footer':
        return '';
      case 'header':
        return 'absolute [list-style:none] p-0 right-1 top-[85%]';
      default:
        return '';
    }
  })();

  const stylesLi = (() => {
    switch (variant) {
      case 'footer':
        return '';
      case 'header':
        return 'cursor-pointer text-right p-1';
      default:
        return '';
    }
  })();

  return (
    <div ref={dropdownRef} className={stylesDefault}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer"
      >
        EN
        <div
          className="w-0 h-0 border-l-ct-mainText transition-transform duration-[0.3s] ease-[ease] ml-1 border-l-[6px] border-y-[6px] border-y-[transparent] border-solid"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(270deg)' }}
        />
      </div>
      {isOpen && (
        <ul className={stylesUl}>
          <li onClick={() => handleLanguageChange('en')} className={stylesLi}>
            EN
          </li>
          <li onClick={() => handleLanguageChange('ru')} className={stylesLi}>
            RU
          </li>
          <li onClick={() => handleLanguageChange('kz')} className={stylesLi}>
            KZ
          </li>
        </ul>
      )}
    </div>
  );
};
