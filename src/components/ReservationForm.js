import React from "react";
import "../Styles/ReservationForm.css";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

function ReservationForm(props) {
  return (
    <Form className="mt-4">
      <h4 className="text-center">Rezervacija</h4>
      <Row className="justify-content-center">
        <Col sm={12} md={3} lg={3} xl={3} xxl={3}>
          <Form.Group className="mt-3" controlId="formBasicName">
            <Form.Label>Vardas</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Vardas" />
          </Form.Group>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3} xxl={3}>
          <Form.Group className="mt-3" controlId="formBasicLastName">
            <Form.Label>Pavardė</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Pavardė" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={3} lg={3} xl={3} xxl={3}>
          <Form.Group className="mt-3" controlId="formBasicLastName">
            <Form.Label>Adresas</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Adresas" />
          </Form.Group>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3} xxl={3}>
          <Form.Group className="mt-3">
            <Form.Label>Miestas</Form.Label>
            <Form.Select size="sm" aria-label="Default select example">
              <option value="1">Kaunas</option>
              <option value="2">Vilnius</option>
              <option value="3">Prienai</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Form.Group className="mt-3" controlId="formBasicPhoneNumber">
            <Form.Label>Tel. Numeris</Form.Label>
            <InputGroup size="sm">
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
        <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Label>Elektroninis paštas</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="Elektroninis paštas"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
          <Button size="sm" className="mt-3" variant="primary" type="submit">
            Rezervuoti
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ReservationForm;
