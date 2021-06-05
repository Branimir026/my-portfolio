import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
  return (
    <Row className="navigation justify-content-around">
      <Col xs={4} md={4}>
        <a href="#welcome">HOME</a>
      </Col>
      <Col xs={4} md={4}>
        <a href="#about">ABOUT</a>
      </Col>
      <Col xs={4} md={4}>
        <a href="#projects">PROJECTS</a>
      </Col>
    </Row>
  );
};

export default Navigation;
