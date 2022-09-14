import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FilmService from "../service/film-service";
import FilmList from "./film-list";

const filmService = new FilmService();

const Films = () => {
  const [data, setData] = useState([]);

  const getFilms = async () => {
    const data = await filmService.getAll();

    setData(data.results);
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <Container className="pt-5">
      <h1>Films</h1>
      <FilmList films={data} />
    </Container>
  );
};

export default Films;
