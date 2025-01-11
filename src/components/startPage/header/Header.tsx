import React, { useState } from 'react';
import styles from './header.module.scss';
import { useWindowResize } from '@/hooks/useWindowResize';
import { Button } from '@/ui/button';
import { Select } from '@/ui/select';
import { BurgerMenu } from '@/assets/icons/menu/burgerMenu/burgerMenu';
import { useTranslations } from 'next-intl';

export const Header: React.FC = () => {
  const view = useWindowResize();
  const t = useTranslations('indexPage.startPlate.header');

  const [mobileView, setMobileView] = useState(false);

  return view < 4 ? (
    <div className={styles.headerPlateDesktop}>
      <Button variant="header">{t('howWork')}</Button>
      <Button variant="header">{t('about')}</Button>
      <Select variant="header" />
    </div>
  ) : (
    <div className={styles.headerPlateMobile}>
      <BurgerMenu
        onClick={() => setMobileView(!mobileView)}
        style={{
          transform: mobileView ? 'rotate(-90deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
        }}
      />
      {mobileView ? (
        <>
          <Button variant="header">{t('howWork')}</Button>
          <Button variant="header">{t('about')}</Button>
          <Select variant="header" />
        </>
      ) : null}
    </div>
  );
};
