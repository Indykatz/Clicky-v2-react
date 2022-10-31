import LoremIpsum from "react-lorem-ipsum";
import { HStyles } from "../styles/app.styled";
import { Enquirystyled } from "../styles/enquiry.styled";

const Enquiry = () => {
  return (
    <Enquirystyled is="enquiry">
        <div>
          <HStyles>Make an Enquiry</HStyles>
          <LoremIpsum avgWordsPerSentence={1} random={false} />
          <form>
            <label>First Name:</label>
            <input type="text" />
            <label>Surname:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="text" />
            <label>Mobile:</label>
            <input type="text" />
            <label>Message:</label>
            <input type="text" />
          </form>
        </div>
    </Enquirystyled>
  );
};

export default Enquiry;
