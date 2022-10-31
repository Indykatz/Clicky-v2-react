// Imports the installed styled component library
import styled from "styled-components";

export const HeaderStyled = styled.div`
  text-align: center;
  /* border: solid 1px black; */
  padding: 10px;
  width: auto;
  /* margin: 10px; */
  margin-bottom: 30px;
`;

export const NavbarStyled = styled.div`
  padding: 10px;
  width: auto;
  /* Flex box */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

// The styles for NavItemStyled
// A HTML div
export const NavItemStyled = styled.a`
  /* border: solid 1px black; */
  padding: 10px;
  font-size: 10px;
  margin: 10px;
  margin-right: 20px;
  color: #6db1d4;
  text-decoration: none;
`;
