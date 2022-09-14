import React, { useEffect, useState } from "react";
import VehicleService from "../service/vehicle-service";
import { Container, Table } from "react-bootstrap";
import { getPropertiesArray } from "../../utils";
import useGetData from "../../hooks/useGetData";
import FilmService from "../../films/service/film-service";
import PeopleService from "../../people/service/people-service";
import FilmList from "../../films/components/film-list";
import PeopleList from "../../people/components/people-list";
import { useParams } from "react-router-dom";

const vehicleService = new VehicleService();
const filmService = new FilmService();
const peopleService = new PeopleService();

const Vehicle = () => {
  const [data, setData] = useState(null);
  const [props, setProps] = useState([]);
  const params = useParams();

  const getVehicule = async (id) => {
    const data = await vehicleService.getById(id);
    setData(data);
  };

  const films = useGetData(filmService.getById.bind(filmService), data?.films);

  const pilots = useGetData(
    peopleService.getById.bind(peopleService),
    data?.pilots
  );

  useEffect(() => {
    if (params.id) getVehicule(params.id);
  }, [params]);

  useEffect(() => {
    if (!data) return;

    const properties = getPropertiesArray(data, [
      "cargo_capacity",
      "consumables",
      "cost_in_credits",
      "crew",
      "max_atmosphering_speed",
      "passengers",
    ]);

    setProps(properties);
  }, [data]);

  return (
    data && (
      <Container className="pt-5">
        <Container fluid>
          <h1 className="text-center">{data.name}</h1>
          <h2 className="text-center pb-5">
            {data.model} - {data.manufacturer}
          </h2>
          <Table bordered striped hover>
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
          <h2>Films</h2>
          <FilmList films={films} />
        </Container>
        <Container className="py-5">
          <h2>Pilots</h2>
          <PeopleList data={pilots} />
        </Container>
      </Container>
    )
  );
};

export default Vehicle;
