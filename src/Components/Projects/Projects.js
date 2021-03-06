import React from "react";
import Project from "../Project/Project.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import todoListImage from "./todoList_400x225.png";
import weatherAppImage from "./weatherApp_400x225.png";
import convertToRomanImage from "./convertToRoman_400x225.png";
import amazingMazeImage from "./amazingMaze_400x225.png";

const projects = [
  {
    name: "Simple todo list",
    info: "Simple todo list made for learning purposes and getting familiar with react",
    sourceCodeURL: "https://github.com/Branimir026/my-todo-list",
    publishedURL: "https://branimir026.github.io/my-todo-list/",
    backgroundImage: todoListImage,
  },
  {
    name: "Weather app",
    info: "Simple weather app made for learning and understanding react hooks and api calls",
    sourceCodeURL: "https://github.com/Branimir026/react-weather",
    publishedURL: "https://branimir026.github.io/react-weather/",
    backgroundImage: weatherAppImage,
  },
  {
    name: "Converter to roman numerals",
    info: "Simple converter of numbers from 1 - 3999 to roman numerals. Made for fun to train algorithms.",
    sourceCodeURL: "https://github.com/Branimir026/convert-to-roman",
    publishedURL: "https://branimir026.github.io/convert-to-roman/",
    backgroundImage: convertToRomanImage,
  },
  {
    name: "Amazing Maze",
    info: "Simple 3D video game. Made for fun and for learning and understanding C# and Unity3D game engine.",
    publishedURL: "https://bazzix.itch.io/amazing-maze",
    backgroundImage: amazingMazeImage,
  },
];

const Projects = () => {
  return (
    <Container>
      <Row id="PROJECTS">
        <Col>
          <h1>
            Here are some of my projects.
            <br />
            Feel free to check them out.
          </h1>
          <Row className="justify-content-center">
            {projects.map((item) => {
              return (
                <Project
                  key={item.name}
                  name={item.name}
                  info={item.info}
                  sourceCode={item.sourceCodeURL}
                  publishedURL={item.publishedURL}
                  background={item.backgroundImage}
                />
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
