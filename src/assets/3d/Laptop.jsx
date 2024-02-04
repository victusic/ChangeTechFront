import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF('./models/laptop/laptop.gltf');
  return (
    <group {...props} dispose={null} scale={1.2} position={[0, -0.8, 0]} rotation={[0, 0, -0.105]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Black_plastic} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.black_plastic_3} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Advert_emission} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.power_button_emission} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.metal_2} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Silicon} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.dark} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.screen} />
    </group>
  );
}

useGLTF.preload('./models/laptop/laptop.gltf');
