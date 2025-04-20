'use client';

import { CvIcon, GitIcon, LinkedInIcon, TelegramIcon } from '@/assets/icons';
import { ElementsPlate } from '@/components/inclusive/ElementsPlate';
import { Header } from '@/components/startsPage/Header';
import { NavigationSphere } from '@/components/startsPage/NavigationSphere';
import { useWindowResize } from '@/hooks/useWindowResize';
import { Button, Logo, Title } from '@/ui';
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
        <div className="w-full flex flex-col items-center justify-between h-9 absolute bottom-7.5">
          <Title variant="startPlate">{t('PreviewTextPhone')}</Title>
          <Button variant="startPlate">{t('startButton')}</Button>
        </div>
      )}

      <div className="absolute cursor-pointer text-ct-mainText left-0 bottom-[130px] sp:w-4 sp:h-4 sp:bottom-[114px] lt:w-3.5 lt:h-3.5 lt:bottom-12 st:w-3.5 st:h-3.5 st:bottom-12 lm:w-3 lm:h-3 lm:bottom-[94px] sm:w-2.5 sm:h-2.5 sm:bottom-[70px] hover:text-ct-sphere3 active:text-ct-sphere1">
        <TelegramIcon className="size-[35px]" />
      </div>

      {/* <GitIcon />
      <CvIcon />
      <LinkedInIcon /> */}

      <NavigationSphere />
    </ElementsPlate>
  );
};
