import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Row id="about">
      <Col>
        <h2>About me</h2>
        <p>
          Hello, my name is Branimir Belić, I live in Zagreb, Croatia and I love
          coding.
        </p>
        <p>
          I work as an Operations / IT administrator in{" "}
          <a
            href="https://hopal.hr/en/home-page/"
            className="currentCompany"
            rel="noreferrer"
            target="_blank"
          >
            HOPAL
          </a>
          , but my goal is to become excellent front-end web developer.
        </p>
        <p>
          I graduated from{" "}
          <a
            href="https://www.vsite.hr/"
            className="college"
            rel="noreferrer"
            target="_blank"
          >
            VSITE
          </a>{" "}
          in 2017, I specialized in Databases and Web design, and got bacc. ing.
          techn. inf.
        </p>
        <p>
          In the last few months of college along with learning responsive
          design I started to get more and more interested in game design and{" "}
          <a href="https://unity.com/">Unity3D</a>. After some time I finished
          my video game called{" "}
          <a href="https://bazzix.itch.io/amazing-maze">Amazing Maze</a>.
        </p>
        <p>
          Eventually I stumbled upon <a href="https://reactjs.org/">ReactJS</a>{" "}
          and I was blown away by it's simplicity and abilities of it's
          components. I understand there is still a long way ahead of me, but I
          don't mind, it will be fun experience.
        </p>
      </Col>
    </Row>
  );
};

export default About;
