import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImg from "./branimir.png";

const Welcome = () => {
  return (
    <Row id="HOME">
      <Col className="profilePicture" xs={12} md={6}>
        <img
          className="animate__animated animate__fadeInLeft"
          src={myImg}
          alt="Branimir Belić"
        />
      </Col>
      <Col className="profile" xs={12} md={6}>
        <h2 className="animate__animated animate__fadeInRight">
          I'm Branimir Belić <br /> web developer
        </h2>
      </Col>
    </Row>
  );
};

export default Welcome;
