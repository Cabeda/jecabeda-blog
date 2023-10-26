import { resolve } from "path";
import { createFilePath } from "gatsby-source-filesystem";

async function createBlogPosts({ graphql, actions }) {
  // 1. Get a template file for this page
  const blogTemplate = resolve("./src/templates/blog-post.js");
  const tagTemplate = resolve("./src/templates/tag.js");

  // 2. Query all posts
  const { data } = await graphql(`
  {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
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

  const tags = [... new Set(posts.map((node) => node.node.frontmatter.tags).flat().filter(tag => tag !== null))];

  tags.forEach((tag) => {
    actions.createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag,
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
