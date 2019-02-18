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
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
