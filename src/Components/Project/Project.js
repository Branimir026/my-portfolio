import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Project = ({ name, info, sourceCode, publishedURL, background }) => {
  return (
    <Col
      className="project d-flex flex-column justify-content-center"
      xs={12}
      md={5}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Row className="justify-content-center">
        <h3 className="projectName">{name}</h3>
      </Row>
      <Row className="justify-content-center">
        <p className="projectInfo">{info}</p>
      </Row>

      {sourceCode && (
        <Row className="justify-content-center">
          <a
            href={sourceCode}
            className="sourceCode"
            rel="noreferrer"
            target="_blank"
          >
            Check source code
          </a>
        </Row>
      )}

      <Row className="justify-content-center">
        <a
          href={publishedURL}
          className="published"
          rel="noreferrer"
          target="_blank"
        >
          Try it
        </a>
      </Row>
    </Col>
  );
};

export default Project;
