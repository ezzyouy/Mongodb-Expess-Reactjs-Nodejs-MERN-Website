import React from "react";
import { Col, Row } from "react-bootstrap";

const CheckOutSteps = (props) => {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? "active" : ""}>Sign-In</Col>
      <Col className={props.step2 ? "active" : ""}>Shippement</Col>
      <Col className={props.step3 ? "active" : ""}>Payment</Col>
      <Col className={props.step4 ? "active" : ""}>Place Order</Col>
    </Row>
  );
};

export default CheckOutSteps;