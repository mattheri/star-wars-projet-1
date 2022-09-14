import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FilmList from "../../films/components/film-list";
import FilmService from "../../films/service/film-service";
import useGetData from "../../hooks/useGetData";
import StarshipList from "../../starships/components/starship-list";
import StarshipService from "../../starships/service/starship-service";
import { getPropertiesArray } from "../../utils";
import VehiclesList from "../../vehicles/components/vehicles-list";
import VehicleService from "../../vehicles/service/vehicle-service";
import PeopleService from "../service/people-service";

const peopleService = new PeopleService();
const vehicleService = new VehicleService();
const filmService = new FilmService();
const starshipService = new StarshipService();

const People = () => {
  const [data, setData] = useState(null);
  const [props, setProps] = useState([]);
  const params = useParams();

  const getCharacter = async (id) => {
    const data = await peopleService.getById(id);
    setData(data);
  };

  const vehicles = useGetData(
    vehicleService.getById.bind(vehicleService),
    data?.vehicles
  );

  const films = useGetData(filmService.getById.bind(filmService), data?.films);

  const starships = useGetData(
    starshipService.getById.bind(starshipService),
    data?.starships
  );

  useEffect(() => {
    if (params.id) getCharacter(params.id);
  }, [params]);

  useEffect(() => {
    if (!data) return;

    /**
     * Ignorer ce bout de code. Ce n'est pas nécessaire pour compléter l'application.
     *
     * La fonction getPropertiesArray va chercher les propriétés dans l'array, met la clé dans un array et met la propriété dans le même array.
     */
    setProps(
      getPropertiesArray(data, [
        "birth_year",
        "eye_color",
        "hair_color",
        "mass",
        "skin_color",
      ])
    );
  }, [data]);

  return (
    data && (
      <Container className="pt-5">
        <Container fluid>
          <h1 className="text-center">{data.name}</h1>
          <Table striped bordered hover>
            <tbody>
              {props.map((prop) => (
                <tr key={prop[0]}>
                  <td>{prop[0]}</td>
                  <td>{prop[1]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
        <Container className="py-5">
          <h2>Vehicles</h2>
          <VehiclesList vehicles={vehicles} />
        </Container>
        <Container className="py-5">
          <h2>Films</h2>
          <FilmList films={films} />
        </Container>
        <Container className="py-5">
          <h2>Starships</h2>
          <StarshipList data={starships} />
        </Container>
      </Container>
    )
  );
};

export default People;
