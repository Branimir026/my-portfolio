import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Navigation = () => {
  const goTo = (e) => {
    console.log(e);
    document.getElementById(e.target.innerText).scrollIntoView(true);
  };

  return (
    <Container>
      <Row className="navigation justify-content-around">
        <Col xs={4} md={4}>
          <span onClick={goTo}>HOME</span>
        </Col>
        <Col xs={4} md={4}>
          <span onClick={goTo}>ABOUT</span>
        </Col>
        <Col xs={4} md={4}>
          <span onClick={goTo}>PROJECTS</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
