import React from "react";
import PlanetCard from "./planet-card";

const PlanetList = ({ planets }) => {
  return planets.map((planet) => (
    <PlanetCard
      url={planet.url}
      name={planet.name}
      population={planet.population}
      terrain={planet.terrain}
    />
  ));
};

export default PlanetList;
