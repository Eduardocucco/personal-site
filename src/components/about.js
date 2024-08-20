import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { textsAndConfigs } from "../textsAndConfigs";
import profile from "../images/aboutImage.png";

import {
  AboutContainer,
  Title,
  TitleBiggerText,
  Text,
  ProfileImage,
  IconContainer,
  IconLink,
  TextContainer,
} from "../style/about";
import { Fade } from "react-awesome-reveal";

export default class About extends Component {
  render() {
    return (
      <AboutContainer id="about">
        <TextContainer>
          <Fade direction="up" triggerOnce duration={1000} damping={1}>
            <Title>
              Hello, My name is<br />
              <TitleBiggerText>
                Emerson Eduardo Cucco. <br />
                Software Developer.
              </TitleBiggerText>
            </Title>
          </Fade>
          <Fade
            direction="up"
            delay={600}
            triggerOnce
            duration={1000}
            damping={1}
          >
            <Text>{textsAndConfigs.aboutMeText}</Text>
            <IconContainer>
              <IconLink href="https://github.com/Eduardocucco">
                <FaGithub className="sobre-icons" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/emerson-eduardo-cucco-8b9b1717a/">
                <FaLinkedin className="sobre-icons" />
              </IconLink>
            </IconContainer>
          </Fade>
        </TextContainer>

        <Fade
          triggerOnce
          direction="right"
          duration={1000}
          damping={1}
          style={{ display: "flex", width: "100%" }}
        >
          <ProfileImage src={profile} alt="it's me"></ProfileImage>
        </Fade>
      </AboutContainer>
    );
  }
}
