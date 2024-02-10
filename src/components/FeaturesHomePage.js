import React from "react";
import "../Styles/FeaturesHomePage.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function FeaturesHomePage() {
  return (
    <div className="mt-5 mb-5 text-center">
      <Row>
        <Col>
          <img
            className="featuresIcon"
            src={require("../images/real-time-icon.png")}
          />
          <p>Greita Greita Greita Greita Greita Greita Greita Greita Greita Greita Greita </p>
        </Col>
        <Col>
          <img
            className="featuresIcon"
            src={require("../images/check-mark-circle-line-icon.png")}
          />
          <p>Patikima Patikima Patikima Patikima Patikima Patikima Patikima Patikima Patikima </p>
        </Col>
        <Col>
          <img
            className="featuresIcon"
            src={require("../images/saving-icon.png")}
          />
          <p>Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu Pigu </p>
        </Col>
      </Row>
    </div>
  );
}

export default FeaturesHomePage;
