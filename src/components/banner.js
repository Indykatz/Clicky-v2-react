import LoremIpsum from "react-lorem-ipsum";
import { BannerStyled, BannerTextStyled } from "../styles/banner.styled";

const Banner = () => {
  return (
    <BannerStyled id="banner">
      {/* <img src={clouds} alt="clouds" /> */}
      <BannerTextStyled>
        <h1>Here is a title</h1>
        <LoremIpsum avgWordsPerSentence={2} random={false} />
        <button>CBA BUTTON</button>
      </BannerTextStyled>
    </BannerStyled>
  );
};

export default Banner;
