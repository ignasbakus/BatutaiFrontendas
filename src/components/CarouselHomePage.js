import Carousel from "react-bootstrap/Carousel";
import "../Styles/CarouselHomePage.css";
import { Container } from "react-bootstrap";

function CarouselHomePage(props) {
  return (
    <Container>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carouselItem" /*interval={5000}*/>
          <img className="w-50" src={require("../images/Skraiduolis1.jpg")} />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" /*interval={5000}*/>
          <img
            className="w-50"
            src={require("../images/IF-1925_600x450px_1-800x800_0.jpg")}
          />
        </Carousel.Item>
        <Carousel.Item className="carouselItem" /*interval={5000}*/>
          <img
            className="w-50"
            src={require("../images/pripuciamas-batutas-pilis-su-baseinu.jpg")}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselHomePage;
