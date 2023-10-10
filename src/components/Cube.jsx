import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";

export function Cube(props) {
  const { nodes, materials } = useGLTF('models/cube.gltf')
  const texture = useTexture("textures/bake.jpg");
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  })
  texture.flipY=false;
  return (
    <group {...props} dispose={null}>
      <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={textureMaterial} position={[0, 1, -3]} />
    </group>
  )
}

useGLTF.preload('models/cube.gltf')