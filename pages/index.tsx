import React, { useRef } from 'react'
import { StartScreen } from "../src/modules/startPage/startScreen"
import { MainWaves } from "../src/components/startPage/mainWaves"
import { StartBack } from "../src/ui/backs/startBack/StartBack"
import { SphereLayout } from "../src/components/startPage/sphereLayout"
import { NavigationArrows } from "../src/components/startPage/navigationArrows"
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const index = () => {
  const controls = useRef<typeof OrbitControls | null>(null);
  /*
  <TabletModel/>
  <DroneModel/>
  <PhoneModel/>
  <LaptopModel/>
  <CoffeeMachineModel />

  <ambientLight intensity={1} />
  */

  return (
    <StartBack>
      <MainWaves/>
      <StartScreen/>
      <SphereLayout/>
      <NavigationArrows/>
      <div style={{position: 'absolute', zIndex: 99999999, width: '580px', height: '580px', top: '200px', left: '200px', background: '#ffffff11'}}>
        <Canvas
          camera={{
            type: "OrthographicCamera",
            zoom: 1,
            position: [0, 0, 5], 
          }}
        >
          <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/> 

          <ambientLight intensity={1.4} />
  
          <LaptopModel/>
        </Canvas>
      </div>
      
    </StartBack>
  )
}

export default index

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TabletModel } from '../src/assets/3d/Tablet'
import { OrbitControls, Shadow } from '@react-three/drei'
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