import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

import Bio from "../components/Bio";
import { rhythm } from "../utils/typography";
import axios from "axios";

const upPageCount = (location) => {
  axios(`/api/count?page=${location}`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Run api");
    return response.blob();
  });
};

export default function BlogPostTemplate(props) {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;
  upPageCount(props.location.pathname);

  const DateStyle = styled.p`
    /* ...scale(-1 / 5); */
    display: block;
    margin-bottom: ${rhythm(1)};
    margin-top: ${rhythm(-1)};
  `;

  const BreakStyle = styled.hr`
    margin-bottom: ${rhythm(1)};
  `;

  const PrevNext = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  `;

  return (
    <Layout location={props.location}>
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <DateStyle>{post.frontmatter.date}</DateStyle>
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
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
