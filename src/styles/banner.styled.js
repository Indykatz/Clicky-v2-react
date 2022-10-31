// Imports the installed styled component library
import styled from "styled-components";
import clouds from "../assets/PNG/elena-prokofyeva-17909-unsplash.png";

export const BannerStyled = styled.div`
  background-image: url(${clouds});
  background-color: #919191;
  background-blend-mode: multiply;

  background-position: center;
  text-align: center;
  /* border: solid 1px black; */
  padding: 10%;
  width: auto;
  /* margin: 10px; */
`;

export const BannerTextStyled = styled.div`
  margin: auto;
  width: 50%;
  /* border: 1px solid black; */
  padding: 10px;
  color: #ffff;
`;
