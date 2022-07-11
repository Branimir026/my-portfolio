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
            I've been working as a professional{" "}
            <a href="https://vuejs.org/">vue.js</a> developer for a little less
            than a year now, and I love it. I have good understanding of vuex
            and vue-router. Every once in a while I do some PHP related tasks.
          </p>
          <p>
            I'm familiar with scss, and have basic knowledge and understanding
            about graphql.
          </p>
          <p>
            In my spare time I like to be outdoors and do things like hiking or
            playing some team sport with friends.
          </p>
          <p>
            I have good knowledge of HTML, CSS, Bootstrap, SCSS, Javascript,
            Vue.js, ReactJS and GitHub.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
