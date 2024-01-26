import React from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useRef, useEffect } from "react";

function Header(props) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);
  let timeout;

  const showDropdown = () => {
    clearTimeout(timeout);
    setShow(true);
  };

  const hideDropdown = () => {
    timeout = setTimeout(() => {
      setShow(false);
    }, 150);
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <Navbar fixed="top" expand="md" className="bg-body-tertiary">
        <Navbar.Brand className="ms-4 brandName" href="#home">
          {props.brand}
        </Navbar.Brand>
        <NavDropdown
          className="me-4 ms-4"
          title={props.items}
          id="basic-nav-dropdown"
          show={show}
          onMouseEnter={showDropdown}
          onMouseLeave={hideDropdown}
          ref={dropdownRef}
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className="me-4" href="#home">
          {props.reservation}
        </Nav.Link>
        <Nav.Link className="me-4" href="#link">
          {props.contacts}
        </Nav.Link>
        <Nav.Link className="ms-auto me-4" href="#link">
          Prisijungti
        </Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;
