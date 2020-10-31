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

const PostCard = (props) => {
  const people = [
    {
      name: "mohi",
      position: "goalie",
      year: 12,
    },
    {
      name: "dylan",
      position: "kicker",
      year: 12,
    },
    {
      name: "jacob",
      position: "middie",
      year: 12,
    },
  ];

  let persons = [
    { id: 1, name: "mohi", position: "goalie", year: 12 },
    { id: 2, name: "dylan", position: "middie", year: 22 },
    { id: 3, name: "jordan", position: "kicker", year: 52 },
  ];


  return (
    <Root>
      {persons.map((person) => (
        <Spacing>
        <Person person={person} key={person.id.toString()}/>
        </Spacing>
      ))}
    </Root>
  );
};

export default PostCard;
