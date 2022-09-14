import { Container } from "react-bootstrap";
import FilmList from "../../films/components/film-list";
import useGetData from "../../hooks/useGetData";
import FilmService from "../../films/service/film-service";
import PlanetService from "../service/planets-service";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const filmService = new FilmService();
const planetService = new PlanetService();

const Planet = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getPlanet = async (id) => {
    const data = planetService.getById(id);
    setData(data);
  };

  const films = useGetData(filmService.getById.bind(filmService), data?.films);

  useEffect(() => {
    if (params.id) getPlanet(params.id);
  }, [params]);

  return (
    data && (
      <Container className="py-5">
        <Container fluid>
          <h1 className="pb-5 text-center">{data.name}</h1>
          <h4 className="text-center">{data.terrain}</h4>
        </Container>
        <Container fluid className="py-5">
          <h2 className="pt-3">Films</h2>
          <FilmList films={films} />
        </Container>
      </Container>
    )
  );
};

export default Planet;
