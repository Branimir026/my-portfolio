import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container>
      <Row id="ABOUT">
        <Col>
          <h2>About me</h2>
          <p>
            Hello friend, my name is Branimir Belić, I live in Zagreb, Croatia
            and I love coding.
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
            in 2017, I specialized in Databases and Web design, and got bacc.
            ing. techn. inf.
          </p>
          <p>
            In the last few months of college along with learning web design I
            started to get more and more interested in game design and{" "}
            <a href="https://unity.com/">Unity3D</a>. After I got familiar with
            it I finished my first simple 3D video game called{" "}
            <a href="https://bazzix.itch.io/amazing-maze">Amazing Maze</a>.
            There were a lot of obstacles on the way, but I pushed through.
          </p>
          <p>
            I became more interested in web design again and I started to learn
            Javascript. Eventually, I stumbled upon{" "}
            <a href="https://reactjs.org/">ReactJS</a> and I was immediately
            interested in it. Ever since I'm learning more and more. I
            understand there is still a long way ahead of me to learn as much as
            I can, but I don't mind, it will be fun experience.
          </p>
          <p>
            In my spare time I like to be outdoors and do things like hiking or
            playing some team sport with friends.
          </p>
          <p>
            I'm skilled in HTML, CSS, Bootstrap, Javascript, ReactJS and GitHub.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
