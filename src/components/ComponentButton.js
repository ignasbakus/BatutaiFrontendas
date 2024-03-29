import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ComponentButton(props) {
  return (
    <Container>
      <div className="d-grid gap-2 mt-5">
        <Button as={Link} variant="primary" to="/reservation" size="lg">
          {props.title}
        </Button>
      </div>
    </Container>
  );
}

export default ComponentButton;

// function Button(props) {
//     return (
//       <div className="d-grid gap-2">
//         <Button variant="primary" size="lg">
//           {props.title}
//         </Button>
//       </div>
//     );
//   }
