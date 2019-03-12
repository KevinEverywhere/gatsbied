const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const countries = () => axios.get(`https://planetkevin.com/assets/countries.json`);
  const res = await countries();
  const arrayObj = res.data;
  arrayObj.map((country, i) => {
    const countryNode = {
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Country`,
      },
      children: [],
      name: country.name,
      latlng: country.latlng,
      code: country.cca3,
      area: country.area,
      region: country.region,
      nativeName: country.nativeName,
      borders: country.borders,
    }
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(countryNode))
      .digest(`hex`);
    countryNode.internal.contentDigest = contentDigest;
    createNode(countryNode);
  });
  return;
}
