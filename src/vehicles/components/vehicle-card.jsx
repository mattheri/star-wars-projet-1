import React from "react";
import { Card } from "react-bootstrap";
import { getUrlId } from "../../utils";
import { Link } from "react-router-dom";

const VehicleCard = ({ url, name, model, manufacturer }) => {
  return (
    <Link to={`/vehicle/${getUrlId(url)}`}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{model}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{manufacturer}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default VehicleCard;
