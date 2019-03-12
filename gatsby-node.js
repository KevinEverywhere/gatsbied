/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const fetchRandomUser = () => axios.get(`https://randomuser.me/api/?results=500`);
  const countries = () => axios.get(`https://planetkevin.com/assets/countries.json`);
  // await for results
  const res = await fetchRandomUser();
  const res2 = await countries();

  // map into these results and create nodes
  res.data.results.map((user, i) => {
    // Create your node object
    const userNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `RandomUser`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      gender: user.gender,
      name: {
        title: user.name.title,
        first: user.name.first,
        last: user.name.last,
      },
      picture: {
        large: user.picture.large,
        medium: user.picture.medium,
        thumbnail: user.picture.thumbnail,
      }
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    // add it to userNode
    userNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(userNode);
  });
  const arrayObj = res2.data;
  console.log(arrayObj);
  arrayObj.map((country, i) => {
    // Create your node object
    const countryNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Country`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],
      name: country.name,
      latlng: country.latlng,
      code: country.cca3,
      borders: country.borders,
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(countryNode))
      .digest(`hex`);
    // add it to userNode
    countryNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(countryNode);
  });
  return;
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {        createPage({          path: node.fields.slug,          component: path.resolve(`./src/templates/blog-post.js`),          context: {            slug: node.fields.slug,          },        })      })      resolve()
//     })
//   })
// }
//
