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
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/img/`,
        name: 'img',
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
