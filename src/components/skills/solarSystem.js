import React from "react";
import {
  SolarSystemContainer,
  SolarSystemTechLi,
  SolarSystemTechDiv,
  SolarSystemTechCenter,
} from "../../style/skills";
import {
  SiStyledcomponents,
  SiRedux,
  SiJavascript,
  SiReact,
  SiJest,
} from "react-icons/si";

export default function SolarSystem() {
  return (
    <SolarSystemContainer>
      <SolarSystemTechLi size="28.5rem" speed="14s">
        <SolarSystemTechDiv speed="14s">
          <SiJest />
        </SolarSystemTechDiv>
      </SolarSystemTechLi>

      <SolarSystemTechLi size="21.5rem" speed="4s">
        <SolarSystemTechDiv speed="4s">
          <SiRedux />
        </SolarSystemTechDiv>
      </SolarSystemTechLi>

      <SolarSystemTechLi size="14.5rem" speed="10s">
        <SolarSystemTechDiv speed="10s">
          <SiStyledcomponents />
        </SolarSystemTechDiv>
      </SolarSystemTechLi>

      <SolarSystemTechLi size="7.5rem" speed="3s">
        <SolarSystemTechDiv speed="3s">
          <SiReact />
        </SolarSystemTechDiv>
      </SolarSystemTechLi>

      <SolarSystemTechCenter>
        <SiJavascript />
      </SolarSystemTechCenter>
    </SolarSystemContainer>
  );
}
