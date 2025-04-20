import { useWindowResize } from '@/hooks/useWindowResize';
import { RootState } from '@/state';
// import { CoffeeMachineModel } from '@/ui';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useSelector } from 'react-redux';

// const Plate3d: React.FC = () => {
//   const view = useWindowResize();

//   return (
//     <>
//       {view < 3 ? (
//         <I3dBlock />
//       ) : (
//         <div className="absolute w-full flex justify-center top-[220px]">
//           <I3dBlock />
//         </div>
//       )}
//     </>
//   );
// };

// const I3dBlock = () => {
//   const productType = useSelector((state: RootState) => state.typeProduct);
//   return (
//     <div className="absolute w-[580px] h-[580px] z-[1100] left-[315px] bottom-7.5 local1680:w-[520px] local1680:h-[520px] local1680:left-[200px] local1680:bottom-1.25 sp:w-[460px] sp:h-[460px] sp:left-[200px] sp:bottom-3.75 local1170:left-[120px] lt:relative lt:w-[380px] lt:h-[380px] lt:left-[unset] lt:inset-y-[unset] lm:w-[300px] lm:h-[300px] sm:w-[250px] sm:h-[250px]">
//       <Canvas
//         camera={{
//           type: 'OrthographicCamera',
//           zoom: 1,
//           position: [0, 0, 5],
//         }}
//       >
//         <OrbitControls
//           enableZoom={false}
//           minPolarAngle={Math.PI / 2}
//           maxPolarAngle={Math.PI / 2}
//         />

//         {/* <ambientLight intensity={1.4} />

//         {productType.type === 0 && <TabletModel />}
//         {productType.type === 1 && <DroneModel />}
//         {productType.type === 2 && <PhoneModel />}
//         {productType.type === 3 && <LaptopModel />} */}
//         {/* {productType.type === 4 && <CoffeeMachineModel />}

//         <CoffeeMachineModel /> */}
//       </Canvas>
//     </div>
//   );
// };

// export default Plate3d;
