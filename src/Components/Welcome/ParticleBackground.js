import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../config/particle-config";

const ParticleBackground = () => {
  return <Particles className="canvas" params={ParticleConfig} />;
};

export default ParticleBackground;
