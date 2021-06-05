import React from "react";
import Project from "../Project/Project.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import todoListImage from "./todoList300.png";
import weatherAppImage from "./weatherApp300.png";
import convertToRomanImage from "./convertToRoman300.png";
import amazingMazeImage from "./amazingMaze300.png";

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
    <Row id="projects">
      <Col>
        <h1>Here You can check out my recent projects</h1>
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
  );
};

export default Projects;
