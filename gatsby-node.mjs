import { resolve } from "path";
import { createFilePath } from "gatsby-source-filesystem";

async function createBlogPosts({ graphql, actions }) {
  // 1. Get a template file for this page
  const blogTemplate = resolve("./src/templates/blog-post.js");

  // 2. Query all posts
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  // 3. Loop over each blog post and create a page
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    actions.createPage({
      path: post.node.fields.slug,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([createBlogPosts(params)]);
}

export function onCreateNode({ node, actions, getNode }) {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    actions.createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}
