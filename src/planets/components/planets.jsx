import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useGetAll from "../../hooks/useGetAll";
import PlanetService from "../service/planets-service";
import PlanetList from "./planet-list";

const planetService = new PlanetService();

const Planets = () => {
  const data = useGetAll(planetService);

  return (
    <Container className="pt-5">
      <h1>Planets</h1>
      <PlanetList planets={data} />
    </Container>
  );
};

export default Planets;
