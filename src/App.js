import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation/Navigation.js";
import Footer from "./Components/Footer/Footer.js";
import Welcome from "./Components/Welcome/Welcome.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
