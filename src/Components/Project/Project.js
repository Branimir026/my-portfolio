import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { isDesktop } from "react-device-detect";

const Project = ({ name, info, sourceCode, publishedURL, background }) => {
  const removeBackground = (e) => {
    const targetElement = e.currentTarget;
    targetElement.style.background = `linear-gradient(rgba(55, 12, 52, 0.9), rgba(55, 12, 52, 0.9)), url(${background})`;
    targetElement.style.backgroundSize = "cover";
    targetElement.style.backgroundRepeat = "no-repeat";
    targetElement.style.backgroundPosition = "center";
  };

  const addBackground = (e) => {
    const targetElement = e.currentTarget;
    targetElement.style.background = `linear-gradient(rgba(55, 12, 52, 0), rgba(55, 12, 52, 0)), url(${background})`;
    targetElement.style.backgroundSize = "cover";
    targetElement.style.backgroundRepeat = "no-repeat";
    targetElement.style.backgroundPosition = "center";
  };

  return (
    <Col
      onMouseOver={isDesktop ? removeBackground : () => false}
      onMouseLeave={isDesktop ? addBackground : () => false}
      className="project d-flex flex-column justify-content-center"
      xs={10}
      md={5}
      style={
        isDesktop
          ? {
              background: `linear-gradient(rgba(55, 12, 52, 0), rgba(55, 12, 52, 0)), url(${background})`,
              backgroundSize: "cover",
              backgroundRepea: "no-repeat",
              backgroundPosition: "center",
            }
          : {
              background: `linear-gradient(rgba(55, 12, 52, 0.9), rgba(55, 12, 52, 0.9)), url(${background})`,
              backgroundSize: "cover",
              backgroundRepea: "no-repeat",
              backgroundPosition: "center",
            }
      }
    >
      <Row className="projName justify-content-center">
        <h3 className="projectName">{name}</h3>
      </Row>
      <Row className="projInfo justify-content-center">
        <p className="projectInfo">{info}</p>
      </Row>

      {sourceCode && (
        <Row className="projCode justify-content-center">
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

      <Row className="projPubl justify-content-center">
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
