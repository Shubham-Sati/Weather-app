import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 0.5rem; */
  padding: 0 1rem;
`;

const Button = styled.div`
  color: white;
  font-size: larger;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    border-color: red;
  }
`;

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <Wrapper>
      {cities.map((city) => (
        <Button key={city.id} onClick={() => setQuery({ q: city.title })}>
          {city.title}
        </Button>
      ))}
    </Wrapper>
  );
};

export default TopButtons;
