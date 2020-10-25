import styled from "styled-components";
import { rhythm } from '../utils/typography'

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
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

export default LayoutStyles;
