import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImg from "./Branimir_Belic.png";
import ParticleBackground from "./ParticleBackground";

const Welcome = () => {
  const changeColorOnHover = (e) => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.color = `#${color}`;
  };

  const changeColorOnExit = (e) => {
    e.target.style.color = "#d9cab3";
  };

  return (
    <Row id="HOME">
      <ParticleBackground />
      <Col className="profilePicture" xs={12} md={6}>
        <img
          className="animate__animated animate__fadeInLeft"
          src={myImg}
          alt="Branimir Belić"
        />
      </Col>
      <Col className="profile" xs={12} md={6}>
        <h2
          className="animate__animated animate__fadeInRight"
          onMouseOver={changeColorOnHover}
          onMouseLeave={changeColorOnExit}
        >
          I'm Branimir Belić <br /> web developer
        </h2>
      </Col>
    </Row>
  );
};

export default Welcome;
