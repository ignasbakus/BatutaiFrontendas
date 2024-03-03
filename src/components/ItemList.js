import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function ItemList(props) {
  return (
    <Container>
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={require("../images/mh_342-019v70_0.jpg")}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
