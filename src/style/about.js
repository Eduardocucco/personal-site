import styled from "styled-components";
import { primaryColor, secondaryColor, normalTextColor } from "./global";

export const AboutContainer = styled.section`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;

  font-family: "Roboto";

  @media screen and (max-width: 1206px) {
    height: 60vh;
    margin: 0 auto;
    margin: 5rem 1.5rem 5rem 1.5rem;
  }

  @media screen and (max-width: 866px) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
    height: min-content !important;
    margin-top: 6rem;
  }
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 866px) {
    width: 100%;
    grid-row: 2;
  }
`;

export const Title = styled.h1`
  font-family: "roboto";
  font-size: 1.1rem;
  text-align: left;
  font-weight: 700;
  color: ${secondaryColor};
  margin: 0;

  @media only screen and (max-width: 1206px) {
    font: 1rem;
  }
`;

export const TitleBiggerText = styled.p`
  font-family: "Bebas Neue", cursive;
  color: ${primaryColor};
  font-size: 3.5rem;
  line-height: 3.2rem;
  margin: 0;

  @media only screen and (max-width: 1206px) {
    font-size: 3rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 472px) {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${normalTextColor};
  text-align: left;
  font-weight: 400;

  max-width: 500px;
  margin-top: 1rem;
  margin-bottom: 0;
`;

export const ProfileImage = styled.img`
  width: 30rem;
  height: 30rem;
  margin-left: 5rem;
  align-self: center;

  @media screen and (max-width: 1206px) {
    width: 20rem;
    height: auto;
    margin: 0 auto;
    justify-self: center;
  }

  @media only screen and (max-width: 866px) {
    width: 9rem;
    height: auto;
    margin: 0;
    justify-self: left;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

export const IconLink = styled.a`
  font-size: 1.7rem;
  padding-right: 0.2rem;
  color: ${normalTextColor};
  transition: 1000ms;

  &:hover {
    color: ${secondaryColor};
  }
`;
