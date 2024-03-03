import React from "react";
import "../Styles/FeaturesHomePage.css";
import { Container, Col, Row } from "react-bootstrap";

function FeaturesHomePage() {
  return (
    <Container>
      <div className="mt-5 mb-5 text-center">
        <Row>
          <Col>
            <img
              className="featuresIcon"
              src={require("../images/real-time-icon.png")}
            />
            <p>
              Greita Greita Greita Greita Greita Greita Greita Greita Greita
              Greita Greita{" "}
            </p>
          </Col>
          <Col>
            <img
              className="featuresIcon"
              src={require("../images/check-mark-circle-line-icon.png")}
            />
            <p>
              Patikima Patikima Patikima Patikima Patikima Patikima Patikima
              Patikima Patikima{" "}
            </p>
          </Col>
          <Col>
            <img
              className="featuresIcon"
              src={require("../images/saving-icon.png")}
            />
            <p>
              Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu
              Pigu Pigu{" "}
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default FeaturesHomePage;
