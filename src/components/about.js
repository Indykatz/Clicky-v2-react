import { AboutEach, AboutMembers, AboutStyled } from "../styles/about.styled";

import person1 from "../assets/PNG/michael-dam-258165-unsplash-1.png";
import person2 from "../assets/PNG/rawpixel-710264-unsplash.png";
import person3 from "../assets/PNG/alora-griffiths-800042-unsplash.png";
import person4 from "../assets/PNG/drop-the-label-movement-608463-unsplash.png";
import person5 from "../assets/PNG/fabio-spinelli-695744-unsplash.png";
import person6 from "../assets/PNG/akshar-dave-613564-unsplash.png";
import { useState } from "react";
import LoremIpsum from "react-lorem-ipsum";

const About = () => {
  const lorem = <LoremIpsum avgWordsPerSentence={2} random={false} />;

  const [team] = useState([
    {
      img: person1,
      about: lorem,
    },
    {
      img: person2,
      about: lorem,
    },
    {
      img: person3,
      about: lorem,
    },
    {
      img: person4,
      about: lorem,
    },
    {
      img: person5,
      about: lorem,
    },
    {
      img: person6,
      about: lorem,
    },
  ]);
  return (
    <AboutStyled id="about">
      <AboutMembers>
        {team.map((member, index) => (
          <AboutEach key={index}>
            <img src={member.img} alt="team member" />
            <p>{member.about}</p>
          </AboutEach>
        ))}
      </AboutMembers>
    </AboutStyled>
  );
};

export default About;
