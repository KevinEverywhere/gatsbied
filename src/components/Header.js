import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-bicycle"></span>
        </div>
        <div className="content">
            <div className="inner">
              <h2>Welcome!</h2>
              <p className="singleSpace">
                  I am a Mobile-first
              </p>
              <p className="singleSpace">
                 front end developer who enjoys
              </p>
              <p className="singleSpace">
                playing keytar and bicycling
             </p>
             <p className="singleSpace">
             when not pushing cloud content.
              </p>
              <p>
                ©2019 Kevin Ready
              </p>
          </div>
        </div>
        <nav>
            <ul>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/creative">Creative</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
