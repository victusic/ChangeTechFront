import { MainWaves } from '@/components/startsPage/MainWaves';
import { NavigationArrows } from '@/components/startsPage/NavigationArrows';
import { SphereView } from '@/components/startsPage/SphereView';
import { StartScreen } from '@/modules/startsPage/StartScreen';
import { StartBack } from '@/ui';
import dynamic from 'next/dynamic';

// const Plate3d = dynamic(() => import('../../components/startsPage/Plate3d'), {
//   ssr: false,
// });

export default function Home() {
  return (
    <StartBack>
      <MainWaves />
      <StartScreen />
      <SphereView />
      <NavigationArrows />
      {/* <Plate3d /> */}
    </StartBack>
  );
}

