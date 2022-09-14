import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import PeopleService from "../service/people-service";
import PeopleList from "./people-list";

const peopleService = new PeopleService();

const Peoples = () => {
  const [data, setData] = useState([]);

  const getPeople = async () => {
    const data = await peopleService.getAll();
    setData(data);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <Container className="pt-5">
      <h1>Characters</h1>
      <PeopleList data={data} />
    </Container>
  );
};

export default Peoples;
