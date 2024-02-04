import React from 'react';
import styles from './header.module.scss';
import { useWindowResize } from '@/hooks/useWindowResize';
import { Button } from '@/ui/button';
import { useTranslation } from 'next-i18next';
import { Select } from '@/ui/select';

export const Header: React.FC = () => {
  const view = useWindowResize();
  const { t } = useTranslation('index');

  return view < 4 ? (
    <div className={styles.headerPlateDesktop}>
      <Button variant="header">{t('startPlate.header.howWork')}</Button>
      <Button variant="header">{t('startPlate.header.about')}</Button>
      <Select variant="header" />
    </div>
  ) : (
    <div></div>
  );
};
