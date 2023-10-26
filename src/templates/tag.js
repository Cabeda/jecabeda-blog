import React from "react";
import { Link } from "gatsby-link";
import { graphql } from "gatsby";

import Template from "../components/layout";
import Bio from "../components/Bio";
import Links from "../components/Links/Links";
import icon32 from "../../static/favicon.ico";

function Head({ title, description }) {
  return (
    <>
      <title>{title}</title>
      <html lang="en"></html>
      <meta name="description" content={description} />
      <link rel="icon" type="image/ico" href={icon32} />
    </>
  );
}

export default function BlogIndex({ location, data }) {
  const siteTitle = data.site.siteMetadata.title;
  const keywords = data.site.siteMetadata.keywords;
  const description = data.site.siteMetadata.description;
  const urlParams = new URLSearchParams(location.search);
  const tag = urlParams.get("tag");
  const posts = data.allMarkdownRemark.edges;
  const tags = [... new Set(posts.map((node) => node.node.frontmatter.tags).flat().filter(tag => tag !== null))];

  return (
    <Template location={location} title={siteTitle}>
      <div>
        {posts.map(({ node }) => {
          const title = node?.frontmatter?.title || node?.fields?.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: "1.5rem",
                }}
              >
                <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>
                {node.frontmatter.date} | {node.timeToRead} minutes to read
              </small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </div>
    </Template>
  );
}

export const pageQuery = graphql`
  query IndexQuery ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag }}} sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
