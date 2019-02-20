import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const ItemChooser = (props) => (
  <li><Link to={props.item.toLowerCase()}>{props.item}</Link></li>
)

export default ItemChooser
