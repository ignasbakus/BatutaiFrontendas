import React from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  return (
    <div>
      <Navbar fixed="top" expand="md" className="bg-body-tertiary">
        <Navbar.Brand className="ms-4" href="#home">
          {props.brand}
        </Navbar.Brand>
        <Nav.Link className="me-4 ms-4" href="#home">
          {props.items}
        </Nav.Link>
        <Nav.Link className="me-4" href="#link">
          {props.reservation}
        </Nav.Link>
        <NavDropdown className="me-4" title={props.contacts} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="ms-auto me-4" href="#link">
          Prisijungti
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;
