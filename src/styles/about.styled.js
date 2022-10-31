// Imports the installed styled component library
import styled from "styled-components";

import rectangle from "../assets/PNG/rectangle-4.png";

export const AboutStyled = styled.div`
  text-align: center;
  /* border: solid 1px black; */
  /* padding: 10px; */
  width: auto;
  margin: 10px;
`;

export const AboutMembers = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
`;

export const AboutEach = styled.div`
  background-image: url(${rectangle});

  width: 200px;
  padding: 20px;
`;
