import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import StarshipService from "../service/starship-service";
import StarshipList from "./starship-list";

const starshipService = new StarshipService();

const Starships = () => {
  const [data, setData] = useState([]);

  const getStarships = async () => {
    const data = await starshipService.getAll();
    setData(data);
  };

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <Container className="pt-5">
      <h1>Starships</h1>
      <StarshipList data={data} />
    </Container>
  );
};

export default Starships;
