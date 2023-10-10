import { OrbitControls } from "@react-three/drei";
import { Cube } from "./Cube";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1}/>
      <Cube />
    </>
  );
};
