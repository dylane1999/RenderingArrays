import React from "react";
import styled from "styled-components";
import Person from "./Person";

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Spacing = styled.div`
  padding-bottom: 25px;
`;

const ForEachMethod = () => {
  let persons = [
    { id: 1, name: "mohi", position: "goalie", year: 12 },
    { id: 2, name: "dylan", position: "middie", year: 22 },
    { id: 3, name: "jordan", position: "kicker", year: 52 },
  ];

  let people = [];

  persons.forEach((person) => {
    people.push(
      <Spacing>
        <Person person={person} />
      </Spacing>
    );
  });

  return <Root>{people}</Root>;
};

export default ForEachMethod;
