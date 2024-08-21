import React, { Component } from "react";
import CreateHtmlList from "./projects";
import {
  Container,
  CategoryTitle,
  CategoryText,
} from "../../style/global";
import { Fade } from "react-awesome-reveal";

export default class Portfolio extends Component {
  render() {
    return (
      <Container id="portfolio">
        <Fade direction="up" triggerOnce duration={1000} damping={1}>
          <CategoryTitle>Projects</CategoryTitle>
          <CategoryText>
            Some personal projects that I developed through some courses and tutorials over time.
            *Some projects may still be in development.
          </CategoryText>
          <CreateHtmlList />
        </Fade>
      </Container>
    );
  }
}
