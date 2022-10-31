import { TopicsStyled, TopicTableArea } from "../styles/topics.styled";

const Topics = () => {
  return (
    <TopicsStyled id="topics">
      <TopicTableArea>
        <table>
          <tr>
            <td>Accordion Topic One</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Accordion Topic Two</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Accordion Topic Three</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Accordion Topic Four</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Accordion Topic Five</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Accordion Topic Six</td>
            <td>+</td>
          </tr>
        </table>
      </TopicTableArea>
    </TopicsStyled>
  );
};

export default Topics;
