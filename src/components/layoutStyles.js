import styled from "styled-components";

const LayoutStyles = styled.div`
  body {
    --bg: white;
    --textNormal: #222;
    --textTitle: #222;
    --textLink: brown;
    --hr: hsla(0, 0%, 0%, 0.2);

    background-color: var(--bg);
    transition: background-color 0.25s linear;
  }

  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.5rem 1.25rem;
`;

export default LayoutStyles;
