import LoremIpsum from "react-lorem-ipsum";
import { CarouselBox, CarouselStyled } from "../styles/carousel.styled";

// import pic1 from "../assets/PNG/kalen-emsley-98264-unsplash.png";
import pic2 from "../assets/PNG/michael-dam-258165-unsplash-1.png";
import Carousel from "better-react-carousel";

const NewsCarousel = () => {
  return (
    <CarouselStyled id="carousel">
      <Carousel>
        <Carousel.Item>
          <CarouselBox>
            <img src={pic2} alt="Lady" />
            <LoremIpsum avgWordsPerSentence={2} random={false} />
            Name | Role | Company
          </CarouselBox>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselBox>
            <img src={pic2} alt="Lady" />
            <LoremIpsum avgWordsPerSentence={2} random={false} />
            Name | Role | Company
          </CarouselBox>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselBox>
            <img src={pic2} alt="Lady" />
            <LoremIpsum avgWordsPerSentence={2} random={false} />
            Name | Role | Company
          </CarouselBox>
        </Carousel.Item>
      </Carousel>
    </CarouselStyled>
  );
};

export default NewsCarousel;
