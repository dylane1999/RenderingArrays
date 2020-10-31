import React from "react";
import styled from "styled-components";

const AttributeWrapper = styled.div`
  padding-bottom: 25px;
  background-color: gray;
  padding: 25px;
  border-radius: 12px;
  padding-bottom: 25px;
`;

const Person = ({ person }) => {
  return (
    <AttributeWrapper>
      <p>{person.name}</p>
      <p>{person.position}</p>
      <p>{person.year}</p>
    </AttributeWrapper>
  );
};

export default Person;
