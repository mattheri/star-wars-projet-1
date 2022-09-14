import React from "react";
import StarshipCard from "./starship-card";

const StarshipList = ({ data }) => {
  return data.map((starship) => (
    <StarshipCard
      url={starship.url}
      name={starship.name}
      model={starship.model}
      manufacturer={starship.manufacturer}
    />
  ));
};

export default StarshipList;
