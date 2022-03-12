import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import { rhythm } from "../utils/typography";
import LayoutStyles from "./layoutStyles";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TemplateTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  padding-bottom: ${rhythm(1)};
`;

const LinkStyle = styled((props) => <Link {...props}></Link>)`
  box-shadow: none;
  text-decoration: none;
  color: var(--textNormal);
`;

const upPageCount = () => {
  const pathname = window.location.pathname;
  const myRequest = new Request(`./api/count?page=${pathname}`);
  fetch(myRequest).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Run api");
    return response.blob();
  });
};

function Header() {
  return (
    <TemplateTitle>
      <LinkStyle to={"/"}>José Cabeda</LinkStyle>
    </TemplateTitle>
  );
}

export default function Template({ children }) {
  upPageCount();
  return (
    <LayoutStyles>
      <Row>
        <Header></Header>
      </Row>
      {children}
    </LayoutStyles>
  );
}
