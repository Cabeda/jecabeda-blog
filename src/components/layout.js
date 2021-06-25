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

const LinkStyle = styled(props => <Link {...props}></Link>)`
  box-shadow: none;
  text-decoration: none;
  color: var(--textNormal);
`;

function Header() {
  return (
    <TemplateTitle>
      <LinkStyle to={"/"}>José Cabeda</LinkStyle>
    </TemplateTitle>
  );
}

export default function Template({ children }) {
  return (
    <LayoutStyles>
      <Row>
        <Header></Header>
      </Row>
      {children}
    </LayoutStyles>
  );
}
