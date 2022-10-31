// Imports the installed styled component library
import styled from "styled-components";

import carouselbackground from "../assets/PNG/kalen-emsley-98264-unsplash.png";

export const CarouselStyled = styled.div`
  text-align: center;
  /* border: solid 1px black; */
  padding: 10px;
  width: auto;
  /* margin: 10px; */
`;

export const CarouselBox = styled.div`
  background-image: url(${carouselbackground});
  background-position: center;

  margin: auto;
  width: 50%;
  /* border: 1px solid black; */
  padding: 10px;
`;
