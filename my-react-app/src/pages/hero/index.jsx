import React from "react";
import BoxMenu from "../../components/BoxHero";

import { Heros } from "./styles";

const Hero = () => {
  return (
    <Heros>
      <div className="hero-menu">
        <h2>Bem vindo ao MyRank</h2>
        <BoxMenu />
      </div>
    </Heros>
  );
};

export default Hero;
