import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const BioStyle = styled.div`
display: grid;
grid-template-columns: auto auto
// max-height:2rem
`;

export default function Bio() {
  const data = useStaticQuery(graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
        }
      }
    }
  }
`)

// Set these values by editing "siteMetadata" in gatsby-config.js
const author = data.site.siteMetadata?.author

  return (
    <BioStyle className="bio">
    <StaticImage
      className="bio-avatar"
      layout="fixed"
      formats={["auto", "webp", "avif"]}
      src="../images/profile_2022.avif"
      placeholder="blurred"
      width={100}
      height={100}
      quality={100}
      alt="Sevilha 2022"
    />
    {(author?.name && author?.summary) && (
      <p>
        I'm <strong>{author?.name}</strong>, {author.summary}
      </p>
    )}
  </BioStyle>
  );
}
