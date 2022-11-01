import React from "react";
import BoxMenu from "../../components/BoxHero";

import { Heros } from "./styles";

const Hero = () => {
  return (
    <Heros>
      <div className="hero-menu">
        <BoxMenu />
      </div>
    </Heros>
  );
};

export default Hero;
