import React from "react";
import "../Styles/ReservationForm.css";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

function ReservationForm(props) {
  return (
    <Form className="mt-5">
      <h1 className="text-center">Rezervacija</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={3}>
          <Form.Group className="mt-3" controlId="formBasicName">
            <Form.Label>Vardas</Form.Label>
            <Form.Control type="text" placeholder="Vardas" />
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group className="mt-3" controlId="formBasicLastName">
            <Form.Label>Pavardė</Form.Label>
            <Form.Control type="text" placeholder="Pavardė" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={3}>
          <Form.Group className="mt-3" controlId="formBasicLastName">
            <Form.Label>Adresas</Form.Label>
            <Form.Control type="text" placeholder="Adresas" />
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group className="mt-3">
            <Form.Label>Miestas</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Kaunas</option>
              <option value="2">Vilnius</option>
              <option value="3">Prienai</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form.Group className="mt-3" controlId="formBasicPhoneNumber">
            <Form.Label>Tel. Numeris</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon3">+370</InputGroup.Text>
              <Form.Control
                id="inputNumber"
                type="number"
                placeholder="Tel. Numeris"
              />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label>Elektroninis paštas</Form.Label>
            <Form.Control type="email" placeholder="Elektroninis paštas" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Button className="mt-3" variant="primary" type="submit">
            Rezervuoti
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ReservationForm;
