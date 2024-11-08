import { StartScreen } from '../src/modules/startPage/startScreen';
import { MainWaves } from '../src/components/startPage/mainWaves';
import { StartBack } from '../src/ui/backs/startBack/StartBack';
import { SphereLayout } from '../src/components/startPage/sphereLayout';
import { NavigationArrows } from '../src/components/startPage/navigationArrows';
import { Plate3d } from '../src/ui/Plate3d';

const index = () => {
  return (
    <StartBack>
      <MainWaves />
      <StartScreen />
      <SphereLayout />
      <NavigationArrows />
      <Plate3d />
    </StartBack>
  );
};

export default index;

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
    },
  };
}
