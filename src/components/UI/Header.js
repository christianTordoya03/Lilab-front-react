import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>Verduleria</LogoStyled>
      <ActionsStyled>
        <Link to="/cart">
          <button />
        </Link>
      </ActionsStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 40px;
`;

const LogoStyled = styled.h1`
  color: gray;
  cursor: pointer;
  font-weight: bold;
`;

const ActionsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Header;
