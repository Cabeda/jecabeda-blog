import React from "react";
import styled from "styled-components";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import profilePic from "./profile-pic.webp";
import { rhythm } from "../utils/typography";

const BioStyle = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr;
  margin-bottom: ${rhythm(2.5)};
`;

const ImageBio = styled.img`
  width:100%;
  margin-bottom: 0;
  /* width: ${rhythm(3)}; */
  border-radius: 50%;
  display: block;
`;

const Resume = styled.p`
  margin-left: 1rem;
  margin-bottom: 0;
`;

export default function Bio() {
  return (
    <BioStyle>
      <ImageBio src={profilePic} alt={`José Cabeda`} />
      <Resume>
        I'm <strong>Jose Cabeda</strong>, a software developer writing a line of
        code at a time (when not travelling or reading some science fiction
        book)
      </Resume>
    </BioStyle>
  );
}
