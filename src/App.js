import About from "./components/about";
import Article from "./components/article";
import Banner from "./components/banner";
import NewsCarousel from "./components/carousel";
import Contact from "./components/contact";
import Enquiry from "./components/enquiry";
import Footer from "./components/footer";
import Header from "./components/header";
import Topics from "./components/topics";
import { AppStyles, ContentStyled } from "./styles/app.styled";
import "./fonts/proximanova_semibold.woff2";
import "./fonts/proximanova_regular.woff2";

const App = () => {
  return (
    <AppStyles>
      <ContentStyled>
        <Header />
        <Banner />
        <Article />
        <NewsCarousel />
        <Topics />
        <About />
        <Contact />
        <Enquiry />
        <Footer />
      </ContentStyled>
    </AppStyles>
  );
};

export default App;
