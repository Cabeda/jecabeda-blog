import React from "react";
import { Link } from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

import Bio from "../components/Bio";

export default function BlogPostTemplate({
  data: { previous, next, site, markdownRemark: post },
  location,
}) {
  const siteTitle = site.siteMetadata?.title || `Title`;

  const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;

  const DateStyle = styled.p`
    display: block;
    margin-bottom: 0;
    margin-top: 0;
  `;

  const BreakStyle = styled.hr`
    margin-bottom: 0;
  `;

  const PrevNext = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  `;

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Row>
          <DateStyle>{post.frontmatter.date}</DateStyle>
          <DateStyle>{post.timeToRead} minutes to read</DateStyle>
        </Row>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <BreakStyle />
        <Bio />

        <PrevNext>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </PrevNext>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;
