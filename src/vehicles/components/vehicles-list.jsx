import React from "react";
import VehicleCard from "./vehicle-card";

const VehiclesList = ({ vehicles }) => {
  return vehicles.map((vehicle) => (
    <VehicleCard
      url={vehicle.url}
      name={vehicle.name}
      model={vehicle.model}
      manufacturer={vehicle.manufacturer}
    />
  ));
};

export default VehiclesList;
