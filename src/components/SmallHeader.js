import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const SmallHeader = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <nav>
          <Link to="/">
            <div className="smlogo">
                <span className="icon fa-bicycle"></span>
            </div>
          </Link>
          <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/creative">Creative</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
    </header>
)

SmallHeader.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default SmallHeader
