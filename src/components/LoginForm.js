import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function LoginForm(props) {
  return (
    <form className="mt-5">
      <Row className="justify-content-center">
        <Col className="border border-bottom-0" xs={12} md={3}>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label>Elektroninis paštas</Form.Label>
            <Form.Control type="email" placeholder="Elektroninis paštas" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="border-end border-start" xs={12} md={3}>
          <Form.Group className="mt-3" controlId="formBasicPassword">
            <Form.Label>Slaptažodis</Form.Label>
            <Form.Control type="password" placeholder="Slaptažodis" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="border border-top-0" xs={12} md={3}>
          <Button className="mt-2 mb-3" variant="primary" type="submit">
            Prisijungti
          </Button>
        </Col>
      </Row>
    </form>
  );
}

export default LoginForm;
