import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImg from "./myself.png";

const Welcome = () => {
  return (
    <Row id="welcome">
      <Col className="profilePicture" xs={12} md={6}>
        <img src={myImg} alt="Branimir Belić" />
      </Col>
      <Col className="profile" xs={12} md={6}>
        <h2>
          I'm Branimir Belić <br /> web developer
        </h2>
      </Col>
    </Row>
  );
};

export default Welcome;
