import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }
/**
 *  <title>Kevin Ready | Creativist</title>
  >
  // { name: 'viewport', content: 'initial-scale=1, width=device-width, height=device-height, viewport-fit=cover'},
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  { name: 'theme-color', content: '#000000' },

  <link rel="icon" type="image/png" href="favicons/icon16.png" sizes="16x16">
  <link rel="icon" type="image/png" href="favicons/icon32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="favicons/icon96.png" sizes="96x96">
  <link rel="apple-touch-icon" href="favicons/icon120.png">
  <link rel="apple-touch-icon" sizes="180x180" href="favicons/icon180.png">
  <link rel="apple-touch-icon" sizes="152x152" href="favicons/icon152.png">
  <link rel="apple-touch-icon" sizes="167x167" href="favicons/icon167.png">
  <link rel="stylesheet" type="text/css" href="styles/planetkevin.css" />

 * @type {Object}
 */
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Kevin Ready is a developer, musician and adventurist.' },
              { name: 'keywords', content: 'freelance,react,node,javascript,contractor,developer' },
            ]}
          >
            <html lang="en" />
            <meta name="theme-color" content="#000000" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="description" content="Kevin Ready | Creativist" />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
