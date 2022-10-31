import { ContactStyled } from "../styles/contact.styled";

import phone from "../assets/PNG/phone-call-1.png";
import { HStyles } from "../styles/app.styled";

const Contact = () => {
  return (
    <ContactStyled id="contact">
      <div>
        <HStyles>Contact Us</HStyles>{" "}
        <div>
          <img src={phone} alt="phone" />
          Call Us
        </div>
        <div>Email Us</div>
        <div>123 Company</div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
