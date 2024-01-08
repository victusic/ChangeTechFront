import React, { useRef } from 'react'
import { StartScreen } from "../src/modules/startPage/startScreen"
import { MainWaves } from "../src/components/startPage/mainWaves"
import { StartBack } from "../src/ui/backs/startBack/StartBack"
import { SphereLayout } from "../src/components/startPage/sphereLayout"
import { NavigationArrows } from "../src/components/startPage/navigationArrows"
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const index = () => {
  const controls = useRef<typeof OrbitControls | null>(null);
  //<TabletModel/><DroneModel/><PhoneModel/><LaptopModel/>
  return (
    <StartBack>
      <MainWaves/>
      <StartScreen/>
      <SphereLayout/>
      <NavigationArrows/>
      <div style={{position: 'absolute', zIndex: 99999999, width: '400px', height: '400px', top: 0}}>
        <Canvas
          camera={{
            fov: 90,
            position: [0, 0, 3],
            rotation: [0,  0, 10],
          }}
        >
          <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/> 
          <ambientLight intensity={0.1} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />
          <CoffeeMachineModel/><TabletModel/><DroneModel/><PhoneModel/><LaptopModel/>
        </Canvas>
      </div>
      
    </StartBack>
  )
}

export default index

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TabletModel } from '../src/assets/3d/Tablet'
import { OrbitControls } from '@react-three/drei'
import { DroneModel } from '../src/assets/3d/Drone'
import { PhoneModel } from '../src/assets/3d/Phone'
import { LaptopModel } from '../src/assets/3d/Laptop'
import { CoffeeMachineModel } from '../src/assets/3d/CoffeeMachine'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['index'])),
    },
  }
}