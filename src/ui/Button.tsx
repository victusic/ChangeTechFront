'use client';
import React, { ReactNode, ElementType } from 'react';
import Link from 'next/link';

interface ButtonProps<T extends ElementType = 'button'> {
  as?: T;
  variant: 'startPlate' | 'header';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  children: ReactNode;
  className?: string;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = '',
  disabled,
  type,
  children,
  className,
  to,
  ...rest
}) => {
  const styles = (() => {
    switch (variant) {
      case 'header':
        return "[font-family:'Russo_One'] text-[20px] text-ct-mainText leading-[normal] [background:none] border-[none] sp:text-[18px] lt:text-[16px]";
      case 'startPlate':
        return "absolute w-[314px] h-[82px] [background:linear-gradient(_86deg,var(--accentButtonLeft)_0.58%,var(--accentButtonRight)_96.16%_)] shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] text-ct-mainText [font-family:'Russo_One'] text-[26px] not-italic font-normal rounded-[90px] border-[none] right-[388px] bottom-[176px] hover:[background:linear-gradient(_86deg,var(--accentButtonLeftHover)_0.58%,var(--accentButtonRightHover)_96.16%_)] active:[background:linear-gradient(_86deg,var(--accentButtonLeftActive)_0.58%,var(--accentButtonRightActive)_96.16%_)] sp:w-[207px] sp:h-[54px] sp:text-[17px] sp:right-36 sp:bottom-[103px] lt:w-[180px] lt:h-5.75 lt:text-[15px] lt:right-[206px] lt:bottom-[103px] st:right-[43px] st:bottom-[108px] lm:w-[170px] lm:h-5.25 lm:text-[14px] lm:right-0 lm:bottom-6 sm:relative sm:w-[140px] sm:h-4 sm:text-3 sm:right-[unset] sm:bottom-[unset]";
      default:
        return '';
    }
  })();

  return to ? (
    <Link href={to}>
      <button className={styles} disabled={disabled} type={type} {...rest}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={styles} disabled={disabled} type={type} {...rest}>
      {children}
    </button>
  );
};
