import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const CountryLayout = () => {
    return (
      <StaticQuery
        query={graphql`
          query{
            allCountry{
              edges{
                node{
                  name
                  nativeName
                  code
                  latlng
                  borders
                }
              }
            }
          }
        `}
        render={data => (
          <>
          <div>
            <ul>
              { console.log(data) }
              { data.allCountry.edges.map((country, i) => {
                return <li key={i}>
                  {country.node.name} {  country.node.name != country.node.nativeName && country.node.nativeName.length > 0 && `(${country.node.nativeName})`}
                </li>
              })
            }
            </ul>
          </div>
          </>
        )}
      />
    )
  }

  export default CountryLayout
