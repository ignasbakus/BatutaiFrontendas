import React from "react";
import "../Styles/Footer.css";
import { Row, Col } from "react-bootstrap";

function Footer(props) {
  return (
    <div id="footerContainer">
      <Row>
        <Row>
          <Col className="footerLeftMargin">
            <h2>Pripuciami batutai</h2>
          </Col>
        </Row>
        <Row>
          <Col className="footerLeftMargin">
            <p>Kažkas</p>
            <p>Kažkas</p>
            <p>Kažkas</p>
          </Col>
          <Col>
            <p>Kažkas</p>
            <p>Kažkas</p>
            <p>Kažkas</p>
          </Col>
          <Col></Col>
          <Col>
            <p>Kažkas</p>
            <p>Kažkas</p>
            <p>Kažkas</p>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Footer;
