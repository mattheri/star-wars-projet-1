import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUrlId } from "../../utils";

const StarshipCard = ({ url, name, model, manufacturer }) => {
  return (
    <Link to={`/starships/${getUrlId(url)}`}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{model}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>Made by: {manufacturer}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StarshipCard;
