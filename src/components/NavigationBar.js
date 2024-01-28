import React from "react";
import "../Styles/NavigationBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function NavigationBar(props) {
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
    }, 100);
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Navbar fixed="top" expand="md" className="bg-body-tertiary">
        <Navbar.Brand className="ms-4 brandName" href="/">
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
          <NavDropdown.Item href="#action/3.1">
            {props.dropdownValue1}
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            {props.dropdownValue2}
          </NavDropdown.Item>
          <NavDropdown.Item href="">
            {props.dropdownValue3}
          </NavDropdown.Item>
        </NavDropdown>
        <Link className="me-4 navBarLinks" to="/reservation">
          {props.reservation}
        </Link>
        <Link className="me-4 navBarLinks" to="/">{props.home}</Link>
        <Link className="me-4 navBarLinks" to="/contact">
          {props.contacts}
        </Link>
        <Link className="ms-auto me-4 navBarLinks" to="/login">
          {props.login}
        </Link>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
