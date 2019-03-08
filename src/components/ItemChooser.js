import React from 'react'
import { Link } from 'gatsby'

const ItemChooser = (props) => (
  <li><Link to={props.item.toLowerCase()}>{props.item}</Link></li>
)

export default ItemChooser
