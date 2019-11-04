/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `StripeSku`) {
    console.log(node.internal.type);
    console.log(node.id);
    let id = node.id;
    console.log(node.children);
    createNodeField({
      node,
      name: `slug`,
      value: id,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allStripeSku {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allStripeSku.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/product-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
