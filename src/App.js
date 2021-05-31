import React from "react";
import "./App.css";
import image from "./dinoIdle1.png";

const projects = [
  {
    name: "Simple todo list",
    info: "Simple todo list made for learning purposes and getting familiar with react",
    sourceCodeURL: "https://github.com/Branimir026/my-todo-list",
    publishedURL: "https://branimir026.github.io/my-todo-list/",
  },
  {
    name: "Weather app",
    info: "Simple weather app made for learning and understanding reach hooks and api calls",
    sourceCodeURL: "https://github.com/Branimir026/react-weather",
    publishedURL: "https://branimir026.github.io/react-weather/",
  },
  {
    name: "Converter to roman numerals",
    info: "Simple converter of numbers from 1 - 3999 to roman numerals. Made for fun to train algorithms.",
    sourceCodeURL: "https://github.com/Branimir026/convert-to-roman",
    publishedURL: "https://branimir026.github.io/convert-to-roman/",
  },
  {
    name: "Amazing Maze",
    info: "Simple 3D video game. Made for fun and for learning and understanding C# and Unity3D game engine.",
    publishedURL: "https://bazzix.itch.io/amazing-maze",
  },
];

const Navigation = () => {
  return (
    <ul id="navigationList">
      <li>
        <a href="#welcome">HOME</a>
      </li>
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
    </ul>
  );
};

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="profilePicture">
        <img src={image} alt="Branimir Belić" />
      </div>
      <div className="profile">
        <h2>
          I'm Branimir Belić <br /> web developer
        </h2>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div id="about">
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
        In the last few months of college along with learning responsive design
        I started to get more and more interested in game design and{" "}
        <a href="https://unity.com/">Unity3D</a>. After some time I finished my
        video game called{" "}
        <a href="https://bazzix.itch.io/amazing-maze">Amazing Maze</a>.
      </p>
      <p>
        Eventually I stumbled upon <a href="https://reactjs.org/">ReactJS</a>{" "}
        and I was blown away by it's simplicity and abilities of it's
        components. I understand there is still a long way ahead of me, but I
        don't mind, it will be fun experience.
      </p>
    </div>
  );
};

const Project = ({ name, info, sourceCode, publishedURL }) => {
  return (
    <div id="project">
      <h3 className="projectName">{name}</h3>
      <p className="projectInfo">{info}</p>
      {sourceCode && (
        <a
          href={sourceCode}
          className="sourceCode"
          rel="noreferrer"
          target="_blank"
        >
          Check source code
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
    <div id="projects">
      {projects.map((item) => {
        return (
          <Project
            key={item.name}
            name={item.name}
            info={item.info}
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
      <Navigation />
      <Welcome />
      <About />
      <Projects />
    </div>
  );
}

export default App;
