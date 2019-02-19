import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Derived by Kevin Ready w/<a href="https://www.gatsbyjs.org/">gatsby</a> from a design by <a href="https://html5up.net">HTML5 UP</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
