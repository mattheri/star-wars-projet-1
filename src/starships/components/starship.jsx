import React from "react";
import StarshipService from "../service/starship-service";
import useGetData from "../../hooks/useGetData";
import PeopleService from "../../people/service/people-service";
import FilmService from "../../films/service/film-service";
import { Container } from "react-bootstrap";
import FilmList from "../../films/components/film-list";
import PeopleList from "../../people/components/people-list";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const starshipService = new StarshipService();
const peopleService = new PeopleService();
const filmService = new FilmService();

const Starship = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getStarship = async (id) => {
    const data = await starshipService.getById(id);
    setData(data);
  };

  const people = useGetData(
    peopleService.getById.bind(peopleService),
    data?.pilots
  );

  const films = useGetData(filmService.getById.bind(filmService), data?.films);

  useEffect(() => {
    if (params.id) getStarship(params.id);
  }, [params]);

  return (
    data && (
      <Container className="pt-5">
        <Container fluid>
          <h1 className="text-center">{data.name}</h1>
          <h2 className="text-center pb-5">
            {data.model} - {data.starship_class}
          </h2>
        </Container>
        <Container fluid className="py-5">
          <h2>Films</h2>
          <FilmList films={films} />
        </Container>
        <Container fluid className="py-5">
          <h2>Characters</h2>
          <PeopleList data={people} />
        </Container>
      </Container>
    )
  );
};

export default Starship;
