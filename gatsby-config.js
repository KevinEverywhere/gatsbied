module.exports = {
  siteMetadata: {
    title: "PlanetKevin 2019",
    author: "Kevin Ready",
    description: "Built from a design by Hunter Chang, this is the website for Kevin Ready"
  },
  pathPrefix: "/gatsbied",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SWAPI",
        // This is the field under which it's accessible
        fieldName: "swapi",
        // URL to query from
        url: "https://api.graphcms.com/simple/v1/swapi",
      },
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PlanetKevin',
        short_name: 'PlanetKevin',
        start_url: '/gatsbied',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/assets/images/planetKevin.png',
        theme_color_in_head: true,
        include_favicon: true,
        crossOrigin: `use-credentials`,
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'assetimages',
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images/`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/data/`,
        name: 'data',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ],
}
