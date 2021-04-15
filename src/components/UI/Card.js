import React from "react";
import styled from "@emotion/styled";

const Card = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

const CardStyled = styled.div`
  border-bottom: 1px solid black;
`;

export default Card;
