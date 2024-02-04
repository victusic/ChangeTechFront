import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import classNames from 'classnames';
import styles from './Plate3d.module.scss';
import { TabletModel } from '../../../src/assets/3d/Tablet';
import { DroneModel } from '../../../src/assets/3d/Drone';
import { PhoneModel } from '../../../src/assets/3d/Phone';
import { LaptopModel } from '../../../src/assets/3d/Laptop';
import { CoffeeMachineModel } from '../../../src/assets/3d/CoffeeMachine';
import { useWindowResize } from '@/hooks/useWindowResize';
import { useSelector } from 'react-redux';
import type { RootState } from '../../state';

const cx = classNames.bind(styles);

export const Plate3d: React.FC = () => {
  const view = useWindowResize();

  return (
    <>
      {view < 3 ? (
        <I3dBlock />
      ) : (
        <div className={styles.mobile3dPlate}>
          <I3dBlock />
        </div>
      )}
    </>
  );
};

const I3dBlock: React.FC = () => {
  const productType = useSelector((state: RootState) => state.typeProduct);
  return (
    <div className={cx(styles.plate3d)}>
      <Canvas
        camera={{
          type: 'OrthographicCamera',
          zoom: 1,
          position: [0, 0, 5],
        }}
      >
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

        <ambientLight intensity={1.4} />

        {productType.type === 0 && <TabletModel />}
        {productType.type === 1 && <DroneModel />}
        {productType.type === 2 && <PhoneModel />}
        {productType.type === 3 && <LaptopModel />}
        {productType.type === 4 && <CoffeeMachineModel />}

        <TabletModel />
      </Canvas>
    </div>
  );
};
