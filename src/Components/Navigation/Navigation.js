import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
  const goTo = (e) => {
    console.log(e);
    document.getElementById(e.target.innerText).scrollIntoView(true);
  };

  return (
    <Row className="navigation justify-content-around">
      <Col xs={3} md={3}>
        <span onClick={goTo}>HOME</span>
      </Col>
      <Col xs={3} md={3}>
        <span onClick={goTo}>ABOUT</span>
      </Col>
      <Col xs={3} md={3}>
        <span onClick={goTo}>PROJECTS</span>
      </Col>
      <Col xs={3} md={3}>
        <span onClick={goTo}>CONTACT</span>
      </Col>
    </Row>
  );
};

export default Navigation;
