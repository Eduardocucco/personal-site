import styled from "styled-components";

import { secondaryColor, normalTextColor } from "./global";

export const LinkIconContainers = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  right: 0;
  bottom: 0;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  margin-right: 0.5rem;

  visibility: hidden;
  animation: asideVisible 1.5s 1s forwards;

  @media screen and (max-width: 1136px) {
    border-right: none;
    justify-content: center;
    position: static;
    flex-direction: row;
    align-self: center;
    padding-bottom: 0.5rem;
  }
`;

export const IconsLinks = styled.a`
  font-size: 1.7rem;
  color: ${normalTextColor};
  margin-bottom: 0.5rem;
  transition: 1000ms;

  &:hover {
    color: ${secondaryColor};
  }

  @media screen and (max-width: 1136px) {
    font-size: 2.3rem;
    margin-bottom: 0;
    margin-left: 0.9rem;
  }
`;
