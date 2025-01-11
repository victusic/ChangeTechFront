import React from 'react';
import Cv from '@/assets/icons/links/cv/Cv';
import Git from '@/assets/icons/links/git/Git';
import Linked from '@/assets/icons/links/linked/Linked';
import Telegram from '@/assets/icons/links/telegram/Telegram';
import { ElementsPlate } from '@/components/elementsPlate/ElementsPlate';
import { Header } from '@/components/startPage/header';
import { useWindowResize } from '@/hooks/useWindowResize';
import { Button } from '@/ui/button';
import { Logo } from '@/ui/logo/Logo';
import { Title } from '@/ui/title';
import styles from './startScreen.module.scss';
import { NavigationSphere } from '@/components/startPage/navigationSphere';
import { useTranslations } from 'next-intl';

export const StartScreen: React.FC = () => {
  const view = useWindowResize();
  const t = useTranslations('indexPage.startPlate');

  return (
    <ElementsPlate>
      <Logo />
      <Title variant="underLogo">{t('underLogoText')}</Title>
      <Header />
      {view !== 6 ? (
        <>
          <Title variant="startPlate">{t('PreviewTextPhone')}</Title>
          <Button variant="startPlate">{t('startButton')}</Button>
        </>
      ) : (
        <div className={styles.mobileButtonPlate}>
          <Title variant="startPlate">{t('PreviewTextPhone')}</Title>
          <Button variant="startPlate">{t('startButton')}</Button>
        </div>
      )}

      <Telegram />
      <Git />
      <Cv />
      <Linked />

      <NavigationSphere />
    </ElementsPlate>
  );
};
