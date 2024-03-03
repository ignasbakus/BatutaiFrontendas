import React from "react";
import { Carousel, Image } from "react-bootstrap";

function Banner(props) {
  return (
    <div>
      <Image
        fluid
        src={require("../images/istockphoto-464175893-2048x2048.jpg")}
        alt="Banner"
      />
      <Carousel.Caption>
        <p>Hello</p>
      </Carousel.Caption>
    </div>
  );
}

export default Banner;
