import Carousel from "react-bootstrap/Carousel";
import "../Styles/CarouselHomePage.css";

function CarouselHomePage(props) {
  return (
    <>
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
    </>
  );
}

export default CarouselHomePage;
