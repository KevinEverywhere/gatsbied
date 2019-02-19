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
        icon: 'src/images/planetKevin.png',
        theme_color_in_head: true,
        include_favicon: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
