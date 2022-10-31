import {
  HeaderStyled,
  NavbarStyled,
  NavItemStyled,
} from "../styles/header.styled";

import line from "../assets/PNG/line.png";
import clickyLogo from "../assets/PNG/group.png";

const Header = () => {
  const navbarList = [
    "Article",
    "Carousel",
    "Topics",
    "About",
    "Contact",
    "Enquiry",
  ];
  return (
    <HeaderStyled>
      <NavbarStyled>
        <img src={clickyLogo} alt="clicky logo" />

        {navbarList.map((navbarItem, i) => {
          navbarItem = navbarItem.toUpperCase();
          let path = "#" + navbarItem;
          return <NavItemStyled href={path.toLowerCase()}>{navbarItem}</NavItemStyled>;
        })}
      </NavbarStyled>
      <img src={line} alt="A blue line" width={"90%"} />
    </HeaderStyled>
  );
};

export default Header;
