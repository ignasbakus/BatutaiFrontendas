import Carousel from "react-bootstrap/Carousel";
import "../Styles/CarouselHomePage.css"

function CarouselHomePage() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item className="carouselItem" interval={500}>
          <img className="w-50" src={require("../images/Skraiduolis1.jpg")}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={500}>
          <img className="w-50" src={require("../images/IF-1925_600x450px_1-800x800_0.jpg")} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem" interval={500}>
          <img className="w-50" src={require("../images/pripuciamas-batutas-pilis-su-baseinu.jpg")} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHomePage;
