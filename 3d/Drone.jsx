import React from 'react';
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function DroneModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/drone/drone.gltf');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationToPlay = actions['Take 01'];
    animationToPlay.play({ autoplay: true }); //, reset: false
    animationToPlay.setLoop(Infinity);
  }, []);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2.365, 0, 0.4]}
          scale={0.35}
          ref={group}
        >
          <group name="Root">
            <group name="Circle" position={[1.378, 1.984, 0.607]} scale={0.421}>
              <mesh
                name="Circle_0"
                geometry={nodes.Circle_0.geometry}
                material={materials['Material.001']}
              />
              <mesh
                name="Circle_1"
                geometry={nodes.Circle_1.geometry}
                material={materials['Material.003']}
              />
            </group>
            <group name="Circle001" position={[3.077, 2.731, -0.052]}>
              <mesh
                name="Circle001_0"
                geometry={nodes.Circle001_0.geometry}
                material={materials['Material.001']}
              />
              <mesh
                name="Circle001_1"
                geometry={nodes.Circle001_1.geometry}
                material={materials['Material.003']}
              />
            </group>
            <group
              name="Cube"
              position={[0.016, 0.269, 0]}
              scale={[1.181, 1, 1]}
            >
              <mesh
                name="Cube_0"
                geometry={nodes.Cube_0.geometry}
                material={materials['Material.001']}
              />
              <mesh
                name="Cube_1"
                geometry={nodes.Cube_1.geometry}
                material={materials['Material.002']}
              />
            </group>
            <group
              name="Sphere"
              position={[0.048, 2.873, -0.188]}
              scale={[0.096, 0.096, 0.121]}
            >
              <mesh
                name="Sphere_0"
                geometry={nodes.Sphere_0.geometry}
                material={materials['Material.005']}
              />
            </group>
            <group
              name="Sphere001"
              position={[-0.002, -2.487, -0.124]}
              scale={[0.174, 0.13, 0.163]}
            >
              <mesh
                name="Sphere001_0"
                geometry={nodes.Sphere001_0.geometry}
                material={materials['Material.004']}
              />
            </group>
            <group
              name="Cube001"
              position={[1.136, 0.834, 0.278]}
              scale={[0.101, 0.05, 0.05]}
            >
              <mesh
                name="Cube001_0"
                geometry={nodes.Cube001_0.geometry}
                material={materials['Cylinder.001_0']}
              />
            </group>
            <group
              name="Circle002"
              position={[3.059, 2.733, 1.004]}
              rotation={[0, 0, 0.052]}
              scale={0.147}
            >
              <mesh
                name="Circle002_0"
                geometry={nodes.Circle002_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Circle003"
              position={[-3.035, 2.754, 1.004]}
              rotation={[0, 0, -1.435]}
              scale={0.147}
            >
              <mesh
                name="Circle003_0"
                geometry={nodes.Circle003_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Circle004"
              position={[-3.035, -2.19, 1.004]}
              rotation={[0, 0, -0.391]}
              scale={0.147}
            >
              <mesh
                name="Circle004_0"
                geometry={nodes.Circle004_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Circle005"
              position={[3.047, -2.187, 1.004]}
              rotation={[0, 0, -1.36]}
              scale={0.147}
            >
              <mesh
                name="Circle005_0"
                geometry={nodes.Circle005_0.geometry}
                material={materials.pale}
              />
            </group>
            <group
              name="Cylinder"
              position={[0.057, 3.094, 0.252]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.122}
            >
              <mesh
                name="Cylinder_0"
                geometry={nodes.Cylinder_0.geometry}
                material={materials['Cylinder.001_0']}
              />
            </group>
            <group
              name="Cylinder001"
              position={[-0.06, 3.094, 0.252]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.122}
            >
              <mesh
                name="Cylinder001_0"
                geometry={nodes.Cylinder001_0.geometry}
                material={materials['Cylinder.001_0']}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/drone/drone.gltf');
