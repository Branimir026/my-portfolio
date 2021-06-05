import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = () => {
  return (
    <Row
      id="footer"
      className="flex-column justify-content-center align-items-center"
    >
      <Col className="d-flex justify-content-center" xs={12} md={6}>
        <h6>
          Contact me @{" "}
          <a href="mailto:br.belic@gmail.com" target="_blank" rel="noreferrer">
            br.belic@gmail.com
          </a>
        </h6>
      </Col>
      <Col className="icons d-flex justify-content-around" xs={12} md={6}>
        <a
          href="https://www.facebook.com/branimir.belic.5/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="icon facebook"
            icon={faFacebookSquare}
            size="3x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/branimir-beli%C4%87-552845151/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="icon linkedin"
            icon={faLinkedin}
            size="3x"
          />
        </a>
        <a
          href="https://github.com/Branimir026"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="icon github"
            icon={faGithubSquare}
            size="3x"
          />
        </a>
      </Col>
      <Col className="d-flex justify-content-center" xs={12} md={6}>
        <h6>
          <FontAwesomeIcon icon={faCopyright} /> Branimir Belić 2021
        </h6>
      </Col>
    </Row>
  );
};

export default Footer;
