/* eslint-disable @typescript-eslint/no-explicit-any */
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MyParticles = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#000" },
        particles: {
          color: { value: "#ffffff" },
          move: { enable: true, speed: 2 },
          number: { value: 80 },
          shape: { type: "circle" },
        },
      }}
    />
  );
};

export default MyParticles;
