import LoremIpsum from "react-lorem-ipsum";
import {
  ArticleImage,
  ArticleStyled,
  ArticleText,
} from "../styles/article.styled";
import lake from "../assets/PNG/riccardo-chiarini-365677-unsplash.png";
import { HStyles } from "../styles/app.styled";

const Article = () => {
  return (
    <ArticleStyled id="article">
      <ArticleText>
        <HStyles>Here is a title</HStyles>
        <b>
          <LoremIpsum p={1} avgWordsPerSentence={2} random={false} />
        </b>
        <LoremIpsum p={2} avgWordsPerSentence={5} random={false} />
      </ArticleText>
      <ArticleImage
        src={lake}
        alt="lake with flowers"
        style={{
          width: "50%",
          height: "300px",
          objectfit: "contain",
          marginRight: "auto",
        }}
      />
    </ArticleStyled>
  );
};

export default Article;
