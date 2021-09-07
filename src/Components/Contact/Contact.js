import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <Container>
      <Row id="CONTACT" className="justify-content-center align-items-center">
        <Col
          className="d-flex justify-content-center"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 0 }}
        >
          <h2>
            In case you have some questions, or You want to know more about my
            projects, feel free to ask me
            <a
              href="mailto:br.belic@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              br.belic@gmail.com
            </a>
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
