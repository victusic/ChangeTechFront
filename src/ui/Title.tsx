import React, { ReactNode } from 'react';

interface TitleProps {
  variant: 'underLogo' | 'startPlate';
  children: ReactNode;
  className?: string;
}

export const Title: React.FC<TitleProps> = ({
  variant = '',
  children,
  className,
  ...rest
}) => {
  const styles = (() => {
    switch (variant) {
      case 'underLogo':
        return "cursor-default [font-family:'Russo_One'] text-[22px] w-[324px] text-ct-mainText tracking-[0.88px] mt-[11px] sp:w-[286px] sp:text-3 sp:mt-3.75 lt:w-[246px] lt:text-[16px] lt:mt-[19px] st:text-[16px] st:mt-[29px] lm:w-[206px] lm:text-[14px] lm:mt-[25px] sm:w-[166px] sm:text-[10px] sm:mt-[9px]";
      case 'startPlate':
        return 'cursor-default absolute w-[304px] text-ct-mainText text-right [font-family:Russo_One] text-[18px] not-italic font-normal leading-[173.5%] right-[388px] bottom-[334px] sp:w-[221px] sp:text-[16px] sp:right-36 sp:bottom-[194px] lt:text-[14px] lt:right-[186px] lt:bottom-[174px] st:text-center st:right-[23px] st:bottom-[184px] lm:text-[12px] lm:-right-2.5 lm:bottom-[108px] sm:relative sm:w-[145px] sm:text-[9px] sm:right-[unset] sm:bottom-[unset]';
      default:
        return '';
    }
  })();

  return (
    <p className={styles} {...rest}>
      {children}
    </p>
  );
};
