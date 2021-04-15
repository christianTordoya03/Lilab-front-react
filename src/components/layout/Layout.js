import React from "react";
import styled from "@emotion/styled";
import Header from "../UI/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  );
};

const Body = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default Layout;
