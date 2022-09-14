import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUrlId } from "../../utils";

const PlanetCard = ({ url, name, population, terrain }) => {
  return (
    <Link to={`/planet/${getUrlId(url)}`}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>Terrain: {terrain}</Card.Subtitle>
        </Card.Header>
        <Card.Body>Population: {population}</Card.Body>
      </Card>
    </Link>
  );
};

export default PlanetCard;
