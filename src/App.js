import React from "react";
import "./App.css";
import image from "./dinoIdle1.png";

const info =
  "Some info about me. Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum";

const projects = [
  {
    name: "Simple todo list",
    sourceCodeURL: "https://github.com/Branimir026/my-todo-list",
    publishedURL: "https://branimir026.github.io/my-todo-list/",
  },
  {
    name: "Weather app",
    sourceCodeURL: "https://github.com/Branimir026/react-weather",
    publishedURL: "https://branimir026.github.io/react-weather/",
  },
  {
    name: "Converter to roman numerals",
    sourceCodeURL: "https://github.com/Branimir026/convert-to-roman",
    publishedURL: "https://branimir026.github.io/convert-to-roman/",
  },
  {
    name: "Amazing Maze",
    publishedURL: "https://bazzix.itch.io/amazing-maze",
  },
];

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={image} alt="Branimir Belić" />
      <h2>Hello, I'm Branimir Belić, web developer</h2>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <p>{info}</p>
    </div>
  );
};

const Project = ({ name, sourceCode, publishedURL }) => {
  return (
    <div className="project">
      <h3 className="projectName">{name}</h3>
      {sourceCode && (
        <a
          href={sourceCode}
          className="sourceCode"
          rel="noreferrer"
          target="_blank"
        >
          Source code
        </a>
      )}
      <a
        href={publishedURL}
        className="published"
        rel="noreferrer"
        target="_blank"
      >
        Try it
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((item) => {
        return (
          <Project
            name={item.name}
            sourceCode={item.sourceCodeURL}
            publishedURL={item.publishedURL}
          />
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Projects />
    </div>
  );
}

export default App;
