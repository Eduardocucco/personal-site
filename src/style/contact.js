import styled from "styled-components";
import { secondaryColor, normalTextColor, DarkBackgroundColor } from "./global";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: left;
  grid-row: 2;
  width: 600px;
  margin: 0 auto;
  align-self: center;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 664px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  font-size: 4rem;
  color: ${secondaryColor};
  margin-bottom: 2rem;
`;

export const InputTextEmail = styled.input`
  background-color: ${DarkBackgroundColor};
  color: ${normalTextColor};
  width: 100%;
  margin: 0 0 1rem 0;
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  height: 25px;
  border: 0;
`;

export const TextArea = styled.textarea`
  background-color: ${DarkBackgroundColor};
  color: ${normalTextColor};
  width: 100%;
  border: 0;
  margin: 0 0 1rem 0;
  padding: 0.5rem 0.2rem 0.5rem 0.2rem;
  height: 200px;
`;

export const Submit = styled.input`
  width: 100px;
  padding: 0.5rem;
  border: 0;
  align-self: flex-end;
  transition: 1000ms;
  background: ${DarkBackgroundColor};

  font-weight: 700;
  font-size: 1rem;
  color: ${normalTextColor};

  &:hover {
    color: ${DarkBackgroundColor};
    background-color: ${secondaryColor};
  }
`;
