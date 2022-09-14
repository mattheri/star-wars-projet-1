import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUrlId } from "../../utils";

const PeopleCard = ({ url, name, birth_year }) => {
  return (
    <Link to={`/people/${getUrlId(url)}`}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{birth_year}</Card.Subtitle>
        </Card.Header>
      </Card>
    </Link>
  );
};

export default PeopleCard;
