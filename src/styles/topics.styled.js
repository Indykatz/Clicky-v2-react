// Imports the installed styled component library
import styled from "styled-components";
import blueBackground from "../assets/PNG/rectangle-5.png";

export const TopicsStyled = styled.div`
  background-image: url(${blueBackground});
  text-align: center;
  /* border: solid 1px black; */
  padding: 10px;
  width: auto;
  /* margin: 10px; */
`;

export const TopicTableArea = styled.div`
  margin: auto;
  width: 50%;
  /* border: 1px solid black; */
  padding: 10px;
`;
