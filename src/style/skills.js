import styled from "styled-components";
import {
  DarkBackgroundColor,
  normalTextColor,
  primaryColor,
  secondaryColor,
} from "./global";

export const SkillsContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 1206px) {
    grid-template-columns: none;
    grind-template-rows: 1fr 1fr;
    justify-content: center;
  }
`;

export const TechNameUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  font-family: "Bebas Neue", cursive;
  color: ${normalTextColor};
  font-size: 2.3rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  list-style-type: none;

  @media screen and (max-width: 1206px) {
    width: 80%;
    margin: 0 auto;
    font-size: 2rem;
    justify-content: center;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const TechNameLi = styled.li`
  color: ${primaryColor};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: default;
  transition: 500ms;

  &:hover {
    transform: scale(1.2);
    color: ${(props) => props.color};
  }
`;

export const SolarSystemContainer = styled.ul`
  position: relative;
  width: min-content;
  height: 32rem;
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  list-style-type: none;

  @media screen and (max-width: 857px) {
    transform: scale(0.6);
    height: 20rem;
    padding: 1rem;
  }
  @media screen and (max-width: 345px) {
    transform: scale(0.5);
    height: 15rem;
    padding: 1rem;
  }
  @media screen and (max-width: 300px) {
    transform: scale(0.4);
    height: 12rem;
    padding: 1rem;
  }
`;

export const SolarSystemTechLi = styled.li`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: double 1px solid transparent;

  background-image: radial-gradient(transparent, ${DarkBackgroundColor});
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-image-slice: 1;

  display: flex;
  align-self: center;
  justify-self: center;

  animation: rotationSkillLi ${(props) => props.speed} linear infinite;
`;

export const SolarSystemTechDiv = styled.li`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: ${secondaryColor};
  border-radius: 50%;
  top: 0px;
  left: -1.25rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.3rem;
  color: ${DarkBackgroundColor};
  align-self: center;

  animation: rotationSolarSystemTechDiv ${(props) => props.speed} linear
    infinite;
`;

export const SolarSystemTechCenter = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 55px;
  height: 55px !important;
  border-radius: 50%;

  font-size: 1.8rem;
  background-color: radial-gradient(${DarkBackgroundColor}, transparent);
  color: ${secondaryColor};
  z-index: 10;
`;
