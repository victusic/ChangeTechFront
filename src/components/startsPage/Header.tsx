'use client';
import React, { useState } from 'react';
import { useWindowResize } from '@/hooks/useWindowResize';
import { useTranslations } from 'next-intl';
import { Button, Select } from '@/ui';
import { BurgerMenu } from '@/assets/icons';

export const Header: React.FC = () => {
  const view = useWindowResize();
  const t = useTranslations('indexPage.startPlate.header');

  const [mobileView, setMobileView] = useState(false);

  return view < 4 ? (
    <div className="absolute w-[442px] flex justify-between right-0 top-0 sp:w-[363px] lt:w-[301px]">
      <Button variant="header">{t('howWork')}</Button>
      <Button variant="header">{t('about')}</Button>
      <Select variant="header" />
    </div>
  ) : (
    <div className="absolute w-auto flex flex-col [align-items:end] gap-1 stroke-ct-mainText right-0 top-0">
      <BurgerMenu
        onClick={() => setMobileView(!mobileView)}
        style={{
          transform: mobileView ? 'rotate(-90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}
      />
      {mobileView && (
        <>
          <Button variant="header">{t('howWork')}</Button>
          <Button variant="header">{t('about')}</Button>
          <Select variant="header" />
        </>
      )}
    </div>
  );
};
