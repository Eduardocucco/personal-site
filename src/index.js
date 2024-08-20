import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./style/global";

import Menu from "./components/menu";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio/";
import Contact from "./components/contact";
import Aside from "./components/aside";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Menu />
    <About />
    <Experience />
    <Skills />
    <Portfolio />
    <Contact />
    <Aside />
  </React.StrictMode>,
  document.getElementById("root")
);
