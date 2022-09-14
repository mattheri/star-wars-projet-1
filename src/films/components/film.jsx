import { Container } from "react-bootstrap";
import useGetData from "../../hooks/useGetData";
import StarshipService from "../../starships/service/starship-service";
import VehiclesList from "../../vehicles/components/vehicles-list";
import VehicleService from "../../vehicles/service/vehicle-service";
import FilmService from "../service/film-service";
import StarshipList from "../../starships/components/starship-list";
import PeopleService from "../../people/service/people-service";
import PeopleList from "../../people/components/people-list";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const filmService = new FilmService();
const vehicleService = new VehicleService();
const starshipService = new StarshipService();
const peopleService = new PeopleService();

const Film = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getFilm = async (id) => {
    const film = await filmService.getById(id);

    setData(film);
  };

  const vehicles = useGetData(
    vehicleService.getById.bind(vehicleService),
    data?.vehicles
  );

  const starships = useGetData(
    starshipService.getById.bind(starshipService),
    data?.starships
  );

  const people = useGetData(
    peopleService.getById.bind(peopleService),
    data?.characters
  );

  useEffect(() => {
    if (params.id) getFilm(params.id);
  }, [params]);

  return (
    data && (
      <Container className="py-5">
        <Container fluid>
          <h1 className="pb-5 text-center">{data.title}</h1>
          <h4 className="text-center">{data.opening_crawl}</h4>
        </Container>
        <Container fluid className="py-5">
          <h2>People</h2>
          <PeopleList data={people} />
        </Container>
        <Container fluid className="py-5">
          <h2 className="pt-3">Vehicles</h2>
          <VehiclesList vehicles={vehicles} />
        </Container>
        <Container fluid className="py-5">
          <h2 className="pt-3">Starships</h2>
          <StarshipList data={starships} />
        </Container>
      </Container>
    )
  );
};

export default Film;
