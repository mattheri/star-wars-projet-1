import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import VehicleService from "../service/vehicle-service";
import VehiclesList from "./vehicles-list";

const vehiclesService = new VehicleService();

const Vehicles = () => {
  const [data, setData] = useState([]);

  const getVehicles = async () => {
    const { results } = await vehiclesService.getAll();

    setData(results);
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <Container className="pt-5">
      <h1>Vehicles</h1>
      <VehiclesList vehicles={data} />
    </Container>
  );
};

export default Vehicles;
