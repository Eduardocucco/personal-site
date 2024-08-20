import styled from "styled-components";

import {
  primaryColor,
  secondaryColor,
  normalTextColor,
  backgroundColor,
} from "./global";

export const MenuMain = styled.menu`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  box-sizing: border-box;
  top: 0;
  background-color: ${backgroundColor};
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  margin-top: 0;

  box-shadow: 5px 21px 32px -6px rgba(0, 0, 0, 0.1);
  font-family: "Bebas Neue", cursive;
  visibility: hidden;
  animation: menuVisible 1.5s 1s forwards;
  z-index: 10;
`;

export const MenuContainer = styled.div`
  max-width: 1200px;
  width: 1200px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${primaryColor};
  font-weight: 700;
  margin: 0;
`;

export const MenuIcon = styled.div`
  font-size: 1.5rem;
  color: ${normalTextColor};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLabel = styled.h2`
  font-size: 1.1rem;
  margin: 0 0.5rem 0 0;

  @media screen and (max-width: 737px) {
    display: none;
  }
`;

export const MenuModal = styled.nav`
  position: fixed;

  min-width: 100%;
  height: 100vh;

  left: 0;
  top: 0;

  background-color: ${backgroundColor};

  display: ${(props) => (!props.visible ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 70;
`;

export const MenuLink = styled.a`
  font-weight: 700;
  font-size: 2rem;
  text-align: left;
  color: ${normalTextColor};
  padding: 0.5rem;
  transition: 1000ms;

  &:hover {
    color: ${secondaryColor};
  }
`;

export const CloseModal = styled.div`
  font-size: 2rem;
  color: ${normalTextColor};
  margin-top: 1rem;
`;
