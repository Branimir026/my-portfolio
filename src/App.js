import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation.js";
import Footer from "./Components/Footer/Footer.js";
import Welcome from "./Components/Welcome/Welcome.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="App">
      <Navigation />
      <Welcome />
      <About />
      <Projects />
      <Footer />
    </Container>
  );
}

export default App;
