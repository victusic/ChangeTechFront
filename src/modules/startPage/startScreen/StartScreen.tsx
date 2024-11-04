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
import { useTranslation } from 'next-i18next';
import styles from './startScreen.module.scss';
import { NavigationSphere } from '@/components/startPage/navigationSphere';

export const StartScreen: React.FC = () => {
  const { t } = useTranslation('index');
  const view = useWindowResize();

  return (
    <ElementsPlate>
      <Logo />
      <Title variant="underLogo">{t('startPlate.underLogoText')}</Title>
      <Header />
      {view !== 6 ? (
        <>
          <Title variant="startPlate">{t('startPlate.PreviewTextPhone')}</Title>
          <Button variant="startPlate">{t('startPlate.startButton')}</Button>
        </>
      ) : (
        <div className={styles.mobileButtonPlate}>
          <Title variant="startPlate">{t('startPlate.PreviewTextPhone')}</Title>
          <Button variant="startPlate">{t('startPlate.startButton')}</Button>
        </div>
      )}

      <div></div>
      <Telegram />
      <Git />
      <Cv />
      <Linked />

      <NavigationSphere />
    </ElementsPlate>
  );
};
