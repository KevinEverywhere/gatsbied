import React from 'react'
import PropTypes from 'prop-types'

const SmallHeader = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Creative</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

SmallHeader.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default SmallHeader
