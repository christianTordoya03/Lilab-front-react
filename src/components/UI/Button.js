import React from "react";
import styled from "@emotion/styled";

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  border-radius:12px;
  outline: none;
  transition: 250ms;
  &:hover {
    background-color:green;
    color; white;
  }
`;

export default Button;
