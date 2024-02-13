import React from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";

function ReservationForm(props) {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="formBasicName">
            <Form.Label>Vardas</Form.Label>
            <Form.Control type="text" placeholder="Vardas" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Pavardė</Form.Label>
            <Form.Control type="text" placeholder="Pavardė" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Adresas</Form.Label>
            <Form.Control type="text" placeholder="Adresas" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Miestas</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Kaunas</option>
              <option value="2">Vilnius</option>
              <option value="3">Prienai</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>Tel. Numeris</Form.Label>
            <InputGroup>
              <InputGroup.Text id="basic-addon3">+370</InputGroup.Text>
              <Form.Control type="number" placeholder="Tel. Numeris" />
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default ReservationForm;
