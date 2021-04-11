import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Import fontsource
import "fontsource-montserrat";
import "fontsource-merriweather";

import { rhythm } from "../utils/typography";

const BioStyle = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: ${rhythm(2.5)};
`;

const Resume = styled.p`
  margin-left: 1rem;
  margin-bottom: 0;
`;

export default function Bio() {
  return (
    <BioStyle>
        <StaticImage src="./profile-pic.webp" loading="eager" aspectRatio={1/1} imgStyle={{ borderRadius: "50%" }} alt={`José Cabeda`} />
      <Resume>
        I'm <strong>José Cabeda</strong>, a data engineer focused on improving
        data systems and educating on how to use them. I also do a lot of
        planning and read as much as I can.
      </Resume>
    </BioStyle>
  );
}
