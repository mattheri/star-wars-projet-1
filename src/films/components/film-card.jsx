import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCorrectSuffix, getFullDate, getUrlId } from "../../utils";

const FilmCard = ({ episode_id, release_date, url, title }) => {
  const suffix = getCorrectSuffix(episode_id);
  const createdDate = getFullDate(release_date);

  return (
    <Link to={`/film/${getUrlId(url)}`}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            {episode_id}
            {suffix} film
          </Card.Subtitle>
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Released on {createdDate}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  );
};

export default FilmCard;
