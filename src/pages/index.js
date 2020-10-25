import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Template from '../components/layout'
import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import Links from '../components/Links/Links'
import icon32 from '../../static/favicon.ico'

export default function BlogIndex({location, data}) {

    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Template location={location}>
        <div>
          <Helmet
            title={siteTitle}
            meta={[
              {
                name: 'description',
                content:
                  'A personal blog about a software engineer focused on data and stories',
              },
              {
                name: 'keywords',
                content:
                  'webdev, gatsbyjs, reactjs, frontend, graphql, design, data, blog',
              },
            ]}
            link={[{ rel: 'icon', type: 'image/ico', href: `${icon32}` }]}
          />
          <Bio />
          <Links />
          {posts.map(({ node }) => {
            
            const title = node?.frontmatter?.title || node?.fields?.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </Template>
    )
  }

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
