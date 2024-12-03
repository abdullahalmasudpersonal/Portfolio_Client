import Particles from "react-tsparticles";
import particlesConfig from "./Particle.config";

const ParticleAnimi = () => {
  return (
    <div className="particle ">
      <Particles params={particlesConfig}></Particles>
    </div>
  );
};

export default ParticleAnimi;
