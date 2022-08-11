import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="bio">
    <StaticImage
      className="bio-avatar"
      layout="fixed"
      formats={["auto", "webp", "avif"]}
      src="../images/profile-pic.webp"
      placeholder="blurred"
      height={100}
      quality={95}
      alt="My awesome picture in Ireland"
    />
    {(author?.name && author?.summary) && (
      <p>
        I'm <strong>{author?.name}</strong>, {author.summary}
      </p>
    )}
  </div>
  );
}
