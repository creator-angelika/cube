import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";

export function Cube(props) {
  const { nodes, materials } = useGLTF('models/cube.glb')
  const texture = useTexture("textures/bake.jpg");
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  })
  texture.flipY=false;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={textureMaterial}
        position={[0, 1, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={textureMaterial}
        position={[0, 1, -3]}
      />
    </group>
  )
}

useGLTF.preload('models/cube.glb')