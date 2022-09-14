import React from "react";
import PeopleCard from "./people-card";

const PeopleList = ({ data }) => {
  return data.map((people) => (
    <PeopleCard
      url={people.url}
      name={people.name}
      birth_year={people.birth_year}
    />
  ));
};

export default PeopleList;
