import React from 'react'
import PropTypes from 'prop-types'
import ItemChooser from './ItemChooser'
import { Link } from 'gatsby'

const SectionChosen = props => (
  <nav>
    <Link to="/">
      <div className="smlogo">
          <span className="icon fa-bicycle"></span>
      </div>
    </Link>
    <ul>
      <ItemChooser item="Work" />
      <ItemChooser item="Creative" />
      <ItemChooser item="Contact" />
    </ul>
  </nav>
)

export default SectionChosen
